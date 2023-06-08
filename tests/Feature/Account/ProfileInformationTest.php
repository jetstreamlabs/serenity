<?php

it("can update a user's profile information", function () {
  actingAs($user = user());

  $options = [
    'username' => $user->username,
    'fname' => 'Joe',
    'lname' => 'Jones',
    'email' => 'test@example.com',
  ];

  $this->put(route('user-profile-information.update', $options));

  expect($user->fresh())
      ->fname->toEqual('Joe')
      ->lname->toEqual('Jones')
      ->email->toEqual('test@example.com');
});
