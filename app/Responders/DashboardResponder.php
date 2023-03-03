<?php

namespace App\Responders;

use App\Domain\Contracts\Responders\DashboardResponderInterface;
use Serenity\Responder;

class DashboardResponder extends Responder implements DashboardResponderInterface
{
  public function toResponse($request)
  {
    return view('dashboard');
  }
}
