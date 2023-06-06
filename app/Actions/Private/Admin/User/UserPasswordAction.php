<?php

namespace App\Actions\Private\Admin\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Serenity\Builder\Models\BuilderUser;
use Serenity\Foundation\Action;

class UserPasswordAction extends Action
{
  private BuilderUser $builderUser;

  private function setUser(Request $request)
  {
    $this->builderUser = $request->user('builder');
  }

  public function edit(Request $request)
  {
    $this->setUser($request);

    return Inertia::render('BuilderUser/Password/Edit', [
      'builderUser' => $this->builderUser,
    ]);
  }

  public function update(Request $request)
  {
    $this->setUser($request);

    $request->validate([
      'password' => ['required', 'confirmed', Password::default()],
    ]);

    $this->builderUser->update([
      'password' => Hash::make($request->get('password')),
    ]);

    return redirect()->back()->with(['message' => ___('builder', 'Password successfully updated')]);
  }
}
