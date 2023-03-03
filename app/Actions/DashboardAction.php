<?php

namespace App\Actions;

use App\Domain\Contracts\Responders\DashboardResponderInterface;
use Serenity\Action;

class DashboardAction extends Action
{
  public function __invoke()
  {
    return app(DashboardResponderInterface::class);
  }
}
