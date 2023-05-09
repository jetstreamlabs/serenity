<script setup>
const sidebar = ref(null)

const store = useCoreStore()
const sidebarOpen = computed(() => store.getSidebarOpen)

const navigation = usePage().props.sidebar

// close on click outside
const clickHandler = ({ target }) => {
  if (!sidebarOpen.value) return
  store.toggleSidebar(!sidebarOpen.value)
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!sidebarOpen.value || keyCode !== 27) return
  store.toggleSidebar(!sidebarOpen.value)
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
  <Transition
    enter-active-class="transition-opacity duration-300 ease-linear"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-linear"
    leave-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-show="sidebarOpen" class="fixed top-[169px] z-40 flex">
      <Transition
        enter-active-class="transition duration-300 ease-in-out transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-300 ease-in-out transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full">
        <div
          ref="sidebar"
          v-show="sidebarOpen"
          class="relative flex min-h-max w-full min-w-[300px] max-w-max flex-1 flex-col rounded bg-gray-200 pb-4 pr-2 pt-5 dark:bg-gray-700">
          <div class="mt-1 h-0 flex-1 overflow-y-auto">
            <nav class="w-full pr-6 text-sm">
              <ul class="space-y-9">
                <li class="pl-3" v-for="(categories, c) in navigation" :key="c">
                  <h2 class="font-medium text-gray-900 dark:text-white">
                    {{ c }}
                  </h2>
                  <ul
                    class="mt-2 space-y-2 border-l-2 border-gray-300 dark:border-gray-800 lg:mt-4 lg:space-y-4 lg:border-gray-200">
                    <li
                      class="relative"
                      v-for="(link, i) in categories"
                      :key="i">
                      <Link
                        :href="
                          route('docs.show', {
                            version: link.version,
                            page: link.uri
                          })
                        "
                        class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full"
                        :class="[
                          route().current('docs.show', {
                            version: link.version,
                            page: link.uri
                          })
                            ? 'font-semibold text-blue-500 before:bg-blue-500'
                            : 'text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-800 dark:hover:text-gray-300'
                        ]"
                        >{{ link.title }}</Link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Transition>
      <div class="w-14 flex-shrink-0"></div>
    </div>
  </Transition>
</template>
