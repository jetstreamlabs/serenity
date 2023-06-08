<?php

namespace App\Domain\Services\Admin;

use App\Domain\Contracts\Repositories\UserRepository;
use App\Domain\Models\User;
use App\Domain\Requests\User\DeleteRequest;
use App\Domain\Requests\User\DestroyRequest;
use App\Domain\Requests\User\RestoreRequest;
use App\Domain\Requests\User\StoreRequest;
use App\Domain\Requests\User\UpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Serenity\Payloads\Payload;
use Serenity\Services\Service;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class UserService extends Service
{
  /**
   * Create a new instance of the service.
   */
  public function __construct(
      protected UserRepository $users
    ) {
  }

  protected function userSearch(): AllowedFilter
  {
    return AllowedFilter::callback('global', function ($query, $value) {
      $query->where(function ($query) use ($value) {
        Collection::wrap($value)->each(function ($value) use ($query) {
          $query
            ->orWhere('username', 'LIKE', "%{$value}%")
            ->orWhere('email', 'LIKE', "%{$value}%")
            ->orWhere('created_at', 'LIKE', "%{$value}%");
        });
      });
    });
  }

  public function index(): Payload
  {
    $users = QueryBuilder::for(User::class)
      ->defaultSort('username')
      ->allowedSorts(['username', 'email', 'created_at'])
      ->allowedFilters(['username', 'email', 'created_at', $this->userSearch()])
      ->paginate(10)
      ->withQueryString();

    return $this->payloadResponse([
      'data' => ['users' => $users],
    ]);
  }

  /**
   * Return the payload for a create response.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Serenity\Payload
   */
  public function create(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a show response.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Serenity\Payload
   */
  public function show(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for an edit response.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Serenity\Payload
   */
  public function edit(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a store response.
   *
   * @param  \App\Domain\Requests\User\StoreRequest  $request
   * @return \Serenity\Payload
   */
  public function store(StoreRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for an update response.
   *
   * @param  \App\Domain\Requests\User\UpdateRequest  $request
   * @return \Serenity\Payload
   */
  public function update(UpdateRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a delete response.
   *
   * @param  \App\Domain\Requests\User\DeleteRequest  $request
   * @return \Serenity\Payload
   */
  public function delete(DeleteRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a restore response.
   *
   * @param  \App\Domain\Requests\User\RestoreRequest  $request
   * @return \Serenity\Payload
   */
  public function restore(RestoreRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a destroy response.
   *
   * @param  \App\Domain\Requests\User\DestroyRequest  $request
   * @return \Serenity\Payload
   */
  public function destroy(DestroyRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }
}
