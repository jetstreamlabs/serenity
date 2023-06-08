<?php

namespace App\Actions\Private\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\CreateResponder;
use App\Domain\Requests\User\ViewRequest;
use Serenity\Foundation\Action;

class CreateAction extends Action
{
  /**
   * Instantiate the action.
   */
  public function __construct(protected CreateResponder $responder)
  {
    $this->with('Private/Admin/Users/Create');

    bcs()
      ->add(__('Users'), route('admin.users'))
      ->add(__('Create'));
  }

  /**
   * Handle the incoming request.
   */
  public function __invoke(ViewRequest $request)
  {
    return $this->responder->send();
  }
}
