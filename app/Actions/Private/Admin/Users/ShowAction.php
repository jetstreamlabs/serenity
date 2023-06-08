<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\ShowResponder;
use App\Domain\Requests\Users\ViewRequest;
use Serenity\Foundation\Action;

class ShowAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected ShowResponder $responder)
  {
    $this->with('Users/Show');

    bcs();
  }

  /**
   * Handle the incoming request.
   *
   * @param  \App\Domain\Requests\Users\ViewRequest  $request
   * @return \Inertia\Response
   */
  public function __invoke(ViewRequest $request)
  {
    return $this->responder->send();
  }
}
