<?php

namespace App\Responders;

use App\Domain\Contracts\Responders\Index as IndexInterface;
use App\Responder;

class Index extends Responder implements IndexInterface
{
  public function toResponse()
  {
    return $this->view->render(
      $this->component, $this->data
    );
  }
}
