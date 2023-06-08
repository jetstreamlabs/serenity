<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\DestroyResponder;
use Illuminate\Http\Request;
use Serenity\Foundation\Action;

class DestroyAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected DestroyResponder $responder)
  {
    $this->with('Users/Destroy');

    bcs();
  }

  /**
   * Handle the incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Inertia\Response
   */
  public function __invoke(Request $request)
  {
    return $this->responder->send();
  }
}
