<?php

namespace App\Responders\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\Index as IndexInterface;
use App\Responder;

class Index extends Responder implements IndexInterface
{
  public function send()
  {
    return $this->view->render($this->component);
  }
}
