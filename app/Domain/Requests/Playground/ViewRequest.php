<?php

namespace App\Domain\Requests\Playground;

use App\Domain\Models\Dashboard;
use Illuminate\Auth\Access\Response;
use Illuminate\Contracts\Auth\Access\Gate;
use Illuminate\Foundation\Http\FormRequest;

class ViewRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(Gate $gate): Response
  {
    return $gate->authorize('view', Dashboard::class);
  }
}
