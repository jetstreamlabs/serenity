<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Serenity\Routing\Finder\Find;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

//Find::actions()->in(app_path('Api/Guest'));

Route::group(['middleware' => 'auth:sanctum'], function () {
  //Find::actions()->in(app_path('Api/Actions'));
});
