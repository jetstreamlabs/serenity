<template>
  <footer
    class="mx-auto mt-16 flex w-9/12 flex-col items-center justify-center space-y-2 px-0 text-sm sm:flex-row sm:justify-between sm:space-y-0">
    <div class="text-gray-500 dark:text-gray-400" v-html="$page.props.copyright" />
    <div class="text-gray-500 dark:text-gray-400">
      Serenity v{{ $page.props.serenityVersion }} (PHP v{{ $page.props.phpVersion }})
    </div>
  </footer>
</template>
