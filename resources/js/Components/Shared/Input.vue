<script setup>
const props = defineProps({
  modelValue: {
    required: false,
    type: String,
    default: '',
  },
  static: {
    required: false,
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])

const input = ref()

const focus = () => {
  input.focus()
}

defineExpose({ input })
</script>

<template>
  <input
    class="border-2 form-input"
    :value="props.modelValue"
    :class="[
      props.static
        ? 'cursor-not-allowed bg-gray-200 focus:border-gray-300 focus:ring-0'
        : 'focus:border-contrast-300 focus:ring focus:ring-contrast-200 focus:ring-opacity-50',
    ]"
    @input="emit('update:modelValue', $event.target.value)"
    ref="input"
    :readonly="props.static" />
</template>
