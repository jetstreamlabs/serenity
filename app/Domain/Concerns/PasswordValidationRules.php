<?php

namespace App\Domain\Concerns;

use Serenity\Rules\Password;

trait PasswordValidationRules
{
  /**
   * Get the validation rules used to validate passwords.
   *
   * @return array<int, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  protected function passwordRules(): array
  {
    return ['required', 'string', new Password, 'confirmed'];
  }
}
