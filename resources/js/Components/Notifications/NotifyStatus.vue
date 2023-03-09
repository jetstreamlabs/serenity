<script setup>
const show = ref(false)
</script>
<template>
  <div class="p-4">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <IconOutlineCode class="w-6 h-6 text-violet-500" aria-hidden="true" />
      </div>
      <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium text-gray-900">{{ __('Status') }}</p>
        <p class="mt-1 text-sm text-gray-500">
          <slot />
        </p>
      </div>
      <div class="flex flex-shrink-0 ml-4">
        <button
          type="button"
          @click="emit('close')"
          class="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          <span class="sr-only">Close</span>
          <IconOutlineXMark class="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>
