<?php

namespace App\Domain\Providers;

use Illuminate\Support\ServiceProvider;
use Serenity\Support\ContractBinder;

class ContractMappingServiceProvider extends ServiceProvider
{
  public function boot()
  {
    $this->registerResponders();
  }

  /**
   * Bind all repositories to their interfaces.
   *
   * @return void
   */
  public function registerResponders(): void
  {
    ContractBinder::Make(app_path())
      ->make(app_path())
      ->setNamespace('App')
      ->setConcretePath('Responders')
      ->setInterfacePath('Domain/Contracts/Responders')
      ->map();
  }
}
