<?php

namespace App\Actions\Private\Admin\User;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Serenity\Builder\Models\BuilderUser;
use Serenity\Foundation\Action;

class UserProfileAction extends Action
{
  private BuilderUser $builderUser;

  private function setUser(Request $request)
  {
    $this->builderUser = $request->user('builder');
  }

  public function edit(Request $request)
  {
    $this->setUser($request);

    return Inertia::render('BuilderUser/Profile/Edit', [
      'builderUser' => $this->builderUser,
      'locales' => getAvailableLocalesTranslated(),
    ]);
  }

  public function update(Request $request)
  {
    $this->setUser($request);

    $validated = $request->validate([
      'first_name' => ['nullable', 'string'],
      'last_name' => ['nullable', 'string'],
      'locale' => ['sometimes', 'string'],
    ]);

    $this->builderUser->update($validated);

    return redirect()->back()->with(['message' => ___('builder', 'Profile successfully updated')]);
  }
}
