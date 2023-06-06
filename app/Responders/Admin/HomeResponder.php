<?php

namespace App\Responders\Admin;

use App\Domain\Contracts\Responders\Admin\HomeResponder as HomeResponderContract;
use App\Responder;

class HomeResponder extends Responder implements HomeResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
