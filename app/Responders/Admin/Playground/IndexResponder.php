<?php

namespace App\Responders\Admin\Playground;

use App\Domain\Contracts\Responders\Admin\Playground\IndexResponder as IndexResponderContract;
use App\Responder;

class IndexResponder extends Responder implements IndexResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
