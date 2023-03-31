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
      class="fixed top-0 z-50 h-screen overflow-y-auto dark:bg-gray-900"
      ref="sidebar"
      v-show="sidebarOpen">
      <div class="w-full max-w-max overflow-y-auto rounded bg-gray-100 pt-4 dark:bg-gray-700">
        <!-- Docs nav -->
        <nav class="w-full pr-6 text-sm">
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
</template>
