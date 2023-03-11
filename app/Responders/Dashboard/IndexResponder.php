<?php

namespace App\Responders\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\IndexResponderInterface;
use App\Responder;

class IndexResponder extends Responder implements IndexResponderInterface
{
  public function send()
  {
    return $this->view->render($this->component);
  }
}
