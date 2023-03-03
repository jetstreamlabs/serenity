<?php

use Illuminate\Support\Facades\Route;

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

  Route::get('/', App\Actions\IndexAction::class)->name('home');

  Route::middleware([
    'auth:sanctum', config('serenity.auth_session'), 'verified',
  ])->group(function () {
    Route::get('/dashboard', App\Actions\DashboardAction::class)->name('dashboard');
  });
});
