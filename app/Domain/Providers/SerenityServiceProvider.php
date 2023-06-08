<?php

namespace App\Domain\Providers;

use App\Domain\Operations\AddTeamMember;
use App\Domain\Operations\CreateNewUser;
use App\Domain\Operations\CreateTeam;
use App\Domain\Operations\DeleteTeam;
use App\Domain\Operations\DeleteUser;
use App\Domain\Operations\InviteTeamMember;
use App\Domain\Operations\RemoveTeamMember;
use App\Domain\Operations\ResetUserPassword;
use App\Domain\Operations\UpdateTeamName;
use App\Domain\Operations\UpdateUserPassword;
use App\Domain\Operations\UpdateUserProfileInformation;
use App\Domain\Packages\InertiaTables\InertiaTable;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Inertia\Response as InertiaResponse;
use Serenity\Serenity;

class SerenityServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    $this->configurePermissions();
    $this->configureInertiaTables();

    Serenity::createUsersUsing(CreateNewUser::class);
    Serenity::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
    Serenity::updateUserPasswordsUsing(UpdateUserPassword::class);
    Serenity::resetUserPasswordsUsing(ResetUserPassword::class);
    Serenity::createTeamsUsing(CreateTeam::class);
    Serenity::updateTeamNamesUsing(UpdateTeamName::class);
    Serenity::addTeamMembersUsing(AddTeamMember::class);
    Serenity::inviteTeamMembersUsing(InviteTeamMember::class);
    Serenity::removeTeamMembersUsing(RemoveTeamMember::class);
    Serenity::deleteTeamsUsing(DeleteTeam::class);
    Serenity::deleteUsersUsing(DeleteUser::class);

    RateLimiter::for('login', function (Request $request) {
      $email = (string) $request->email;

      return Limit::perMinute(5)->by($email.$request->ip());
    });

    RateLimiter::for('two-factor', function (Request $request) {
      return Limit::perMinute(5)->by($request->session()->get('login.id'));
    });
  }

  /**
   * Configure the roles and permissions that are available within the application.
   */
  protected function configurePermissions(): void
  {
    Serenity::defaultApiTokenPermissions(['read']);

    Serenity::role('admin', 'Administrator', [
      'create',
      'read',
      'update',
      'delete',
    ])->description('Administrator users can perform any action.');

    Serenity::role('editor', 'Editor', [
      'read',
      'create',
      'update',
    ])->description('Editor users have the ability to read, create, and update.');
  }

  protected function configureInertiaTables(): void
  {
    InertiaTable::defaultGlobalSearch('Search ...');

    InertiaResponse::macro('getQueryBuilderProps', function () {
      return $this->props['queryBuilderProps'] ?? [];
    });

    InertiaResponse::macro('table', function (callable $withTableBuilder = null) {
      $tableBuilder = new InertiaTable(request());

      if ($withTableBuilder) {
        $withTableBuilder($tableBuilder);
      }

      return $tableBuilder->applyTo($this);
    });
  }
}
