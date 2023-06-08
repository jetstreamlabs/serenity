<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\DeleteResponder;
use Illuminate\Http\Request;
use Serenity\Foundation\Action;

class DeleteAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected DeleteResponder $responder)
  {
    $this->with('Users/Delete');

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
