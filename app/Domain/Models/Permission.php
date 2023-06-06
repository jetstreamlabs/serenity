<?php

namespace App\Domain\Models;

use Jetlabs\Snowflake\Concerns\HasSnowflakePrimary;
use Spatie\Permission\Models\Permission as BaseModel;

class Permission extends BaseModel
{
  use HasSnowflakePrimary;
}
