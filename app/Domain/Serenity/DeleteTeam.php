<?php

namespace App\Domain\Serenity;

use App\Domain\Models\Team;
use Serenity\Contracts\DeletesTeamsInterface;

class DeleteTeam implements DeletesTeamsInterface
{
  /**
   * Delete the given team.
   */
  public function delete(Team $team): void
  {
    $team->purge();
  }
}