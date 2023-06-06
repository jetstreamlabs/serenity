<?php

namespace App\Domain\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
  /**
   * The root template that is loaded on the first page visit.
   *
   * @var string
   */
  protected $rootView = 'app';

  /**
   * Determine the current asset version.
   */
  public function version(Request $request): string|null
  {
    // if (App::environment('production')) {
    //   return parent::version($request);
    // }

    // return null;

    return parent::version($request);
  }

  /**
   * Define the props that are shared by default.
   *
   * @return array<string, mixed>
   */
  public function share(Request $request): array
  {
    return array_merge(parent::share($request), [
      'session_team' => session('current_team_id'),
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'copyright' => '&copy; '.date('Y').'. Jetstream Labs, LLC.',
    ]);
  }
}
