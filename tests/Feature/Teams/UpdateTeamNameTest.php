<?php

it('can update team names', function () {
  actingAs($user = user(true))
    ->put(
      route('teams.update', $user->currentTeam),
      ['name' => 'Test Team']
    );

  expect($user->fresh()->ownedTeams)->toHaveCount(1);
  expect($user->currentTeam->fresh()->name)->toEqual('Test Team');
});
