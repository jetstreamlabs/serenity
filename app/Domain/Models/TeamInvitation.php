<?php

namespace App\Domain\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Serenity\Database\TeamInvitation as BaseTeamInvitation;
use Serenity\Serenity;

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
