<?php

namespace App\Domain\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Serenity\Contracts\Payload;
use Serenity\Serenity;
use Serenity\Service;

class IndexService extends Service
{
  public function handle(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => $request->session()->get('error'),
        'level' => 'error',
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'serenityVersion' => Serenity::version(),
        'phpVersion' => PHP_VERSION,
      ]);
    }

    return $this->payloadResponse([
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'serenityVersion' => Serenity::version(),
      'phpVersion' => PHP_VERSION,
    ]);
  }
}
