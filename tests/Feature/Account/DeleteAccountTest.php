<?php

use Illuminate\Support\Carbon;
use Serenity\Foundation\Features;

it('can delete user accounts', function () {
  actingAs($user = user());

  $this->delete(route('current-user.destroy', ['password' => 'password']));

  expect($user->fresh()->deleted_at)
    ->toBeInstanceOf(Carbon::class);
})->skip(function () {
  return ! Features::hasAccountDeletionFeatures();
}, 'Account deletion is not enabled.');

it('must receive a correct password before deleting an account', function () {
  actingAs($user = user());

  $this->delete(route('current-user.destroy', ['password' => 'wrong-password']));

  expect($user->fresh())->not->toBeNull();
})->skip(function () {
  return ! Features::hasAccountDeletionFeatures();
}, 'Account deletion is not enabled.');
