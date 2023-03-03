<?php

it('can remove team members from teams', function () {
  actingAs($user = user(true));

  $user->currentTeam->users()->attach(
    $member = user(), ['role' => 'admin']
  );

  $this->delete(route('team-members.destroy', [$user->currentTeam, $member]));

  expect($user->currentTeam->fresh()->users)->toHaveCount(0);
});

it('only allows team owners to remove team members', function () {
  $user = user(true);

  $user->currentTeam->users()->attach(
    $member = user(), ['role' => 'admin']
  );

  actingAs($member)->delete(
    route('team-members.destroy', [$user->currentTeam, $user])
  )->assertStatus(403);
});
