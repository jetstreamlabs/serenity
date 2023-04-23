<script setup>
const props = defineProps({
  checked: {
    type: [Array, Boolean],
    default: false,
  },
  value: {
    default: null,
  },
})
const emit = defineEmits(['update:checked'])

const proxyChecked = computed({
  get: () => {
    return props.checked
  },
  set: (val) => {
    emit('update:checked', val)
  },
})
</script>

<template>
  <input
    type="checkbox"
    :value="props.value"
    v-model="proxyChecked"
    class="border-gray-300 rounded shadow-sm text-contrast-700 focus:border-contrast-300 focus:ring focus:ring-contrast-200 focus:ring-opacity-50" />
</template>
