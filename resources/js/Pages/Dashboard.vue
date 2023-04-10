<template>
  <MainLayout :title="__('Dashboard')">
    <div class="mt-5 rounded-lg shadow md:mt-0">
      <div
        class="flex items-start justify-between rounded-lg border border-gray-100 bg-white bg-opacity-60 p-6 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-800 dark:bg-opacity-60 dark:backdrop-blur-lg dark:backdrop-filter lg:p-8">
        <div>
          <ApplicationLogo class="h-40 fill-gray-700 dark:fill-white" />

          <h1 class="mt-8 text-2xl font-medium text-gray-900 dark:text-white">Welcome to Zen</h1>
        </div>
        <div class="w-1/4 rounded border border-gray-300 bg-gray-200 p-4">
          <h2 class="font-medium uppercase">Built in Features</h2>
        </div>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      <div
        class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent">
        <div class="flex items-center">
          <IconOutlineBookOpen class="h-6 w-6 text-gray-400" />

          <h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
            <Link :href="route('docs.home')">{{ __('Documentation') }}</Link>
          </h2>
        </div>
        <p class="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Serenity has wonderful documentation covering every aspect of the framework. Whether you're new to the
          framework or have previous experience, we recommend reading all of the documentation from beginning to end.
        </p>

        <p class="mt-4 text-sm">
          <Link
            :href="route('docs.home')"
            class="inline-flex items-center font-normal text-blue-500 dark:text-blue-300">
            Explore the documentation
            <IconSolidArrowRight class="ml-1 h-3 w-3 fill-blue-500 dark:fill-blue-200" />
          </Link>
        </p>
      </div>

      <div
        class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent">
        <div class="flex items-center">
          <IconOutlineVideoCamera class="h-6 w-6 text-gray-400" />
          <h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
            <a href="https://laracasts.com">Laracasts</a>
          </h2>
        </div>

        <p class="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see
          for yourself, and massively level up your development skills in the process.
        </p>

        <p class="mt-4 text-sm">
          <a href="https://laracasts.com" class="inline-flex items-center font-normal text-blue-500 dark:text-blue-300">
            Start watching Laracasts

            <IconSolidArrowRight class="ml-1 h-3 w-3 fill-blue-500 dark:fill-blue-200" />
          </a>
        </p>
      </div>

      <div
        class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent">
        <div class="flex items-center">
          <IconOutlineRectangleGroup class="h-6 w-6 text-gray-400" />
          <h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
            <a href="https://tailwindcss.com/">Tailwind</a>
          </h2>
        </div>

        <p class="mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Serenity is built with Tailwind, an amazing utility first CSS framework that doesn't get in your way. You'll
          be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your
          fingertips.
        </p>
      </div>

      <div
        class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent">
        <div class="flex items-center">
          <IconOutlineLockClosed class="h-6 w-6 text-gray-400" />
          <h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white">Authentication</h2>
        </div>

        <p class="mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Authentication and registration views are included with Laravel Jetstream, as well as support for user email
          verification and resetting forgotten passwords. So, you're free to get started with what matters most:
          building your application.
        </p>
      </div>
    </div>
  </MainLayout>
</template>
