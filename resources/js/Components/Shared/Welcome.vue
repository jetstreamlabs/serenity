<template>
  <div>
    <div class="welcome border-b border-gray-200 bg-gray-800 p-6 sm:px-20">
      <ApplicationLogo class="h-24 w-auto" />
      <div class="mt-3 ml-1 text-3xl text-white">{{ __('Welcome to Jetwire!') }}</div>

      <div class="mt-6 ml-1 text-gray-300">
        {{ __('Here we can add some quick benefits of Jetwire and welcome the people.') }}
      </div>
    </div>

    <div class="grid grid-cols-1 bg-gray-200 bg-opacity-25 md:grid-cols-2">
      <div class="p-6">
        <div class="flex items-center">
          <IconOutlineBookOpen class="h-8 w-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">
            <a href="https://laravel.com/docs">{{ __('Documentation') }}</a>
          </div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                "Laravel has wonderful documentation covering every aspect of the framework. Whether you're new to the framework or have previous experience, we recommend reading all of the documentation from beginning to end."
              )
            }}
          </div>

          <a href="https://laravel.com/docs">
            <div class="mt-3 flex items-center text-sm font-semibold text-contrast-500">
              <div>{{ __('Explore the documentation') }}</div>

              <div class="ml-1">
                <IconSolidArrowRight class="h-4 w-4" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="border-t border-gray-200 p-6 md:border-t-0 md:border-l">
        <div class="flex items-center">
          <IconOutlineCamera class="h-8 w-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">
            <a href="https://laracasts.com">{{ __('Laracasts') }}</a>
          </div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                'Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.'
              )
            }}
          </div>

          <a href="https://laracasts.com">
            <div class="mt-3 flex items-center text-sm font-semibold text-contrast-500">
              <div>{{ __('Start watching Laracasts') }}</div>

              <div class="ml-1">
                <IconSolidArrowRight class="h-4 w-4" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="border-t border-gray-200 p-6">
        <div class="flex items-center">
          <IconOutlinePhotograph class="h-8 w-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">
            <a href="https://tailwindcss.com/">{{ __('Tailwind') }}</a>
          </div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                "Laravel jetstream is built with Tailwind, an amazing utility first CSS framework that doesn't get in your way. You'll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips."
              )
            }}
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 p-6 md:border-l">
        <div class="flex items-center">
          <IconOutlineLockClosed class="h-8 w-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">{{ __('Authentication') }}</div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                "Authentication and registration views are included with Laravel jetstream, as well as support for user email verification and resetting forgotten passwords. So, you're free to get started what matters most: building your application."
              )
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
