<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Serenity\Serenity;
use Serenity\TeamInvitation as BaseTeamInvitation;

class TeamInvitation extends BaseTeamInvitation
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'email',
    'role',
  ];

  /**
   * Get the team that the invitation belongs to.
   */
  public function team(): BelongsTo
  {
    return $this->belongsTo(Serenity::teamModel());
  }
}
