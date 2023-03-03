<?php

use Serenity\Features;

it('can enable two factor authentication', function () {
  actingAs($user = user());

  $this->withSession(['auth.password_confirmed_at' => time()]);

  $this->post(route('two-factor.enable'));

  expect($user->fresh()->two_factor_secret)->not->toBeNull();
  expect($user->fresh()->recoveryCodes())->toHaveCount(8);
})->skip(function () {
  return ! Features::canManageTwoFactorAuthentication();
}, 'Two factor authentication is not enabled.');

it('can generate recovery codes', function () {
  actingAs($user = user());

  $this->withSession(['auth.password_confirmed_at' => time()]);

  $this->post(route('two-factor.enable'));
  $this->post('/user/two-factor/recovery/codes');

  $user = $user->fresh();

  $this->post('/user/two-factor/recovery/codes');

  expect($user->recoveryCodes())->toHaveCount(8);
  expect(array_diff($user->recoveryCodes(), $user->fresh()->recoveryCodes()))->toHaveCount(8);
})->skip(function () {
  return ! Features::canManageTwoFactorAuthentication();
}, 'Two factor authentication is not enabled.');

it('can disable two factor authentication', function () {
  actingAs($user = user());

  $this->withSession(['auth.password_confirmed_at' => time()]);

  $this->post(route('two-factor.enable'));

  expect($user->fresh()->two_factor_secret)->not->toBeNull();

  $this->delete(route('two-factor.disable'));

  expect($user->fresh()->two_factor_secret)->toBeNull();
})->skip(function () {
  return ! Features::canManageTwoFactorAuthentication();
}, 'Two factor authentication is not enabled.');
