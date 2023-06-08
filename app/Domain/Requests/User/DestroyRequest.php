<?php

namespace App\Domain\Requests\User;

use App\Domain\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Contracts\Auth\Access\Gate;
use Illuminate\Foundation\Http\FormRequest;

class DestroyRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(Gate $gate): Response
  {
    return $gate->authorize('destroy', User::class);
  }
}
