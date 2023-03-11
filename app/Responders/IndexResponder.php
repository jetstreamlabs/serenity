<?php

namespace App\Responders;

use App\Domain\Contracts\Responders\IndexResponderInterface;
use App\Responder;

class IndexResponder extends Responder implements IndexResponderInterface
{
  public function toResponse()
  {
    return $this->view->render(
      $this->component, $this->data
    );
  }
}
