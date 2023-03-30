<?php

use Serenity\Foundation\Features;

beforeEach(function () {
  //disableRegistration();
});

it('disables the registration screen render if support is disabled', function () {
  $response = $this->get('/register');

  $response->assertStatus(404);
})->skip(function () {
  return Features::enabled(Features::registration());
}, 'Registration support is enabled.');
