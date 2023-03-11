<?php

namespace App\Actions\Protected\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\IndexResponderInterface;
use Serenity\Action;

class IndexAction extends Action
{
  public function __construct(protected IndexResponderInterface $responder)
  {
    $this->with('Dashboard');
  }

  public function __invoke()
  {
    return $this->responder->send();
  }
}
