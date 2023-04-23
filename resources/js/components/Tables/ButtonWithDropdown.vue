<template>
  <OnClickOutside :do="hide">
    <div class="relative">
      <button
        ref="button"
        type="button"
        :dusk="dusk"
        :disabled="disabled"
        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        :class="{ 'border-green-300': active, 'border-gray-300': !active, 'cursor-not-allowed': disabled }"
        aria-haspopup="true"
        @click.prevent="toggle">
        <slot name="button" />
      </button>

      <div v-show="opened" ref="tooltip" class="absolute z-10">
        <div class="mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <slot />
        </div>
      </div>
    </div>
  </OnClickOutside>
</template>

<script setup>
import { createPopper } from '@popperjs/core/lib/popper-lite'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow'
import flip from '@popperjs/core/lib/modifiers/flip'

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom-start',
    required: false,
  },

  active: {
    type: Boolean,
    default: false,
    required: false,
  },

  dusk: {
    type: String,
    default: null,
    required: false,
  },

  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
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
    modifiers: [flip, preventOverflow],
  })
})

defineExpose({ hide })
</script>
