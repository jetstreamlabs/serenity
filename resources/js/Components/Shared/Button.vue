<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'submit',
  },
})
</script>

<template>
  <button :type="props.type" class="btn primary">
    <slot></slot>
  </button>
</template>
