<?php

namespace App\Actions\Protected\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\IndexResponderInterface;
use Serenity\Action;

class IndexAction extends Action
{
  public function __invoke()
  {
    return app(IndexResponderInterface::class);
  }
}
