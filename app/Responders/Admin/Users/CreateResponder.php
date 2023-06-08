<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\CreateResponder as CreateResponderContract;
use App\Responder;

class CreateResponder extends Responder implements CreateResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
