<?php

namespace App\Responders\Admin\Users;

use App\Domain\Contracts\Responders\Admin\Users\IndexResponder as IndexResponderContract;
use App\Domain\Packages\InertiaTables\InertiaTable;
use App\Responder;

class IndexResponder extends Responder implements IndexResponderContract
{
  public function toResponse()
  {
    return $this->view->render($this->component, $this->data)->table(function (InertiaTable $table) {
      $table->column('username', 'Username', searchable: true, sortable: true);
      $table->column('email', 'Email', searchable: true, sortable: true);
      $table->column('created_at', 'Created', searchable: true, sortable: true);
      $table->column(null, 'Actions', canBeHidden: false);
    });
  }
}
