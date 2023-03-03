<?php

it('can create teams', function () {
  actingAs($user = user(true));

  $options = [
    'name' => 'Test Team',
  ];

  $this->post(route('teams.store', $options));

  expect($user->fresh()->ownedTeams)->toHaveCount(2);
  expect($user->fresh()->ownedTeams()->latest('id')->first()->name)->toEqual('Test Team');
});
