<?php

namespace App\Domain\Models;

use Serenity\Database\Membership as BaseMembership;

class Membership extends BaseMembership
{
  /**
   * Indicates if the IDs are auto-incrementing.
   *
   * @var bool
   */
  public $incrementing = true;
}
