<?php

namespace App\Responders\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\IndexResponderInterface;
use Serenity\Responder;

class IndexResponder extends Responder implements IndexResponderInterface
{
  public function toResponse($request)
  {
    return view('dashboard');
  }
}
