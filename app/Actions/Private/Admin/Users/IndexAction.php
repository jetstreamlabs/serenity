<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\IndexResponder;
use App\Domain\Requests\User\ViewRequest;
use App\Domain\Services\Admin\UserService;
use Serenity\Foundation\Action;

class IndexAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(
      protected IndexResponder $responder,
      protected UserService $service
    ) {
    $this->with('Private/Admin/Users/Index', true);

    bcs()->add(__('Users'));
  }

  /**
   * Handle the incoming request.
   *
   * @param  \App\Domain\Requests\Users\ViewRequest  $request
   * @return \Inertia\Response
   */
  public function __invoke(ViewRequest $request)
  {
    return $this->responder->make($this->service->index())->send();
  }
}
