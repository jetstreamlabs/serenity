<script setup>
const props = defineProps({
  size: {
    type: String,
    required: false,
    default: 'xl',
  },
})

const sizes = {
  xs: 'py-1',
  sm: 'py-2',
  md: 'py-4',
  lg: 'py-6',
  xl: 'py-8',
}

const className = sizes[props.size]
</script>
<template>
  <div class="hidden sm:block">
    <div :class="className">
      <div class="border-t border-gray-200 dark:border-gray-600"></div>
    </div>
  </div>
</template>
