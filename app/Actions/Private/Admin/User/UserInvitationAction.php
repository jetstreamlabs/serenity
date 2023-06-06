<?php

namespace App\Actions\Private\Admin\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Serenity\Foundation\Action;

class UserInvitationAction extends Action
{
  public function inviteUser(InviteUserRequest $request)
  {
    $data = $request->validated();

    $user = BuilderUser::create([
      'email' => $data['email'],
      'password' => bcrypt(Str::random(12)),
      'locale' => app(GeneralSettings::class)->default_locale,
      'active' => false,
      'invitation_sent_at' => now(),
    ])->assignRole($data['role_id']);

    static::sendInvitation(
      email: $data['email'],
      userFullName: Auth::user()->first_name.' '.Auth::user()->last_name
    );

    return redirect()->back()->with(['message' => ___('builder', 'User was succesfully invited.')]);
  }

  public function createInviteAcceptationUser($email)
  {
    $user = BuilderUser::whereEmail($email)->firstOrFail();

    if (! $user->wasInvited()) {
      return redirect()->route('builder.login');
    }

    return Inertia::render('Auth/InviteUser', [
      'email' => $email,
    ]);
  }

  public function storeInviteAcceptationUser(InviteUserStoreRequest $request)
  {
    $data = $request->validated();
    $user = BuilderUser::whereEmail($data['email'])->first();
    $data['password'] = bcrypt($data['password']);
    $user->update($data + ['active' => true, 'invitation_accepted_at' => now()]);
    $user->markEmailAsVerified();

    return redirect()->route('builder.login');
  }

  public static function sendInvitation(string $email, string $userFullName)
  {
    Mail::to($email)->send(new InvitationUserMail([
      'email' => $email,
      'userFullName' => $userFullName,
    ]));
  }
}
