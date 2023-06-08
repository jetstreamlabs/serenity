<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\EditResponder;
use App\Domain\Requests\Dashboard\ViewRequest;
use Serenity\Foundation\Action;

class EditAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected EditResponder $responder)
  {
    $this->with('Users/Edit');

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
