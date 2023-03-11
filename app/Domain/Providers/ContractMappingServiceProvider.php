<?php

namespace App\Domain\Providers;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

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
    $bindings = $this->mapResponderInterfaces();

    if (! $bindings->isEmpty()) {
      $bindings->each(function ($binding) {
        $this->app->bind($binding['contract'], $binding['concrete']);
      });
    }
  }

  protected function mapResponderInterfaces(): Collection
  {
    $directory = app_path('Responders');

    if (is_dir($directory)) {
      $files = File::allFiles($directory);

      $bindings = collect($files)->map(function ($file) {
        $path = $file->getRelativePath();

        if (! empty($path)) {
          $path = '\\'.$path;
        }

        $fileClass = rtrim($file, '.'.$file->getExtension());
        $contract = 'App\\Domain\\Contracts\\Responders'.$path.'\\'.basename($fileClass).'Interface';
        $concrete = 'App\\'.str_replace('/', '\\', ltrim($fileClass, app_path()));

        if ($this->hasInterface($concrete, $contract)) {
          return [
            'contract' => $contract,
            'concrete' => $concrete,
          ];
        }
      }, collect([]));
    }

    return $bindings;
  }

  /**
   * Determine if the repository has an interface to bind.
   *
   * @param  string  $concrete
   * @param  string  $contract
   * @return bool
   */
  protected function hasInterface(string $concrete, string $contract): bool
  {
    $reflected = new \ReflectionClass($concrete);
    $interfaces = $reflected->getInterfaces();

    return array_key_exists($contract, $interfaces);
  }
}
