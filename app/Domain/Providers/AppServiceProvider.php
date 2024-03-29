<?php

namespace App\Domain\Providers;

use App\Domain\Models\PersonalAccessToken;
use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    Sanctum::ignoreMigrations();
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);
  }
}
