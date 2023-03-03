<?php

namespace App\Responders;

use App\Domain\Contracts\Responders\IndexResponderInterface;
use Serenity\Responder;

class IndexResponder extends Responder implements IndexResponderInterface
{
  public function toResponse($request)
  {
    return view('welcome', $this->payload->getData());
  }
}
