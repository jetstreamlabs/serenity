<?php

use Illuminate\Support\Facades\Route;
use Serenity\Routing\Discovery\Discover;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['splade'])->group(function () {
  Route::spladePasswordConfirmation();
  Route::spladeTable();
  Route::spladeUploads();

  Discover::actions()->in(app_path('Actions/Public'));

  Route::middleware([
    'auth:sanctum', config('serenity.auth_session'), 'verified',
  ])->group(function () {
    Discover::actions()->in(app_path('Actions/Protected'));
  });
});
