<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\RestoreResponder;
use Illuminate\Http\Request;
use Serenity\Foundation\Action;

class RestoreAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected RestoreResponder $responder)
  {
    $this->with('Users/Restore');

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
