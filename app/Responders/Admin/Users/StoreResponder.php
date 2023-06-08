<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\StoreResponder as StoreResponderContract;
use App\Responder;

class StoreResponder extends Responder implements StoreResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
