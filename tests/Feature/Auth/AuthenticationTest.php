<?php

use App\Domain\Providers\RouteServiceProvider;

it('can render the login screen', function () {
  $response = $this->get(route('login'));

  expect($response->getStatusCode())->toBe(200);
});

it('can authenticate users using the login screen using email', function () {
  $response = $this->post('/login', [
    'login' => user()->email,
    'password' => 'password',
  ]);

  $this->assertAuthenticated();
  $response->assertRedirect(RouteServiceProvider::HOME);
});

it('can authenticate users using the login screen using username', function () {
  $response = $this->post('/login', [
    'login' => user()->username,
    'password' => 'password',
  ]);

  $this->assertAuthenticated();
  $response->assertRedirect(RouteServiceProvider::HOME);
});

it('cannot authenticate users with invalid password', function () {
  $this->post('/login', [
    'login' => user()->email,
    'password' => 'wrong-password',
  ]);

  $this->assertGuest();
});
