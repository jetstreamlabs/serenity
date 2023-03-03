<?php

use App\Middleware\ValidateSignature;
use Serenity\Middleware\MuteActions;

it('checks if api rate limiting is active', function () {
  $this->withoutMiddleware(MuteActions::class);

  $this->withoutMiddleware(ValidateSignature::class)
    ->get('/api-limit')
    ->assertOk()
    ->assertHeader('X-Ratelimit-Limit', 60)
    ->assertHeader('X-Ratelimit-Remaining', 59);
});

it('ensures that api rate limiting is decreasing', function () {
  $this->withoutMiddleware(MuteActions::class);

  foreach (range(1, 60) as $i) {
    $this->withoutMiddleware(ValidateSignature::class)
      ->get('/api-limit')
      ->assertOk()
      ->assertHeader('X-Ratelimit-Remaining', 60 - $i);
  }

  $this->get('/api-limit')
    ->assertStatus(429)
    ->assertHeader('Retry-After', 60);
});

it('checks api signed url blocks', function () {
  $this->withoutMiddleware(MuteActions::class);

  $this->get('/api-limit/reset')
    ->assertForbidden()
    ->assertHeader('X-Ratelimit-Remaining', 59);
});

it('ensures that api rate limiting is reset', function () {
  $this->withoutMiddleware(MuteActions::class);

  $this->get('/api-limit/reset')
    ->assertForbidden()
    ->assertHeader('X-Ratelimit-Remaining', 59);

  $this->withoutMiddleware(ValidateSignature::class)
    ->get('/api-limit/reset')
    ->assertOk()
    ->assertHeader('X-Ratelimit-Remaining', 60);
});
