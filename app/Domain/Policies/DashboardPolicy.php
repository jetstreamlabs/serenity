<?php

namespace App\Domain\Policies;

use App\Domain\Models\Dashboard;
use App\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class DashboardPolicy
{
  use HandlesAuthorization;

  /**
   * Determine whether the user can view the model.
   */
  public function view(User $user): Response
  {
    if ($user === auth()->user()) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can create models.
   */
  public function create(User $user): Response
  {
    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can update the model.
   */
  public function update(User $user, Dashboard $dashboard): Response
  {
    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can delete the model.
   */
  public function delete(User $user, Dashboard $dashboard): Response
  {
    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can restore the model.
   */
  public function restore(User $user, Dashboard $dashboard): Response
  {
    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can permanently delete the model.
   */
  public function destroy(User $user, Dashboard $dashboard): Response
  {
    return Response::denyWithStatus(403);
  }
}
