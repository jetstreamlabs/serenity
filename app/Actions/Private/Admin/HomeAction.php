<?php

namespace App\Actions\Private\Admin;

use App\Domain\Contracts\Responders\Admin\HomeResponder;
use Inertia\ResponseFactory;
use Serenity\Foundation\Action;
use Serenity\Routing\Attributes\Route;

class HomeAction extends Action
{
  public function __construct(
      protected HomeResponder $responder
    ) {
    $this->with('Admin/Home');

    bcs([
      __('Admin') => 'last',
      __('Dashboard') => 'last',
    ]);
  }

  #[Route(uri: 'dashboard', name: 'admin.dashboard')]
  public function __invoke(): ResponseFactory
  {
    return $this->responder->send();
  }
}
