<template>
  <footer
    class="flex flex-col items-center justify-center bg-transparent px-6 py-12 text-sm sm:flex-row sm:justify-between sm:space-y-0">
    <div class="space-x-4 text-gray-400 dark:text-gray-300">
      <Link
        :href="route('terms.show')"
        class="hover:text-gray-600 dark:hover:text-gray-100">
        {{ __('Terms of Service') }}
      </Link>
      <Link
        :href="route('policy.show')"
        class="hover:text-gray-600 dark:hover:text-gray-100">
        {{ __('Privacy Policy') }}
      </Link>
    </div>
    <div class="space-x-4 text-gray-400 dark:text-gray-300">
      <span v-html="$page.props.copyright"></span>
      <span>
        Serenity v{{ $page.props.serenityVersion }} (PHP v{{
          $page.props.phpVersion
        }})
      </span>
    </div>
  </footer>
</template>
