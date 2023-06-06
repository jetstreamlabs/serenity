<?php

namespace App\Domain\Operations;

use App\Domain\Concerns\PasswordValidationRules;
use App\Domain\Models\Role;
use App\Domain\Models\Team;
use App\Domain\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Serenity\Contracts\CreatesNewUsers;
use Serenity\Serenity;
use Spatie\Permission\PermissionRegistrar;

class CreateNewUser implements CreatesNewUsers
{
  use PasswordValidationRules;

  /**
   * Create a newly registered user.
   *
   * @param  array<string, string>  $input
   */
  public function create(array $input): User
  {
    Validator::make($input, [
      'username' => ['required', 'string', 'max:255', 'unique:users'],
      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
      'password' => $this->passwordRules(),
      'terms' => Serenity::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
    ])->validate();

    return DB::transaction(function () use ($input) {
      return tap(User::create([
        'username' => $input['username'],
        'email' => Str::lower($input['email']),
        'password' => Hash::make($input['password']),
      ]), function (User $user) {
        $this->createTeam($user);
      });
    });
  }

  /**
   * Create a personal team for the user.
   */
  protected function createTeam(User $user): void
  {
    $user->ownedTeams()->save(Team::forceCreate([
      'user_id' => $user->id,
      'name' => $user->username."'s Team",
      'personal_team' => true,
    ]));

    $user->currentTeam();

    $user->register()
      ->assignRole(['admin']);
  }
}
