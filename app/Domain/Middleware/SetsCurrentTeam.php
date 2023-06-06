<?php

namespace App\Domain\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetsCurrentTeam
{
  /**
   * Handle an incoming request.
   */
  public function handle(Request $request, Closure $next, ...$guards): Response
  {
    if (! empty(auth()->user())) {
      session()->put(['current_team_id' => auth()->user()->current_team_id]);
    }

    return $next($request);
  }
}
