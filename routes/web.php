<?php

use Illuminate\Support\Facades\Route;
use Serenity\Routing\Finder\Find;

/**
 * WEB ROUTES
 *
 * Serenity uses route auto-discovery by pointing to declared Action directories.
 * As you can see below action directories are named based on their visibility
 * to the internet, public, protected (authenticated) and private for admin
 * and other private actions.
 */
Find::actions()->in(app_path('Actions/Public'));

Route::middleware([
  'auth:sanctum', config('serenity.auth_session'), 'verified',
])->group(function () {
  Find::actions()->in(app_path('Actions/Protected'));

  Route::middleware(['role:admin'])->group(function () {
    Find::actions()->in(app_path('Actions/Private'));
  });
});
