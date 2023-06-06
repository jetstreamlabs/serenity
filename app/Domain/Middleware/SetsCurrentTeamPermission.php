<?php

namespace App\Domain\Middleware;

use Closure;
use Illuminate\Http\Request;
use Spatie\Permission\PermissionRegistrar;
use Symfony\Component\HttpFoundation\Response;

class SetsCurrentTeamPermission
{
  /**
   * Handle an incoming request.
   */
  public function handle(Request $request, Closure $next, ...$guards): Response
  {
    if (! empty(auth()->user())) {
      app(PermissionRegistrar::class)
        ->setPermissionsTeamId(session('current_team_id'));
    }

    return $next($request);
  }
}
