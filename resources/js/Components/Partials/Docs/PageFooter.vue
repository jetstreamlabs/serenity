<template>
  <footer class="mt-8 border-t border-gray-200 pt-8 dark:border-gray-600">
    <div
      class="flex flex-col items-center justify-center md:flex-row md:justify-between">
      <div class="mb-4 md:mb-0">
        <div class="flex shrink-0 flex-col items-center md:flex-row">
          <div
            class="ml-4 text-sm text-gray-500"
            v-html="$page.props.copyright" />
        </div>
      </div>
    </div>
  </footer>
</template>
