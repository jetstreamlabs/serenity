<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'default',
  },
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  uri: {
    type: String,
    required: false,
  },
  state: {
    type: Boolean,
    required: false,
    default: false,
  },
  scroll: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const buttons = {
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
  status: 'status',
  primary: 'primary',
  default: 'default',
}

const buttonColor = computed(() => {
  return buttons[props.color]
})
</script>
<template>
  <template v-if="link">
    <Link :href="uri" :preserve-scroll="scroll" :preserve-state="state" class="btn-sm" :class="buttonColor">
      <slot />
    </Link>
  </template>
  <template v-else>
    <button type="button" class="btn-sm" :class="buttonColor">
      <slot />
    </button>
  </template>
</template>
