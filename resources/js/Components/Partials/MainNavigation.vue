<script setup>
const showingNavigationDropdown = ref(false)

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

const stickyHeader = ref(false)

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}
</script>
<template>
  <nav
    class="bg-white border-b border-transparent dark:border-gray-900 dark:bg-gray-800"
    :class="{ stickyHeader: stickyHeader }">
    <!-- Primary Navigation Menu -->
    <div class="px-6 wrapper">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex items-center shrink-0">
            <Link :href="route('dashboard')">
              <ApplicationMark class="block w-auto h-9" />
            </Link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
              {{ __('Dashboard') }}
            </NavLink>

            <NavLink href="#" active="#">
              {{ __('Applications') }}
            </NavLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <!-- Team Manager Menu -->
          <TeamManagerMenu :sticky="stickyHeader" />

          <!-- Settings Dropdown -->
          <AccountManagerMenu />
          <div class="ml-3">
            <ThemeSwitcher />
          </div>
        </div>

        <!-- Hamburger -->
        <div class="flex items-center -mr-2 sm:hidden">
          <button
            @click="showingNavigationDropdown = !showingNavigationDropdown"
            class="inline-flex items-center justify-center p-2 text-gray-400 transition rounded-md hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none">
            <IconOutlineMenu
              class="w-6 h-6"
              :class="{ hidden: showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }" />
            <IconOutlineX
              class="w-6 h-6"
              :class="{ hidden: !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" />
          </button>
        </div>
      </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <ResponsiveNavMenu :show="showingNavigationDropdown" />
  </nav>

  <!-- Page Heading -->
  <!-- <header class="color-heading" v-if="$slots.header">
        <div class="unwrap">
          <div class="px-4 py-6 mx-auto text-gray-100 max-w-7xl dark:text-gray-100 sm:px-6 lg:px-8">
            <slot name="header"></slot>
          </div>
        </div>
      </header> -->
</template>
