<script setup>
const props = defineProps({
  maxWidth: {
    required: false,
    type: String,
    default: 'sm:max-w-md',
  },
})

const maxWidthClass = computed(() => {
  return {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    fit: 'sm:max-w-fit',
    '2xl': 'sm:max-w-2xl',
  }[props.maxWidth]
})
</script>
<template>
  <div class="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
    <div>
      <slot name="logo" />
    </div>

    <div
      class="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded"
      :class="maxWidthClass">
      <slot />
    </div>
  </div>
</template>
