<script setup>
const props = defineProps(['id', 'ariaLabel', 'modalOpen'])
const emit = defineEmits(['close-modal'])

const modalContent = ref(null)

const clickHandler = ({ target }) => {
  if (!props.modalOpen || modalContent.value.contains(target)) return
  emit('close-modal')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!props.modalOpen || keyCode !== 27) return
  emit('close-modal')
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})
</script>

<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div
      v-show="modalOpen"
      class="fixed inset-0 z-50 transition-opacity bg-gray-900 bg-opacity-20"
      aria-hidden="true"></div>
  </transition>

  <!-- Modal dialog -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="scale-95 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-out"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-95 opacity-0">
    <div
      v-show="modalOpen"
      :id="id"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden sm:px-6"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="ariaLabel">
      <div class="w-full max-w-4xl max-h-full overflow-auto bg-white dark:bg-gray-900" ref="modalContent">
        <slot />
      </div>
    </div>
  </transition>
</template>
