<?php

use App\Domain\Models\User;
use Tests\TestCase;

/*
|--------------------------------------------------------------------------
| Test Case
|--------------------------------------------------------------------------
|
| The closure you provide to your test functions is always bound to a specific PHPUnit test
| case class. By default, that class is "PHPUnit\Framework\TestCase". Of course, you may
| need to change it using the "uses()" function to bind a different classes or traits.
|
*/

uses(TestCase::class)->in('Feature');

/*
|--------------------------------------------------------------------------
| Expectations
|--------------------------------------------------------------------------
|
| When you're writing tests, you often need to check that values meet certain conditions. The
| "expect()" function gives you access to a set of "expectations" methods that you can use
| to assert different things. Of course, you may extend the Expectation API at any time.
|
*/

expect()->extend('toBeOne', function () {
  return $this->toBe(1);
});

/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
|
| While Pest is very powerful out-of-the-box, you may have some testing code specific to your
| project that you don't want to repeat in every file. Here you can also expose helpers as
| global functions to help you to reduce the number of lines of code in your test files.
|
*/

function router($name, $parameters = [], $absolute = true)
{
  return app('url')->route($name, $parameters, $absolute);
}

function user(bool $withTeams = false)
{
  return $withTeams
    ? User::factory()->withPersonalTeam()->create()
    : User::factory()->create();
}

function unVerifiedUser(bool $withTeams = false)
{
  return $withTeams
    ? User::factory()->withPersonalTeam()->create(['email_verified_at' => null])
    : User::factory()->create(['email_verified_at' => null]);
}

function actingAs(?User $user = null, bool $withTeams = false)
{
  return test()->actingAs($user ?? user($withTeams));
}

function disableRegistration()
{
  $features = config('serenity.features');

  // registration is always at key 0
  // unless you change your config.
  if ($features[0] === 'registration') {
    array_shift($features);
  }
  config(['serenity.views' => false]);
  config(['serenity.features' => $features]);

  // NOPE, this won't work without laravel/ui
  // Auth::routes(['register' => false]);
}

function fetchConfig()
{
  return config('serenity');
}
