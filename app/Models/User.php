<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Serenity\Concerns\HasProfilePhoto;
use Serenity\Concerns\HasTeams;
use Serenity\Concerns\TwoFactorAuthenticatable;
use Serenity\User as Authenticatable;

class User extends Authenticatable
{
  use HasApiTokens;
  use HasFactory;
  use HasProfilePhoto;
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
    'name', 'email', 'password',
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
    'last_login' => 'datetime:Y-m-d H:i:s',
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
}
