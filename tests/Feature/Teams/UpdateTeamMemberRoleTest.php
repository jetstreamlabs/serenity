<?php

it('can update team member roles', function () {
  actingAs($user = user(true));

  $user->currentTeam->users()->attach(
    $member = user(), ['role' => 'admin']
  );

  $this->put(
    route('team-members.update', [$user->currentTeam, $member]),
    ['role' => 'editor']
  );

  expect($member->fresh()->hasTeamRole(
    $user->currentTeam->fresh(), 'editor'
  ))->toBeTrue();
});

it('only allows team owners to update team member roles', function () {
  $user = user(true);

  $user->currentTeam->users()->attach(
    $member = user(), ['role' => 'admin']
  );

  actingAs($member)->put(
    route('team-members.update', [$user->currentTeam, $member]),
    ['role' => 'editor']
  );

  expect($member->fresh()->hasTeamRole(
    $user->currentTeam->fresh(), 'admin'
  ))->toBeTrue();
});
