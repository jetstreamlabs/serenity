<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\EditResponder as EditResponderContract;
use App\Responder;

class EditResponder extends Responder implements EditResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
