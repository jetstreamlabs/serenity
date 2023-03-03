<?php

use Illuminate\Support\Str;
use Serenity\Features;

it('can delete api tokens', function () {
  if (Features::hasTeamFeatures()) {
    actingAs($user = user(true));
  } else {
    actingAs($user = user());
  }

  $token = $user->tokens()->create([
    'name' => 'Test Token',
    'token' => Str::random(40),
    'abilities' => ['create', 'read'],
  ]);

  $this->delete(route('api-tokens.destroy', $token));

  expect($user->fresh()->tokens)->toHaveCount(0);
})->skip(function () {
  return ! Features::hasApiFeatures();
}, 'API support is not enabled.');
