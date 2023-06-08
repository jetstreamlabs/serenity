<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\RestoreResponder as RestoreResponderContract;
use App\Responder;

class RestoreResponder extends Responder implements RestoreResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
