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
    class="form-input border-2"
    :value="props.modelValue"
    :class="[props.static ? 'cursor-not-allowed bg-gray-200 focus:border-gray-300 focus:ring-0 dark:bg-gray-400' : '']"
    @input="emit('update:modelValue', $event.target.value)"
    ref="input"
    :readonly="props.static" />
</template>
