<?php

namespace App\Domain\Serenity;

use App\Domain\Concerns\PasswordValidationRules;
use App\Domain\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Serenity\Contracts\UpdatesUserPasswordsInterface;

class UpdateUserPassword implements UpdatesUserPasswordsInterface
{
  use PasswordValidationRules;

  /**
   * Validate and update the user's password.
   *
   * @param  array<string, string>  $input
   */
  public function update(User $user, array $input): void
  {
    Validator::make($input, [
      'current_password' => ['required', 'string', 'current_password:web'],
      'password' => $this->passwordRules(),
    ], [
      'current_password.current_password' => __('The provided password does not match your current password.'),
    ])->validateWithBag('updatePassword');

    $user->forceFill([
      'password' => Hash::make($input['password']),
    ])->save();
  }
}
