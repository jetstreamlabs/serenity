<script setup>
const show = ref(false)
const emit = defineEmits(['close'])
</script>
<template>
  <div class="p-4">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <IconOutlineCheckCircle
          class="h-6 w-6 text-emerald-500"
          aria-hidden="true" />
      </div>
      <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium text-gray-900">{{ __('Success') }}</p>
        <p class="mt-1 text-sm text-gray-500">
          <slot />
        </p>
      </div>
      <div class="ml-4 flex flex-shrink-0">
        <button
          type="button"
          @click="emit('close')"
          class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          <span class="sr-only">Close</span>
          <IconOutlineXMark class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>
