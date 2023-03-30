<?php

use App\Domain\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\URL;
use Serenity\Foundation\Features;

it('can render the email verification screen', function () {
  $user = Features::hasTeamFeatures()
    ? unVerifiedUser(true)
    : unVerifiedUser();

  $response = actingAs($user)->get(route('verification.notice'));

  expect($response->getStatusCode())->toBe(200);
})->skip(function () {
  return ! Features::enabled(Features::emailVerification());
}, 'Email verification not enabled.');

it('can verify an email address', function () {
  Event::fake();

  $user = Features::hasTeamFeatures()
    ? unVerifiedUser(true)
    : unVerifiedUser();

  $verificationUrl = URL::temporarySignedRoute(
    'verification.verify',
    now()->addMinutes(60),
    ['id' => $user->id, 'hash' => sha1($user->email)]
  );

  $response = actingAs($user)->get($verificationUrl);

  Event::assertDispatched(Verified::class);

  expect($user->fresh()->hasVerifiedEmail())->toBeTrue();

  $response->assertRedirect(RouteServiceProvider::HOME.'?verified=1');
})->skip(function () {
  return ! Features::enabled(Features::emailVerification());
}, 'Email verification not enabled.');

it("won't verify an email address with an invalid hash", function () {
  $user = Features::hasTeamFeatures()
    ? unVerifiedUser(true)
    : unVerifiedUser();

  $verificationUrl = URL::temporarySignedRoute(
    'verification.verify',
    now()->addMinutes(60),
    ['id' => $user->id, 'hash' => sha1('wrong-email')]
  );

  actingAs($user)->get($verificationUrl);

  expect($user->fresh()->hasVerifiedEmail())->toBeFalse();
})->skip(function () {
  return ! Features::enabled(Features::emailVerification());
}, 'Email verification not enabled.');
