<?php

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;
use Serenity\Features;

it('can render the reset password link screen', function () {
  $response = $this->get(route('password.request'));

  expect($response->getStatusCode())->toBe(200);
})->skip(function () {
  return ! Features::enabled(Features::resetPasswords());
}, 'Password updates are not enabled.');

it('can request a password reset link', function () {
  Notification::fake();

  $user = user();

  $this->post(route('password.email', ['email' => $user->email]));

  Notification::assertSentTo($user, ResetPassword::class);
})->skip(function () {
  return ! Features::enabled(Features::resetPasswords());
}, 'Password updates are not enabled.');

it('can render the reset password screen', function () {
  Notification::fake();

  $user = user();

  $this->post(route('password.email', ['email' => $user->email]));

  Notification::assertSentTo($user, ResetPassword::class, function (object $notification) {
    $this->get(route('password.reset', $notification->token))
      ->assertStatus(200);

    return true;
  });
})->skip(function () {
  return ! Features::enabled(Features::resetPasswords());
}, 'Password updates are not enabled.');

it('can reset a password with a valid token', function () {
  Notification::fake();

  $user = user();

  $this->post(route('password.email', ['email' => $user->email]));

  Notification::assertSentTo($user, ResetPassword::class, function (object $notification) use ($user) {
    $options = [
      'token' => $notification->token,
      'email' => $user->email,
      'password' => 'password',
      'password_confirmation' => 'password',
    ];

    $this->post(route('password.update', $options))
      ->assertSessionHasNoErrors();

    return true;
  });
})->skip(function () {
  return ! Features::enabled(Features::resetPasswords());
}, 'Password updates are not enabled.');
