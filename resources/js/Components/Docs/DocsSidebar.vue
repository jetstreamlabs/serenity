<script setup>
const props = defineProps(['sidebarOpen'])
const emit = defineEmits(['close-sidebar'])

const sidebar = ref(null)

const navigation = usePage().props.sidebar

// close on click outside
const clickHandler = ({ target }) => {
  if (!sidebar.value) return
  if (!props.sidebarOpen || sidebar.value.contains(target)) return
  emit('close-sidebar')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!props.sidebarOpen || keyCode !== 27) return
  emit('close-sidebar')
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
  <div>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100 ease-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-show="sidebarOpen"
        class="fixed inset-0 z-10 bg-gray-900 bg-opacity-20 transition-opacity md:hidden"
        aria-hidden="true"></div>
    </transition>

    <transition
      enter-active-class="transition duration-200 ease-out transform"
      enter-from-class="opacity-0 -trangray-x-full"
      enter-to-class="opacity-100 trangray-x-0"
      leave-active-class="transition duration-200 ease-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <aside
        id="sidebar"
        class="fixed left-0 top-0 bottom-0 z-10 h-screen w-64 border-r border-gray-200 dark:border-gray-800 dark:bg-gray-900 md:left-auto md:!block md:shrink-0 md:!opacity-100"
        ref="sidebar"
        v-show="sidebarOpen">
        <!-- Gradient bg displaying on light layout only -->
        <div
          class="pointer-events-none absolute inset-0 -left-[9999px] -z-10 bg-gradient-to-b from-gray-50 to-white dark:hidden"
          aria-hidden="true"></div>

        <div class="fixed top-[64px] bottom-0 overflow-y-auto">
          <!-- Docs nav -->
          <nav class="w-64 text-sm lg:pt-24">
            <ul class="space-y-9">
              <li class="pl-3" v-for="(categories, c) in navigation" :key="c">
                <h2 class="font-medium text-gray-900 dark:text-white">
                  {{ c }}
                </h2>
                <ul
                  class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                  <li class="relative" v-for="(link, i) in categories" :key="i">
                    <Link
                      :href="route('docs.show', { version: link.version, page: link.uri })"
                      class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full"
                      :class="[
                        route().current('docs.show', { version: link.version, page: link.uri })
                          ? 'font-semibold text-blue-500 before:bg-blue-500'
                          : 'text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-gray-300',
                      ]"
                      >{{ link.title }}</Link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </transition>
  </div>
</template>
