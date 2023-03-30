<?php

use Serenity\Foundation\Features;

it('can render the confirm password screen', function () {
  $user = Features::hasTeamFeatures()
    ? user(true)
    : user();

  $response = actingAs($user)->get('/user/password/confirm');

  expect($response->getStatusCode())->toBe(200);
});

it('can confirm a password', function () {
  $response = actingAs(user())
    ->post(route('password.confirm', ['password' => 'password']));

  $response->assertRedirect();
  $response->assertSessionHasNoErrors();
});

it("won't confirm an invalid password", function () {
  $response = actingAs(user())
    ->post(route('password.confirm', ['password' => 'wrong-password']));

  $response->assertSessionHasErrors();
});
