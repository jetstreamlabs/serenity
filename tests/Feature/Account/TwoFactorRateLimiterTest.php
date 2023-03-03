<?php

use App\Middleware\ValidateSignature;
use Serenity\Features;
use Serenity\Middleware\MuteActions;

it('checks if two-factor rate limiting is active', function () {
  $this->withoutMiddleware(MuteActions::class);

  actingAs(user())
    ->withoutMiddleware(ValidateSignature::class)
    ->get('/two-factor-limit')
    ->assertOk()
    ->assertHeader('X-Ratelimit-Limit', 5)
    ->assertHeader('X-Ratelimit-Remaining', 4);
})->skip(function () {
  return ! Features::canManageTwoFactorAuthentication();
}, 'Two factor authentication is not enabled.');

it('ensures that two-factor rate limiting is decreasing', function () {
  $this->withoutMiddleware(MuteActions::class);

  $user = user();

  foreach (range(1, 5) as $i) {
    actingAs($user)
      ->withoutMiddleware(ValidateSignature::class)
      ->get('/two-factor-limit')
      ->assertOk()
      ->assertHeader('X-Ratelimit-Remaining', 5 - $i);
  }

  actingAs($user)
    ->withoutMiddleware(ValidateSignature::class)
    ->get('/two-factor-limit')
    ->assertStatus(429)
    ->assertHeader('Retry-After', 60);
})->skip(function () {
  return ! Features::canManageTwoFactorAuthentication();
}, 'Two factor authentication is not enabled.');

it('checks two-factor signed url blocks', function () {
  $this->withoutMiddleware(MuteActions::class);

  actingAs(user())
    ->get('/two-factor-limit/reset')
    ->assertForbidden()
    ->assertHeader('X-Ratelimit-Remaining', 4);
})->skip(function () {
  return ! Features::canManageTwoFactorAuthentication();
}, 'Two factor authentication is not enabled.');

it('ensures that two-factor rate limiting is reset', function () {
  $this->withoutMiddleware(MuteActions::class);

  $user = user();

  actingAs($user)
    ->get('/two-factor-limit/reset')
    ->assertForbidden()
    ->assertHeader('X-Ratelimit-Remaining', 4);

  actingAs($user)
    ->withoutMiddleware(ValidateSignature::class)
    ->get('/two-factor-limit/reset')
    ->assertOk()
    ->assertHeader('X-Ratelimit-Remaining', 5);
})->skip(function () {
  return ! Features::canManageTwoFactorAuthentication();
}, 'Two factor authentication is not enabled.');
