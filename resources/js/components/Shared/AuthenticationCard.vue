<script setup>
const props = defineProps({
  maxWidth: {
    required: false,
    type: String,
    default: 'sm:max-w-md'
  }
})

const maxWidthClass = computed(() => {
  return {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    fit: 'sm:max-w-fit',
    '2xl': 'sm:max-w-2xl'
  }[props.maxWidth]
})
</script>
<template>
  <div class="mb-20 flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
    <div>
      <slot name="logo" cls="w-24" />
    </div>

    <div
      class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-gray-800 sm:rounded"
      :class="maxWidthClass">
      <slot />
    </div>
  </div>
</template>
