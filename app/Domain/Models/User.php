<?php

namespace App\Domain\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Serenity\Concerns\HasProfilePhoto;
use Serenity\Concerns\HasTeams;
use Serenity\Concerns\TwoFactorAuthenticatable;
use Serenity\Database\User as Authenticatable;
use Spatie\Permission\PermissionRegistrar;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
  use HasApiTokens;
  use HasFactory;
  use HasPermissions;
  use HasProfilePhoto;
  use HasRoles;
  use HasTeams;
  use Notifiable;
  use SoftDeletes;
  use TwoFactorAuthenticatable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'username',
    'fname',
    'lname',
    'email',
    'password',
    'active',
    'last_active_at',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
    'two_factor_recovery_codes',
    'two_factor_secret',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime:Y-m-d H:i:s',
    'two_factor_confirmed_at' => 'datetime:Y-m-d H:i:s',
    'last_active_at' => 'datetime:Y-m-d H:i:s',
    'created_at' => 'datetime:Y-m-d H:i:s',
    'updated_at' => 'datetime:Y-m-d H:i:s',
    'deleted_at' => 'datetime:Y-m-d H:i:s',
  ];

  /**
   * The accessors to append to the model's array form.
   *
   * @var array<int, string>
   */
  protected $appends = [
    'profile_photo_url',
  ];

  protected static function newFactory(): Factory
  {
    return UserFactory::new();
  }

  /**
   * Set the current team id for roles and permissions.
   */
  public function register(int $team_id = null): self
  {
    $service = app(PermissionRegistrar::class);

    if (is_null($team_id)) {
      $service->setCurrentTeamId($this->current_team_id);

      return $this;
    }

    $service->setCurrentTeamId($team_id);

    return $this;
  }

  public function getPermissions()
  {
    return $this->getAllPermissions();
  }
}
