<?php

namespace App\Actions\Public;

use App\Domain\Contracts\Responders\IndexResponderInterface;
use App\Domain\Services\IndexService;
use Illuminate\Http\Request;
use Serenity\Action;
use Serenity\Routing\Attributes\Route;

class IndexAction extends Action
{
  public function __construct(
     protected IndexResponderInterface $responder,
     protected IndexService $service,
    ) {
    $this->with('Welcome', true)->serve($service);
  }

  #[Route(name: 'home')]
  public function __invoke(Request $request)
  {
    return $this->responder
      ->make($this->service->handle($request))
      ->send();
  }
}
