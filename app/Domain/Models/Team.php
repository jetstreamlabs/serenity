<?php

namespace App\Domain\Models;

use Database\Factories\TeamFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Serenity\Database\Team as BaseTeam;
use Serenity\Events\TeamCreated;
use Serenity\Events\TeamDeleted;
use Serenity\Events\TeamUpdated;

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

  /**
   * Create a new factory instance.
   *
   * @return \Illuminate\Database\Eloquent\Factories\Factory
   */
  protected static function newFactory(): Factory
  {
    return TeamFactory::new();
  }
}
