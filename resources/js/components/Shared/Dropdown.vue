<script setup>
const props = defineProps({
  align: {
    default: 'right'
  },
  width: {
    default: '64'
  },
  contentClasses: {
    default: () => ['py-1', 'bg-white', 'dark:bg-gray-700']
  }
})

let open = ref(false)

const closeOnEscape = e => {
  if (open.value && e.key === 'Escape') {
    open.value = false
  }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape))
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape))

const someClass = computed(() => {
  return {
    20: 'w-5',
    24: 'w-6',
    28: 'w-7',
    32: 'w-8',
    36: 'w-9',
    40: 'w-10',
    44: 'w-11',
    48: 'w-12',
    56: 'w-14',
    64: 'w-16',
    80: 'w-20',
    96: 'w-24',
    112: 'w-28',
    128: 'w-32',
    144: 'w-36',
    160: 'w-40',
    176: 'w-44',
    192: 'w-48',
    208: 'w-52',
    224: 'w-56',
    240: 'w-60',
    256: 'w-64',
    288: 'w-72',
    320: 'w-80',
    384: 'w-96'
  }[props.width.toString()]
})

const widthClass = computed(() => {
  return {
    20: 'w-20',
    32: 'w-32',
    36: 'w-9',
    48: 'w-48',
    64: 'w-64',
    96: 'w-96'
  }[props.width.toString()]
})

const alignmentClasses = computed(() => {
  if (props.align === 'left') {
    return 'origin-top-left left-0'
  } else if (props.align === 'right') {
    return 'origin-top-right right-0'
  } else {
    return 'origin-top'
  }
})
</script>

<template>
  <div class="relative">
    <div @click="open = !open">
      <slot name="trigger"></slot>
    </div>

    <div v-show="open" class="fixed inset-0 z-40" @click="open = false"></div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0">
      <div
        v-show="open"
        class="absolute z-50 mt-2 rounded-md shadow-lg"
        :class="[widthClass, alignmentClasses]"
        style="display: none"
        @click="open = false">
        <div
          class="mt-2 w-full rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700"
          :class="contentClasses">
          <slot name="content"></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
