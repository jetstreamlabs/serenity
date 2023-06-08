<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\DeleteResponder as DeleteResponderContract;
use App\Responder;

class DeleteResponder extends Responder implements DeleteResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
