<template>
  <MainLayout :title="__('Dashboard')">
    <div class="mt-5 rounded-lg shadow md:mt-0">
      <div
        class="flex items-start justify-between rounded-lg border border-gray-100 bg-white bg-opacity-60 p-6 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-800 dark:bg-opacity-60 dark:backdrop-blur-lg dark:backdrop-filter lg:p-8">
        <div class="w-3/5">
          <ApplicationLogo class="h-40 fill-gray-700 dark:fill-white" />

          <h1 class="mt-8 text-2xl font-medium text-gray-900 dark:text-white">
            Welcome to Developer Zen
          </h1>
          <p class="mt-4 pr-10 text-gray-900 dark:text-gray-400">
            We've taken great care to craft an application framework that
            combines the simplicity of working with Laravel, with a more strict
            domain driven approach that helps ease the developer decision tree,
            but still provides a fast, simple approach to rapidly build
            applications.
          </p>
        </div>
        <div
          class="w-2/5 rounded border border-gray-200 bg-white/40 p-4 dark:border-gray-600 dark:bg-gray-700/60 dark:text-gray-400">
          <h2 class="font-medium uppercase">Built in Features</h2>
          <ul class="list-inside list-disc pl-2 pt-2">
            <li>Built on the VITAL Stack</li>
            <li>Snowflake Primary Database IDs</li>
            <li>Built in Documentation Platform</li>
            <li>Built in Design System</li>
            <li>Consistant Namespacing</li>
            <li>Customizable Auto Routing</li>
            <li>Teams, API, Two Factor by default</li>
            <li>Generators Galore</li>
            <li>NativePHP for PHP Desktop Applications</li>
            <li>Docker and Kubernetes Ready</li>
            <li>Super Powered with Laravel Octane</li>
            <li>SaaS Ready with Stripe Integration</li>
          </ul>
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
        <p
          class="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Serenity has wonderful documentation covering every aspect of the
          framework. Whether you're new to the framework or have previous
          experience, we recommend reading all of the documentation from
          beginning to end.
        </p>

        <p class="mt-4 text-sm">
          <Link
            :href="route('docs.home')"
            class="inline-flex items-center font-normal text-blue-500 dark:text-blue-300">
            Explore the documentation
            <IconSolidArrowRight
              class="ml-1 h-3 w-3 fill-blue-500 dark:fill-blue-200" />
          </Link>
        </p>
      </div>

      <div
        class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent">
        <div class="flex items-center">
          <IconOutlineChevronDoubleRight class="h-6 w-6 text-gray-400" />
          <h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
            Modern ADR Monolith
          </h2>
        </div>

        <p
          class="mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Describe Jetstream and Inertia
        </p>
      </div>

      <div
        class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent">
        <div class="flex items-center">
          <IconOutlineArrowsRightLeft class="h-6 w-6 text-gray-400" />
          <h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
            Automatic Routing
          </h2>
        </div>

        <p
          class="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Auto routing description
        </p>
      </div>

      <div
        class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent">
        <div class="flex items-center">
          <IconOutlineRectangleGroup class="h-6 w-6 text-gray-400" />
          <h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
            <a href="https://design-system.serenityphp.com/"
              >Serenity Design System</a
            >
          </h2>
        </div>

        <p
          class="mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Serenity is built with Tailwind, an amazing utility first CSS
          framework that doesn't get in your way. You'll be amazed how easily
          you can build and maintain fresh, modern designs with this wonderful
          framework at your fingertips.
        </p>
      </div>
    </div>
  </MainLayout>
</template>
