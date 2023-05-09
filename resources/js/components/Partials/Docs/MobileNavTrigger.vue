<script setup>
const sidebarOpen = ref(false)
const emitter = inject('emitter')

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  emitter.emit('toggle-sidebar', sidebarOpen.value)
}
const { isClient } = useClientOnly()
</script>

<template>
  <div
    v-if="isClient"
    class="mb-8 mt-6 flex items-center dark:text-gray-100 sm:mt-0 lg:mb-0 lg:hidden">
    <MenuButton :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />

    <ol class="breadcrumbs ml-2 flex">
      <li v-for="(breadcrumb, index) in $page.props.breadcrumbs" :key="index">
        <template v-if="breadcrumb.route === 'last'">
          <li class="last">{{ breadcrumb.text }}</li>
        </template>
        <template v-else>
          <Link :href="breadcrumb.route">
            {{ breadcrumb.text }}
          </Link>
        </template>
      </li>
    </ol>
  </div>
</template>
