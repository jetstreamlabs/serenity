<?php

namespace App\Domain\Operations;

use App\Domain\Models\Team;
use App\Domain\Models\User;
use Illuminate\Support\Facades\DB;
use Serenity\Contracts\DeletesTeams;
use Serenity\Contracts\DeletesUsers;

class DeleteUser implements DeletesUsers
{
  /**
   * The team deleter implementation.
   *
   * @var \Serenity\Contracts\DeletesTeams
   */
  protected $deletesTeams;

  /**
   * Create a new action instance.
   */
  public function __construct(DeletesTeams $deletesTeams)
  {
    $this->deletesTeams = $deletesTeams;
  }

  /**
   * Delete the given user.
   */
  public function delete(User $user): void
  {
    DB::transaction(function () use ($user) {
      $this->deleteTeams($user);
      $user->deleteProfilePhoto();
      $user->tokens->each->delete();
      $user->delete();
    });
  }

  /**
   * Delete the teams and team associations attached to the user.
   */
  protected function deleteTeams(User $user): void
  {
    $user->teams()->detach();

    $user->ownedTeams->each(function (Team $team) {
      $this->deletesTeams->delete($team);
    });
  }
}
