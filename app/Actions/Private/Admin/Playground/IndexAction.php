<?php

namespace App\Actions\Private\Admin\Playground;

use App\Domain\Contracts\Responders\Admin\Playground\IndexResponder;
use App\Domain\Requests\Playground\ViewRequest;
use Serenity\Foundation\Action;

class IndexAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected IndexResponder $responder)
  {
    $this->with('Private/Admin/Playground/Index');

    bcs()->add(__('Playground'));
  }

  /**
   * Handle the incoming request.
   *
   * @param  \App\Domain\Requests\Playground\ViewRequest  $request
   * @return \Inertia\Response
   */
  public function __invoke(ViewRequest $request)
  {
    return $this->responder->send();
  }
}
