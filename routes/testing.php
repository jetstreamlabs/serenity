<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

if (App::environment('testing')) {
  Route::middleware(['throttle:api', 'signed'])->group(function () {
    Route::get('/api-limit', [\Tests\Actions\RateLimitingTestAction::class, 'index']);
    Route::get('/api-limit/reset', [\Tests\Actions\RateLimitingTestAction::class, 'resetApi']);
  });

  Route::middleware([
    'auth:sanctum', config('serenity.auth_session'), 'verified', 'throttle:two-factor', 'signed',
  ])->group(function () {
    Route::get('/two-factor-limit', [\Tests\Actions\RateLimitingTestAction::class, 'index']);
    Route::get('/two-factor-limit/reset', [\Tests\Actions\RateLimitingTestAction::class, 'resetTwoFactor']);
  });
}
