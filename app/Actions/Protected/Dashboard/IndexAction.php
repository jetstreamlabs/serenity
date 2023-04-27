<?php

namespace App\Actions\Protected\Dashboard;

use App\Domain\Contracts\Responders\Dashboard\IndexResponder;
use App\Domain\Requests\Dashboard\ViewRequest;
use Serenity\Foundation\Action;

class IndexAction extends Action
{
  public function __construct(
      protected IndexResponder $responder
    ) {
    $this->with('Dashboard');
  }

  public function __invoke(ViewRequest $request)
  {
    return $this->responder->send();
  }
}
