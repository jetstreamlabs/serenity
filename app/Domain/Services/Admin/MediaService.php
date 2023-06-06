<?php

namespace App\Domain\Services\Admin;

use App\Domain\Requests\Media\DeleteRequest;
use App\Domain\Requests\Media\DestroyRequest;
use App\Domain\Requests\Media\RestoreRequest;
use App\Domain\Requests\Media\StoreRequest;
use App\Domain\Requests\Media\UpdateRequest;
use Illuminate\Http\Request;
use Serenity\Payloads\Payload;
use Serenity\Services\Service;

class MediaService extends Service
{
  /**
   * Create a new instance of the service.
   */
  public function __construct()
  {
    //
  }

  /**
   * Return the payload for an index response.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Serenity\Payload
   */
  public function index(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a create response.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Serenity\Payload
   */
  public function create(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a show response.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Serenity\Payload
   */
  public function show(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for an edit response.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Serenity\Payload
   */
  public function edit(Request $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a store response.
   *
   * @param  \App\Domain\Requests\Media\StoreRequest $request
   * @return \Serenity\Payload
   */
  public function store(StoreRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for an update response.
   *
   * @param  \App\Domain\Requests\Media\UpdateRequest $request
   * @return \Serenity\Payload
   */
  public function update(UpdateRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a delete response.
   *
   * @param  \App\Domain\Requests\Media\DeleteRequest $request
   * @return \Serenity\Payload
   */
  public function delete(DeleteRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a restore response.
   *
   * @param  \App\Domain\Requests\Media\RestoreRequest $request
   * @return \Serenity\Payload
   */
  public function restore(RestoreRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }

  /**
   * Return the payload for a destroy response.
   *
   * @param  \App\Domain\Requests\Media\DestroyRequest $request
   * @return \Serenity\Payload
   */
  public function destroy(DestroyRequest $request): Payload
  {
    if ($request->session()->has('error')) {
      return $this->payloadResponse([
        'message' => '',
        'level' => 'error',
        'data' => [],
      ]);
    }

    return $this->payloadResponse([
      'message' => '',
      'level' => 'error',
      'data' => [],
    ]);
  }
}
