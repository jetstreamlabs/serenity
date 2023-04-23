<script setup>
const sidebarOpen = ref(false)
const emitter = inject('emitter')

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  emitter.emit('toggle-sidebar', sidebarOpen.value)
}
</script>

<template>
  <div class="flex items-center mt-6 mb-8 sm:mt-0 lg:mb-0 dark:text-gray-100 lg:hidden">
    <!-- Hamburger button -->
    <MenuButton :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <!-- Breadcrumbs -->
    <ol class="flex ml-2 breadcrumbs">
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
