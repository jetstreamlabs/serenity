<?php

namespace App\Domain\Serenity;

use App\Domain\Concerns\PasswordValidationRules;
use App\Domain\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Serenity\Contracts\ResetsUserPasswords;

class ResetUserPassword implements ResetsUserPasswords
{
  use PasswordValidationRules;

  /**
   * Validate and reset the user's forgotten password.
   *
   * @param  array<string, string>  $input
   */
  public function reset(User $user, array $input): void
  {
    Validator::make($input, [
      'password' => $this->passwordRules(),
    ])->validate();

    $user->forceFill([
      'password' => Hash::make($input['password']),
    ])->save();
  }
}
