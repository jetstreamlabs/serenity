<script setup>
const showingNavigationDropdown = ref(false)
const searchModalOpen = ref(false)

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
  <Teleport to="body">
    <SearchModal
      id="search-modal"
      searchId="search"
      :modalOpen="searchModalOpen"
      @open-modal="searchModalOpen = true"
      @close-modal="searchModalOpen = false" />
  </Teleport>
  <nav class="sticky top-0 z-50 bg-white dark:bg-gray-800" :class="{ stickyHeader: stickyHeader }">
    <!-- Primary Navigation Menu -->
    <div class="px-6">
      <div class="flex h-16 justify-between">
        <div class="flex w-full items-center">
          <!-- Logo -->
          <div class="flex shrink-0 items-center">
            <Link :href="route('dashboard')">
              <ApplicationMark class="block h-9 w-auto" />
            </Link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden space-x-8 lg:-my-px lg:ml-10 lg:flex">
            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
              {{ __('Dashboard') }}
            </NavLink>

            <NavLink :href="route('docs.home')" :active="route().current('docs.home')">
              {{ __('Documentation') }}
            </NavLink>
          </div>
          <div class="flex w-full justify-center px-4 lg:px-0">
            <button
              class="m-auto inline-flex w-full items-center justify-between whitespace-nowrap rounded border border-gray-200 bg-white py-[7px] pl-3 pr-2 text-[15px] leading-5 text-gray-400 shadow-sm hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600 lg:w-[380px]"
              :class="{ 'bg-gray-200': searchModalOpen }"
              @click.stop="searchModalOpen = true"
              aria-controls="search-modal">
              <div class="flex items-center justify-center">
                <svg
                  class="mr-3 h-4 w-4 shrink-0 fill-gray-500 dark:fill-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
                </svg>
                <span>Search ...</span>
              </div>
              <div class="ml-3 flex h-5 w-5 items-center justify-center font-medium text-gray-500 dark:text-gray-400">
                <kbd class="text-[length:1.2em]">⌘</kbd>
                <kbd class="ml-[2px] text-[length:0.9em]">K</kbd>
              </div>
            </button>
          </div>
        </div>
        <div class="ml-6 hidden md:ml-0 md:flex md:shrink-0 md:items-center">
          <!-- Team Manager Menu -->
          <TeamManagerMenu :sticky="stickyHeader" />

          <!-- Settings Dropdown -->
          <AccountManagerMenu />
          <div class="ml-3">
            <ThemeSwitcher />
          </div>
        </div>

        <!-- Hamburger -->
        <div class="-mr-2 flex items-center lg:hidden">
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
    <header
      class="transparent hidden border-t border-gray-100 text-gray-800 dark:border-gray-900 dark:text-gray-100 lg:block">
      <div class="mx-auto w-full px-4 py-6 lg:px-8">
        <Breadcrumbs />
      </div>
    </header>
  </nav>
</template>
