<?php

namespace App\Domain\Operations;

use App\Domain\Models\Team;
use App\Domain\Models\User;
use Closure;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;
use Serenity\Contracts\AddsTeamMembers;
use Serenity\Events\AddingTeamMember;
use Serenity\Events\TeamMemberAdded;
use Serenity\Rules\Role;
use Serenity\Serenity;

class AddTeamMember implements AddsTeamMembers
{
  /**
   * Add a new team member to the given team.
   */
  public function add(User $user, Team $team, string $email, string $role = null): void
  {
    Gate::forUser($user)->authorize('addTeamMember', $team);

    $this->validate($team, $email, $role);

    $newTeamMember = Serenity::findUserByEmailOrFail($email);

    AddingTeamMember::dispatch($team, $newTeamMember);

    $team->users()->attach(
      $newTeamMember, ['role' => $role]
    );

    TeamMemberAdded::dispatch($team, $newTeamMember);
  }

  /**
   * Validate the add member operation.
   */
  protected function validate(Team $team, string $email, ?string $role): void
  {
    Validator::make([
      'email' => $email,
      'role' => $role,
    ], $this->rules(), [
      'email.exists' => __('We were unable to find a registered user with this email address.'),
    ])->after(
      $this->ensureUserIsNotAlreadyOnTeam($team, $email)
    )->validateWithBag('addTeamMember');
  }

  /**
   * Get the validation rules for adding a team member.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  protected function rules(): array
  {
    return array_filter([
      'email' => ['required', 'email', 'exists:users'],
      'role' => Serenity::hasRoles()
        ? ['required', 'string', new Role]
        : null,
    ]);
  }

  /**
   * Ensure that the user is not already on the team.
   */
  protected function ensureUserIsNotAlreadyOnTeam(Team $team, string $email): Closure
  {
    return function ($validator) use ($team, $email) {
      $validator->errors()->addIf(
        $team->hasUserWithEmail($email),
        'email',
        __('This user already belongs to the team.')
      );
    };
  }
}
