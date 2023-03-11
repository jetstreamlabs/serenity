<?php

namespace App;

use Serenity\Contracts\ViewResponder as ViewResponderInterface;
use Serenity\Responders\ViewResponder;

class Responder extends ViewResponder implements ViewResponderInterface
{
  /**
   * Default HTTP response code.
   */
  protected int $status = 200;

  /**
   * Build up a response and return it to our action.
   *
   * @return \Inertia\ResponseFactory
   */
  public function send()
  {
    return $this->toResponse();
  }

  /**
   * Redirect response for Vue components.
   *
   * @return \Illuminate\Http\Response
   */
  public function replace()
  {
    if ($this->payload->expectsMessage()) {
      return $this->toResponse($this->route, true);
    }

    return $this->toResponse($this->route);
  }
}
