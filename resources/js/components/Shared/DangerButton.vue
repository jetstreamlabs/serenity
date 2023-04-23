<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <button :type="props.type" class="btn error">
    <slot></slot>
  </button>
</template>
