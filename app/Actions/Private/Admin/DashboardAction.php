<?php

namespace App\Actions\Private\Admin;

use App\Domain\Contracts\Responders\Admin\DashboardResponder;
use Inertia\Response;
use Serenity\Foundation\Action;
use Serenity\Routing\Attributes\Route;

class DashboardAction extends Action
{
  public function __construct(
      protected DashboardResponder $responder
    ) {
    $this->with('Private/Admin/Dashboard');

    app('breadcrumbs')->add(__('Admin Dashboard'));
  }

  #[Route(uri: 'dashboard', name: 'admin.dashboard')]
  public function __invoke(): Response
  {
    return $this->responder->send();
  }
}
