<?php

namespace App\Domain\Serenity;

use App\Domain\Models\Team;
use App\Domain\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;
use Serenity\Contracts\CreatesTeamsInterface;
use Serenity\Events\AddingTeam;
use Serenity\Serenity;

class CreateTeam implements CreatesTeamsInterface
{
  /**
   * Validate and create a new team for the given user.
   *
   * @param  array<string, string>  $input
   */
  public function create(User $user, array $input): Team
  {
    Gate::forUser($user)->authorize('create', Serenity::newTeamModel());

    Validator::make($input, [
      'name' => ['required', 'string', 'max:255'],
    ])->validateWithBag('createTeam');

    AddingTeam::dispatch($user);

    $user->switchTeam($team = $user->ownedTeams()->create([
      'name' => $input['name'],
      'personal_team' => false,
    ]));

    return $team;
  }
}
