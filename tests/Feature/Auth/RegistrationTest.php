<?php

use App\Domain\Providers\RouteServiceProvider;
use Serenity\Foundation\Features;
use Serenity\Serenity;

it('can render the registration screen', function () {
  $this->get(route('register'))
    ->assertStatus(200);
})->skip(function () {
  return ! Features::enabled(Features::registration());
}, 'Registration support is not enabled.');

it('allows new users to register', function () {
  $options = [
    'name' => 'Test User',
    'email' => 'test@example.com',
    'password' => 'password',
    'password_confirmation' => 'password',
    'terms' => Serenity::hasTermsAndPrivacyPolicyFeature(),
  ];

  $response = $this->post(route('register', $options));

  $this->assertAuthenticated();
  $response->assertRedirect(RouteServiceProvider::HOME);
})->skip(function () {
  return ! Features::enabled(Features::registration());
}, 'Registration support is not enabled.');
