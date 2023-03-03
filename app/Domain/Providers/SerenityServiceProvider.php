<?php

namespace App\Domain\Providers;

use App\Domain\Serenity\AddTeamMember;
use App\Domain\Serenity\CreateNewUser;
use App\Domain\Serenity\CreateTeam;
use App\Domain\Serenity\DeleteTeam;
use App\Domain\Serenity\DeleteUser;
use App\Domain\Serenity\InviteTeamMember;
use App\Domain\Serenity\RemoveTeamMember;
use App\Domain\Serenity\ResetUserPassword;
use App\Domain\Serenity\UpdateTeamName;
use App\Domain\Serenity\UpdateUserPassword;
use App\Domain\Serenity\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
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
}
