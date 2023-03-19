<?php

namespace App\Responders\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\IndexResponder as IndexResponderContract;
use App\Responder;

class IndexResponder extends Responder implements IndexResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
