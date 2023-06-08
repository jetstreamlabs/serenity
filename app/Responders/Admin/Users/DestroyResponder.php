<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\DestroyResponder as DestroyResponderContract;
use App\Responder;

class DestroyResponder extends Responder implements DestroyResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
