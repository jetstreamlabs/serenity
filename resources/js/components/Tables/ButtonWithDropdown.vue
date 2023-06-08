<script setup>
import { createPopper } from '@popperjs/core/lib/popper-lite'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow'
import flip from '@popperjs/core/lib/modifiers/flip'

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom-start',
    required: false
  },

  active: {
    type: Boolean,
    default: false,
    required: false
  },

  dusk: {
    type: String,
    default: null,
    required: false
  },

  disabled: {
    type: Boolean,
    default: false,
    required: false
  }
})

const opened = ref(false)
const popper = ref(null)

function toggle() {
  opened.value = !opened.value
}

function hide() {
  opened.value = false
}

watch(opened, () => {
  popper.value.update()
})

const button = ref(null)
const tooltip = ref(null)

onMounted(() => {
  popper.value = createPopper(button.value, tooltip.value, {
    placement: props.placement,
    modifiers: [flip, preventOverflow]
  })
})

defineExpose({ hide })
</script>
<template>
  <OnClickOutside :do="hide">
    <div class="relative">
      <button
        ref="button"
        type="button"
        :dusk="dusk"
        :disabled="disabled"
        class="focus:ring-primary-500 inline-flex w-full justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
        :class="{
          'border-secondary-300': active,
          'border-gray-300 dark:border-gray-600': !active,
          'cursor-not-allowed': disabled
        }"
        aria-haspopup="true"
        @click.prevent="toggle">
        <slot name="button" />
      </button>

      <div v-show="opened" ref="tooltip" class="absolute z-10">
        <div
          class="mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <slot />
        </div>
      </div>
    </div>
  </OnClickOutside>
</template>
