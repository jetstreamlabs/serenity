<?php

use Illuminate\Support\Facades\Hash;

it('can update passwords', function () {
  $options = [
    'current_password' => 'password',
    'password' => 'new-password',
    'password_confirmation' => 'new-password',
  ];

  actingAs($user = user())
    ->put(route('user-password.update', $options));

  expect(Hash::check('new-password', $user->fresh()->password))->toBeTrue();
});

it('ensures that current password is correct', function () {
  $options = [
    'current_password' => 'wrong-password',
    'password' => 'new-password',
    'password_confirmation' => 'new-password',
  ];

  actingAs($user = user())
    ->put(route('user-password.update', $options))
    ->assertSessionHasErrors();

  expect(Hash::check('password', $user->fresh()->password))->toBeTrue();
});

it('ensures new passwords match', function () {
  $options = [
    'current_password' => 'password',
    'password' => 'new-password',
    'password_confirmation' => 'wrong-password',
  ];

  actingAs($user = user())
    ->put(route('user-password.update', $options))
    ->assertSessionHasErrors();

  expect(Hash::check('password', $user->fresh()->password))->toBeTrue();
});
