<?php

namespace App\Domain\Policies;

use App\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
  use HandlesAuthorization;

  /**
   * Determine whether the user can view any models.
   */
  public function viewAny(User $user): Response
  {
    if ($user->can('view-users')) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can view the model.
   */
  public function view(User $user): Response
  {
    if ($user->can('view-users')) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can create models.
   */
  public function create(User $user): Response
  {
    if ($user->can('create-users')) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can update the model.
   */
  public function update(User $user, User $model): Response
  {
    if ($user->can('update-users')) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can delete the model.
   */
  public function delete(User $user, User $model): Response
  {
    if ($user->can('delete-users')) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can restore the model.
   */
  public function restore(User $user, User $model): Response
  {
    if ($user->can('update-users')) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }

  /**
   * Determine whether the user can permanently delete the model.
   */
  public function destroy(User $user, User $model): Response
  {
    if ($user->can('delete-users')) {
      return Response::allow();
    }

    return Response::denyWithStatus(403);
  }
}
