<script setup>
defineProps({
  onClick: {
    type: Function,
    required: true
  }
})
</script>
<template>
  <button
    ref="button"
    type="button"
    dusk="reset-table"
    class="focus:ring-primary-500 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400"
    aria-haspopup="true"
    @click.prevent="onClick">
    <IconOutlineXMark class="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
    <span>Reset</span>
  </button>
</template>
