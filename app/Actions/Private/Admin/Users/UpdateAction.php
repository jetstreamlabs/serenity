<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\UpdateResponder;
use Illuminate\Http\Request;
use Serenity\Foundation\Action;

class UpdateAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected UpdateResponder $responder)
  {
    $this->with('Users/Update');

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
