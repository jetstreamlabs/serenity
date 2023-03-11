<?php

use App\Domain\Models\Team;
use Illuminate\Support\Carbon;

it('can delete teams', function () {
  $this->withoutMiddleware(
    \App\Domain\Middleware\MuteActions::class
  );

  actingAs($user = user(true));
  $otherUser = user();

  $team = Team::factory()->make(['personal_team' => false]);
  $user->ownedTeams()->save($team);

  $team->users()->attach($otherUser, ['role' => 'test-role']);

  $this->delete(route('teams.destroy', $team));

  expect($team->fresh()->deleted_at)->toBeInstanceOf(Carbon::class);
  expect($otherUser->fresh()->teams)->toHaveCount(0);
});

it("can't delete personal teams", function () {
  actingAs($user = user(true));

  $this->delete(route('teams.destroy', $user->currentTeam));

  expect($user->currentTeam->fresh())->not->toBeNull();
});
