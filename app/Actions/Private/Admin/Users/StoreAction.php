<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\StoreResponder;
use Illuminate\Http\Request;
use Serenity\Foundation\Action;

class StoreAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected StoreResponder $responder)
  {
    $this->with('Users/Store');

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
