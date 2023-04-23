<script setup>
const props = defineProps({
  value: {
    required: false,
  },
  req: {
    required: false,
    type: Boolean,
  },
})
</script>

<template>
  <label
    class="form-label block text-sm font-medium text-gray-700 dark:text-gray-100"
    :class="[props.req ? 'required' : '']">
    <span v-if="props.value">{{ props.value }}</span>
    <span v-else><slot></slot></span>
  </label>
</template>
