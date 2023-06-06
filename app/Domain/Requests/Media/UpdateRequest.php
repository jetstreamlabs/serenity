<?php

namespace App\Domain\Requests\Media;

use App\Domain\Models\Media;
use Illuminate\Auth\Access\Response;
use Illuminate\Contracts\Auth\Access\Gate;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(Gate $gate): Response
  {
    return $gate->authorize('update', Media::class);
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      //
    ];
  }
}
