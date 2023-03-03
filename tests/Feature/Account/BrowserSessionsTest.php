<?php

it('can log out other browser sessions', function () {
  actingAs(user());

  $response = $this->delete('/user/other-browser-sessions', [
    'password' => 'password',
  ]);

  $response->assertSessionHasNoErrors();
});
