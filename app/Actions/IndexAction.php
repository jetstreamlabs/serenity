<?php

namespace App\Actions;

use App\Domain\Contracts\Responders\IndexResponderInterface;
use App\Domain\Services\IndexService;
use Illuminate\Http\Request;
use Serenity\Action;

class IndexAction extends Action
{
  public function __construct(
    protected IndexResponderInterface $responder,
    protected IndexService $service
  ) {
  }

  public function __invoke(Request $request)
  {
    return $this->responder->make($this->service->handle($request));
  }
}
