<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
})

const { type } = toRefs(props)
</script>

<template>
  <button :type="type" class="btn default">
    <slot></slot>
  </button>
</template>
