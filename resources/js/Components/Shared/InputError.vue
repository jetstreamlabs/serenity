<script setup>
const props = defineProps(['message'])
</script>

<template>
  <div v-show="props.message">
    <p class="text-sm font-semibold text-red-600 font-ui">
      {{ props.message }}
    </p>
  </div>
</template>
