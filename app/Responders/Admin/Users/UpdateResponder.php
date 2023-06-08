<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\UpdateResponder as UpdateResponderContract;
use App\Responder;

class UpdateResponder extends Responder implements UpdateResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
