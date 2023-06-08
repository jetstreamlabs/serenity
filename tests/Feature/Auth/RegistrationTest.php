<?php

use App\Domain\Providers\RouteServiceProvider;
use Database\Seeders\TestingPermissionSeeder;
use Serenity\Foundation\Features;
use Serenity\Serenity;

it('can render the registration screen', function () {
  $this->get(route('register'))
    ->assertStatus(200);
})->skip(function () {
  return ! Features::enabled(Features::registration());
}, 'Registration support is not enabled.');

it('allows new users to register', function () {
  $this->seed(TestingPermissionSeeder::class);

  $options = [
    'username' => 'jjones',
    'email' => 'test@example.com',
    'password' => 'password',
    'password_confirmation' => 'password',
    'email_verified_at' => now(),
    'terms' => Serenity::hasTermsAndPrivacyPolicyFeature(),
  ];

  $response = $this->post(route('register', $options));

  $this->assertAuthenticated();
  $response->assertRedirect(RouteServiceProvider::HOME);
})->skip(function () {
  return ! Features::enabled(Features::registration());
}, 'Registration support is not enabled.');
