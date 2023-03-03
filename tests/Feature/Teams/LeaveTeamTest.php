<?php

it('allows users to leave teams', function () {
  $user = user(true);
  $member = user();

  $user->currentTeam->users()->attach($member, ['role' => 'admin']);

  actingAs($member)->delete(
    route('team-members.destroy', [$user->currentTeam, $member])
  );

  $user->currentTeam->users()->detach($member);

  expect($user->currentTeam->fresh()->users)->toHaveCount(0);
});

test("won't let team owners leave their own team", function () {
  actingAs($user = user(true));

  $response = $this->delete(
    route('team-members.destroy', [$user->currentTeam, $user])
  );

  $response->assertSessionHasErrorsIn('removeTeamMember', ['team']);

  expect($user->currentTeam->fresh())->not->toBeNull();
});
