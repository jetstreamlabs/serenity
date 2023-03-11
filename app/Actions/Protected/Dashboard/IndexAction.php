<?php

namespace App\Actions\Protected\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\Index;
use Serenity\Action;

class IndexAction extends Action
{
  public function __construct(protected Index $responder)
  {
    $this->with('Dashboard');
  }

  public function __invoke()
  {
    return $this->responder->send();
  }
}
