<?php

namespace App\Domain\Serenity;

use App\Domain\Models\Team;
use App\Domain\Models\User;
use Closure;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Serenity\Contracts\InvitesTeamMembersInterface;
use Serenity\Events\InvitingTeamMember;
use Serenity\Mail\TeamInvitation;
use Serenity\Rules\Role;
use Serenity\Serenity;

class InviteTeamMember implements InvitesTeamMembersInterface
{
  /**
   * Invite a new team member to the given team.
   */
  public function invite(User $user, Team $team, string $email, string $role = null): void
  {
    Gate::forUser($user)->authorize('addTeamMember', $team);

    $this->validate($team, $email, $role);

    InvitingTeamMember::dispatch($team, $email, $role);

    $invitation = $team->teamInvitations()->create([
      'email' => $email,
      'role' => $role,
    ]);

    Mail::to($email)->send(new TeamInvitation($invitation));
  }

  /**
   * Validate the invite member operation.
   */
  protected function validate(Team $team, string $email, ?string $role): void
  {
    Validator::make([
      'email' => $email,
      'role' => $role,
    ], $this->rules($team), [
      'email.unique' => __('This user has already been invited to the team.'),
    ])->after(
      $this->ensureUserIsNotAlreadyOnTeam($team, $email)
    )->validateWithBag('addTeamMember');
  }

  /**
   * Get the validation rules for inviting a team member.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  protected function rules(Team $team): array
  {
    return array_filter([
      'email' => [
        'required', 'email',
        Rule::unique('team_invitations')->where(function (Builder $query) use ($team) {
          $query->where('team_id', $team->id);
        }),
      ],
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