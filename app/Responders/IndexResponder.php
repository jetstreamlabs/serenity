<?php

namespace App\Responders;

use App\Domain\Contracts\Responders\IndexResponder as IndexResponderContract;
use App\Responder;

class IndexResponder extends Responder implements IndexResponderContract
{
  public function toResponse()
  {
    return $this->view->render(
      $this->component, $this->data
    );
  }
}
