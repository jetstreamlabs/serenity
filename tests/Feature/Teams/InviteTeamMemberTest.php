<?php

use Illuminate\Support\Facades\Mail;
use Serenity\Foundation\Features;
use Serenity\Mail\TeamInvitation;

it('can invite team members to teams', function () {
  Mail::fake();

  actingAs($user = user(true));

  $options = [
    'email' => 'test@example.com',
    'role' => 'admin',
  ];

  $this->post(
    route('team-members.store', [$user->currentTeam, ...$options])
  );

  Mail::assertSent(TeamInvitation::class);

  expect($user->currentTeam->fresh()->teamInvitations)->toHaveCount(1);
})->skip(function () {
  return ! Features::sendsTeamInvitations();
}, 'Team invitations not enabled.');

it('can cancel team member invitations', function () {
  Mail::fake();

  actingAs($user = user(true));

  $invitation = $user->currentTeam->teamInvitations()->create([
    'email' => 'test@example.com',
    'role' => 'admin',
  ]);

  $this->delete(route('team-invitations.destroy', $invitation));

  expect($user->currentTeam->fresh()->teamInvitations)->toHaveCount(0);
})->skip(function () {
  return ! Features::sendsTeamInvitations();
}, 'Team invitations not enabled.');
