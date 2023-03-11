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
    class="border-b border-gray-100 bg-white dark:border-gray-900 dark:bg-gray-800"
    :class="{ stickyHeader: stickyHeader }">
    <!-- Primary Navigation Menu -->
    <div class="px-6">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <!-- Logo -->
          <div class="flex shrink-0 items-center">
            <Link :href="route('dashboard')">
              <ApplicationMark class="block h-9 w-auto" />
            </Link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
              {{ __('Dashboard') }}
            </NavLink>

            <NavLink href="#" active="#">
              {{ __('Documentation') }}
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
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="showingNavigationDropdown = !showingNavigationDropdown"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700 dark:focus:text-gray-200">
            <IconOutlineMenu
              class="h-6 w-6"
              :class="{ hidden: showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }" />
            <IconOutlineX
              class="h-6 w-6"
              :class="{ hidden: !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" />
          </button>
        </div>
      </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <ResponsiveNavMenu :show="showingNavigationDropdown" />
  </nav>
</template>
