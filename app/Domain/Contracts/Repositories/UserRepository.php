<?php

namespace App\Domain\Contracts\Repositories;

interface UserRepository
{
  /**
   * Return the Model for the repository.
   */
  public function entity(): string;
}
