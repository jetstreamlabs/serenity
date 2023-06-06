<?php

namespace App\Domain\Models;

use Jetlabs\Snowflake\Concerns\HasSnowflakePrimary;
use Spatie\Permission\Models\Role as BaseModel;

class Role extends BaseModel
{
  use HasSnowflakePrimary;
}
