<?php

namespace App\Domain\Models;

use Jetlabs\Snowflake\Concerns\HasSnowflakePrimary;
use Laravel\Sanctum\PersonalAccessToken as Model;

class PersonalAccessToken extends Model
{
  use HasSnowflakePrimary;

  /**
   * The primary key for the model.
   *
   * @var string
   */
  protected $primaryKey = 'id';

  /**
   * Indicates if the IDs are auto-incrementing.
   *
   * @var bool
   */
  public $incrementing = false;
}
