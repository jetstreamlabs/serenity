<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\ShowResponder as ShowResponderContract;
use App\Responder;

class ShowResponder extends Responder implements ShowResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
