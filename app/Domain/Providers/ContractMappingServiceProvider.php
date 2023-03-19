<?php

namespace App\Domain\Providers;

use Illuminate\Support\ServiceProvider;
use Serenity\Support\ContractBinder;

class ContractMappingServiceProvider extends ServiceProvider
{
  public function boot()
  {
    /**
     * If you choose not to auto-bind contracts to concretes
     * you'll need to bind them manually.
     */
    if (config('serenity.mapping.responders')) {
      $this->registerResponders();
    }

    if (config('serenity.mapping.repositories')) {
      $this->registerRepositories();
    }
  }

  /**
   * Bind all responders to their interfaces.
   *
   * @return void
   */
  public function registerResponders(): void
  {
    ContractBinder::make(app_path())
      ->setNamespace('App')
      ->setConcretePath('Responders')
      ->setInterfacePath('Domain/Contracts/Responders')
      ->map();
  }

  /**
   * Bind all repositories to their interfaces.
   *
   * @return void
   */
  public function registerRepositories(): void
  {
    if (! is_dir(app_path('Repositories'))) {
      return;
    }

    ContractBinder::make(app_path())
      ->setNamespace('App')
      ->setConcretePath('Domain/Repositories')
      ->setInterfacePath('Domain/Contracts/Repositories')
      ->map();
  }
}
