<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Serenity\Events\TeamCreated;
use Serenity\Events\TeamDeleted;
use Serenity\Events\TeamUpdated;
use Serenity\Team as BaseTeam;

class Team extends BaseTeam
{
  use HasFactory;
  use SoftDeletes;

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'personal_team' => 'boolean',
  ];

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'personal_team',
  ];

  /**
   * The event map for the model.
   *
   * @var array<string, class-string>
   */
  protected $dispatchesEvents = [
    'created' => TeamCreated::class,
    'updated' => TeamUpdated::class,
    'deleted' => TeamDeleted::class,
  ];
}
