<?php

use App\Domain\Providers\RouteServiceProvider;
use Serenity\Features;
use Serenity\Middleware\AuthenticateSession;

return [

  /*
   |--------------------------------------------------------------------------
   | Add comments here
   |--------------------------------------------------------------------------
   */

  'allowed' => [
    'actions' => [
      '__construct',
      '__invoke',
    ],
    'responders' => [
      'send', 'make',
    ],
  ],
  'pages' => [
    'path' => env('PAGE_PATH', 'resources/content/pages'),
  ],
  'collections' => [
    'path' => env('COLLECTION_PATH', 'resources/content/collections'),
  ],

  /*
   |--------------------------------------------------------------------------
   | Serenity Stack
   |--------------------------------------------------------------------------
   |
   | This configuration value informs Serenity which "stack" you will be
   | using for your application. In general, this value is set for you
   | during installation and will not need to be changed after that.
   |
   */

  'stack' => 'inertia',

  /*
   |--------------------------------------------------------------------------
   | Serenity Guard
   |--------------------------------------------------------------------------
   |
   | Here you may specify which authentication guard Serenity will use while
   | authenticating users. This value should correspond with one of your
   | guards that is already present in your "auth" configuration file.
   |
   */

  'guard' => 'sanctum', // Jetstream

  'auth_guard' => 'web', // Fortify

  /*
   |--------------------------------------------------------------------------
   | Serenity Password Broker
   |--------------------------------------------------------------------------
   |
   | Here you may specify which password broker Serenity can use when a user
   | is resetting their password. This configured value should match one
   | of your password brokers setup in your "auth" configuration file.
   |
   */

  'passwords' => 'users',

  /*
   |--------------------------------------------------------------------------
   | Username / Email
   |--------------------------------------------------------------------------
   |
   | This value defines which model attribute should be considered as your
   | application's "username" field. Typically, this might be the email
   | address of the users but you are free to change this value here.
   |
   | Out of the box, Serenity expects forgot password and reset password
   | requests to have a field named 'email'. If the application uses
   | another name for the field you may define it below as needed.
   |
   */

  'username' => 'email',

  'email' => 'email',

  /*
   |--------------------------------------------------------------------------
   | Home Path
   |--------------------------------------------------------------------------
   |
   | Here you may configure the path where users will get redirected during
   | authentication or password reset when the operations are successful
   | and the user is authenticated. You are free to change this value.
   |
   */

  'home' => RouteServiceProvider::HOME,

  /*
   |--------------------------------------------------------------------------
   | Serenity Routes Prefix / Subdomain
   |--------------------------------------------------------------------------
   |
   | Here you may specify which prefix Serenity will assign to all the routes
   | that it registers with the application. If necessary, you may change
   | subdomain under which all of the Serenity routes will be available.
   |
   */

  'prefix' => '',

  'domain' => null,

  /*
   |--------------------------------------------------------------------------
   | Serenity Routes Middleware
   |--------------------------------------------------------------------------
   |
   | Here you may specify which middleware Serenity will assign to the routes
   | that it registers with the application. If necessary, you may change
   | these middleware but typically this provided default is preferred.
   |
   */

  'middleware' => ['web'],

  'auth_session' => AuthenticateSession::class,

  /*
   |--------------------------------------------------------------------------
   | Rate Limiting
   |--------------------------------------------------------------------------
   |
   | By default, Serenity will throttle logins to five requests per minute for
   | every email and IP address combination. However, if you would like to
   | specify a custom rate limiter to call then you may specify it here.
   |
   */

  'limiters' => [
    'login' => 'login',
    'two-factor' => 'two-factor',
  ],

  /*
   |--------------------------------------------------------------------------
   | Register View Routes
   |--------------------------------------------------------------------------
   |
   | Here you may specify if the routes returning views should be disabled as
   | you may not need them when building your own application. This may be
   | especially true if you're writing a custom single-page application.
   |
   */

  'views' => true,

  /*
   |--------------------------------------------------------------------------
   | Features
   |--------------------------------------------------------------------------
   |
   | Some of the Serenity features are optional. You may disable the features
   | by removing them from this array. You're free to only remove some of
   | these features or you can even remove all of these if you need to.
   |
   */

  'features' => [
    Features::termsAndPrivacyPolicy(),
    Features::profilePhotos(),
    Features::api(),
    Features::teams(['invitations' => true]),
    Features::accountDeletion(),
    Features::registration(),
    Features::resetPasswords(),
    Features::emailVerification(),
    Features::updateProfileInformation(),
    Features::updatePasswords(),
    Features::twoFactorAuthentication([
      'confirm' => true,
      'confirmPassword' => true,
      // 'window' => 0,
    ]),
  ],

  /*
   * Routes will be registered for all controllers found in
   * these directories.
   */
  'action_directory' => [
    // app_path('Actions'),
  ],

  /*
   * Routes will be registered for all views found in these directories.
   * The key of an item will be used as the prefix of the uri.
   */
  'responder_directory' => [
    // 'docs' => resource_path('views/markdown'),
  ],

  /*
   * After having discovered all controllers, these classes will manipulate the routes
   * before registering them to Laravel.
   *
   * In most cases, you shouldn't change these.
   */
  'pending_route_transformers' => [
    ...Serenity\Routing\Transformers::defaultRouteTransformers(),
  ],
];
