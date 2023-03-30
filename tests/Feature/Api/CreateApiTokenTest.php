<?php

use Serenity\Foundation\Features;

it('can create api tokens', function () {
  if (Features::hasTeamFeatures()) {
    actingAs($user = user(true));
  } else {
    actingAs($user = user());
  }

  $options = [
    'name' => 'Test Token',
    'permissions' => [
      'read',
      'update',
    ],
  ];

  $this->post(route('api-tokens.store', $options));

  expect($user->fresh()->tokens)->toHaveCount(1);
  expect($user->fresh()->tokens->first())
    ->name->toEqual('Test Token')
    ->can('read')->toBeTrue()
    ->can('delete')->toBeFalse();
})->skip(function () {
  return ! Features::hasApiFeatures();
}, 'API support is not enabled.');
