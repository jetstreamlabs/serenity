<?php

use Illuminate\Support\Str;
use Serenity\Features;

it('can update api token permissions', function () {
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

  $options = [
    'name' => $token->name,
    'permissions' => [
      'delete',
      'missing-permission',
    ],
  ];

  $this->put(route('api-tokens.update', [$token->id, ...$options]));

  expect($user->fresh()->tokens->first())
    ->can('delete')->toBeTrue()
    ->can('read')->toBeFalse()
    ->can('missing-permission')->toBeFalse();
})->skip(function () {
  return ! Features::hasApiFeatures();
}, 'API support is not enabled.');
