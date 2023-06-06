<?php

namespace App\Actions\Private\Admin;

use App\Domain\Contracts\Responders\Admin\DashboardResponder;
use Inertia\ResponseFactory;
use Serenity\Foundation\Action;
use Serenity\Routing\Attributes\Route;

class DashboardAction extends Action
{
  public function __construct(
      protected DashboardResponder $responder
    ) {
    $this->with('Private/Admin/Dashboard');

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
