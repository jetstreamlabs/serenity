<?php

use Illuminate\Support\Facades\Route;
use Serenity\Routing\Finder\Find;

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

Find::actions()->in(app_path('Actions/Public'));

Route::middleware([
  'auth:sanctum', config('serenity.auth_session'), 'verified',
])->group(function () {
  Find::actions()->in(app_path('Actions/Protected'));
});
