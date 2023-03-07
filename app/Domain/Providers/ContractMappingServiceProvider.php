<?php

namespace App\Domain\Providers;

use Illuminate\Support\ServiceProvider;

class ContractMappingServiceProvider extends ServiceProvider
{
  public function boot()
  {
    $this->mapResponderInterfaces();
  }

  protected function mapResponderInterfaces()
  {
    $this->app->bind(
      \App\Domain\Contracts\Responders\IndexResponderInterface::class,
      \App\Responders\IndexResponder::class
    );

    $this->app->bind(
      \App\Domain\Contracts\Responders\Dashboard\IndexResponderInterface::class,
      \App\Responders\Dashboard\IndexResponder::class
    );
  }
}
