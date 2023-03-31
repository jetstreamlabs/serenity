<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      type="button"
      class="fixed bottom-0 right-0 mb-10 mr-10 flex h-10 w-10 items-center rounded-full bg-blue-500 text-white shadow-xl focus:bg-blue-600 focus:outline-none"
      @click.prevent="backToTop">
      <IconSolidChevronUp class="mx-auto h-6 w-6" />
    </button>
  </transition>
</template>

<script setup>
const isVisible = ref(false)

const watchDisplay = () => {
  isVisible.value = window.pageYOffset > 600
}

const backToTop = () => {
  document.querySelector('#app').scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  document.addEventListener('scroll', watchDisplay, { passive: true })
})

onUnmounted(() => {
  document.removeEventListener('scroll', watchDisplay)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
