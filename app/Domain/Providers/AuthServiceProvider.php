<?php

namespace App\Domain\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
  /**
   * The policy mappings for the application.
   *
   * @var array<class-string, class-string>
   */
  protected $policies = [];

  /**
   * Register any authentication / authorization services.
   */
  public function boot(): void
  {
    $this->registerPolicies();
  }

  public function registerPolicies()
  {
    $policies = File::files(dirname(__DIR__).'/Policies');
    foreach ($policies as $policy) {
      $policyClass = ltrim(str_replace('/', '\\', str_replace('app', 'App', rtrim(str_replace(base_path(), '', $policy->getPathName()), '.php'))), '\\');

      $model = str_replace('Policy', '', rtrim(basename(str_replace(base_path(), '', $policy->getPathName())), '.php'));

      if (file_exists(app_path('Domain/Models').'/'.$model.'.php')) {
        $modelClass = 'App\\Domain\\Models\\'.$model;

        Gate::policy($modelClass, $policyClass);
      }
    }
  }
}
