<?php

it("can update a user's profile information", function () {
  actingAs($user = user());

  $options = [
    'name' => 'Test Name',
    'email' => 'test@example.com',
  ];

  $this->put(route('user-profile-information.update', $options));

  expect($user->fresh())
      ->name->toEqual('Test Name')
      ->email->toEqual('test@example.com');
});
