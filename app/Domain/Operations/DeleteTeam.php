<?php

namespace App\Domain\Operations;

use App\Domain\Models\Team;
use Serenity\Contracts\DeletesTeams;

class DeleteTeam implements DeletesTeams
{
  /**
   * Delete the given team.
   */
  public function delete(Team $team): void
  {
    $team->purge();
  }
}
