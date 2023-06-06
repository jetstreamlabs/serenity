<?php

namespace App\Actions\Private\Admin\User;

use App\Domain\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Response;
use Serenity\Foundation\Action;
use Serenity\Queries\Filters\FuzzyFilter;
use Serenity\Queries\Sorts\SortNullsLast;
use Serenity\Requests\Admin\User\BulkDestroyUserRequest;
use Serenity\Requests\Admin\User\DestroyUserRequest;
use Serenity\Requests\Admin\User\ImpersonalLoginUserRequest;
use Serenity\Requests\Admin\User\StoreUserRequest;
use Serenity\Requests\Admin\User\UpdateUserRequest;
use Serenity\Rules\Role;
use Serenity\Settings\GeneralSettings;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class UserAction extends Action
{
  /**
   * Display a listing of the resource.
   */
  public function index(IndexUserRequest $request): Response|JsonResponse
  {
    $builderUsersQuery = QueryBuilder::for(User::class)
        ->allowedFilters([
          AllowedFilter::custom('search', new FuzzyFilter(
            'id',
            'first_name',
            'last_name',
            'email',
            'email_verified_at'
          )),
          AllowedFilter::callback('role', fn (Builder $query, $value) => $query->role($value)),
          AllowedFilter::callback('status', function (Builder $query, $value) {
            if ($value === 'pending') {
              return $query->whereNull('email_verified_at');
            } else {
              return $query->whereActive($value)->whereNotNull('email_verified_at');
            }
          }),
        ])
        ->defaultSort('id')
        ->allowedSorts(['id', 'first_name', 'email', 'email_verified_at', AllowedSort::custom('last_active_at', new SortNullsLast())]);

    if ($request->wantsJson() && $request->get('bulk_select_all')) {
      return response()->json($builderUsersQuery->select(['id'])->pluck('id'));
    }

    $builderUsers = $builderUsersQuery
        ->with('roles')
        ->select(['id', 'first_name', 'last_name', 'email', 'email_verified_at', 'active', 'last_active_at'])
        ->paginate(request()->get('per_page'))
        ->withQueryString();

    return Inertia::render('BuilderUser/Index', [
      'builderUsers' => $builderUsers,
      'filterOptions' => [
        'roles' => Role::all()->map->only(['name'])->pluck('name'),
      ],
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(): Response
  {
    $this->authorize('admin.user.create');
    $roles = Role::all();

    return Inertia::render('Admin/User/Create', [
      'locales' => app(GeneralSettings::class)->available_locales,
      'defaultLocale' => app(GeneralSettings::class)->default_locale,
      'roles' => $roles,
    ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  StoreUserRequest  $request
   */
  public function store(StoreUserRequest $request)
  {
    $validated = $request->validated();

    $builderUser = User::create($validated);

    $builderUser->roles()->sync([$request->input('role_id')]);

    return redirect()->route('admin.users.index')->with(['message' => ___('serenity', 'Operation successful')]);
  }

  /**
   * Display the specified resource.
   *
   * @param  BuilderUser  $builderUser
   */
  public function show(User $user)
  {
    $this->authorize('builder.builder-user.show', $builderUser);

    return Inertia::render('BuilderUser/Show', [
      'builderUser' => $builderUser,
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param BuilderUser $builderUser
   */
  public function edit(BuilderUser $builderUser)
  {
    $this->authorize('builder.builder-user.edit', $builderUser);

    $builderUser->load('roles');

    $roles = Role::all();

    return Inertia::render('BuilderUser/Edit', [
      'builderUser' => $builderUser,
      'avatar' => $builderUser->getMedia('avatar'),
      'locales' => app(GeneralSettings::class)->available_locales,
      'roles' => $roles,
    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param UpdateBuilderUserRequest $request
   * @param BuilderUser $builderUser
   */
  public function update(UpdateUserRequest $request, BuilderUser $builderUser)
  {
    $validated = $request->validated();

    $builderUser->update($validated);

    if ($request->input('role_id')) {
      $builderUser->roles()->sync([$request->input('role_id')]);
    }

    if ($request->wantsJson()) {
      return response()->json('success');
    }

    return redirect()->route('builder.builder-users.index')->with(['message' => ___('builder', 'Operation successful')]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param DestroyBuilderUserRequest $request
   * @param BuilderUser $builderUser
   */
  public function destroy(DestroyUserRequest $request, BuilderUser $builderUser)
  {
    $builderUser->delete();

    return redirect()->back()->with(['message' => ___('builder', 'Operation successful')]);
  }

  /**
   * Resend verification notification for user.
   *
   * @param BuilderUser $builderUser
   */
  public function resendEmailVerificationNotification(BuilderUser $builderUser)
  {
    if (! $builderUser->hasVerifiedEmail()) {
      if ($builderUser->wasInvited()) {
        // FIXME: refactor mailable class
        BuilderUserInvitationController::sendInvitation(
          email: $builderUser->email,
          userFullName: Auth::user()->first_name.' '.Auth::user()->last_name,
        );
      } else {
        $builderUser->sendEmailVerificationNotification();
      }
    }

    return redirect()->back()->with(['message' => ___('builder', 'Operation successful')]);
  }

  /**
   * Bulk destroy users.
   *
   * @param BulkDestroyUserRequest $request
   */
  public function bulkDestroy(BulkDestroyUserRequest $request)
  {
    DB::transaction(function () use ($request) {
      collect($request->validated()['ids'])
          ->chunk(1000)
          ->each(function ($bulkChunk) {
            BuilderUser::whereIn('id', $bulkChunk)->delete();
          });
    });

    return redirect()->back()->with(['message' => ___('builder', 'Operation successful')]);
  }

  /**
   * Bulk deactivate users.
   *
   * @param BulkDestroyBuilderUserRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function bulkDeactivate(BulkDestroyUserRequest $request)
  {
    DB::transaction(function () use ($request) {
      collect($request->validated()['ids'])
          ->chunk(1000)
          ->each(function ($bulkChunk) {
            BuilderUser::whereIn('id', $bulkChunk)->update(['active' => false]);
          });
    });

    return redirect()->back()->with(['message' => ___('builder', 'Operation successful')]);
  }

  /**
   * Bulk activate users.
   *
   * @param BulkDestroyBuilderUserRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function bulkActivate(BulkDestroyUserRequest $request)
  {
    DB::transaction(function () use ($request) {
      collect($request->validated()['ids'])
          ->chunk(1000)
          ->each(function ($bulkChunk) {
            BuilderUser::whereIn('id', $bulkChunk)->update(['active' => true]);
          });
    });

    return redirect()->back()->with(['message' => ___('builder', 'Operation successful')]);
  }

  public function impersonalLogin(ImpersonalLoginUserRequest $request, BuilderUser $builderUser)
  {
    Auth::login($builderUser);

    return redirect()->route('builder.home');
  }
}
