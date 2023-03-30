<?php

namespace Tests\Actions;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Serenity\Foundation\Action;

class RateLimitingTestAction extends Action
{
  public function index()
  {
    return view('tests/route-limit');
  }

  public function resetLimit(Request $request)
  {
    RateLimiter::clear(md5('test'.$request->ip()));

    return view('tests/route-limit');
  }

  public function resetApi(Request $request)
  {
    RateLimiter::clear(md5('api'.$request->ip()));

    return view('tests/route-limit');
  }

  public function resetTwoFactor(Request $request)
  {
    RateLimiter::clear(md5('two-factor'.$request->session()->get('login.id')));

    return view('tests/route-limit');
  }
}
