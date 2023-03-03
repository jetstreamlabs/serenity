<?php

namespace App\Domain\Providers;

use App\Domain\Policies\TeamPolicy;
use App\Models\Team;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
  /**
   * The policy mappings for the application.
   *
   * @var array<class-string, class-string>
   */
  protected $policies = [
    Team::class => TeamPolicy::class,
  ];

  /**
   * Register any authentication / authorization services.
   */
  public function boot(): void
  {
    $this->registerPolicies();
  }
}
