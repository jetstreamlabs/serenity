<?php

namespace App\Domain\Repositories;

use App\Domain\Contracts\Repositories\UserRepository as UserRepositoryContract;
use App\Domain\Models\User;
use Serenity\Database\Repository;

class UserRepository extends Repository implements UserRepositoryContract
{
  /**
   * Return the Model for the repository.
   */
  public function entity(): string
  {
    return User::class;
  }
}
