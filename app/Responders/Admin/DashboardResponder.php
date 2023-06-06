<?php

namespace App\Responders\Admin;

use App\Domain\Contracts\Responders\Admin\DashboardResponder as DashboardResponderContract;
use App\Responder;

class DashboardResponder extends Responder implements DashboardResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component);
  }
}
