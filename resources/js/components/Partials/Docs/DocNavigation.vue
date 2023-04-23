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
  <nav
    class="sticky top-0 z-50 bg-white dark:bg-gray-800"
    :class="{ stickyHeader: stickyHeader }">
    <!-- Primary Navigation Menu -->
    <div class="px-6">
      <div class="flex h-16 justify-center md:justify-between">
        <div class="flex w-full items-center">
          <!-- Logo -->
          <div class="flex shrink-0 items-center">
            <Link :href="route('home')">
              <ApplicationMark class="block h-9 w-auto" />
            </Link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:flex lg:-my-px lg:ml-10">
            <NavLink
              v-if="$page.props.user"
              :href="route('dashboard')"
              :active="route().current('dashboard')">
              {{ __('Dashboard') }}
            </NavLink>

            <NavLink
              :href="route('docs.home')"
              class="my-px"
              :active="route().current('docs.home')">
              {{ __('Documentation') }}
            </NavLink>
          </div>
        </div>
        <div class="flex w-full justify-center px-4 lg:px-0">
          <button
            class="m-auto inline-flex w-full items-center justify-between whitespace-nowrap rounded border border-gray-200 bg-white py-[7px] pl-3 pr-2 text-[15px] leading-5 text-gray-400 shadow-sm hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600 sm:w-[380px]"
            :class="{ 'bg-gray-200': searchModalOpen }"
            @click.stop="searchModalOpen = true"
            aria-controls="search-modal">
            <div class="flex items-center justify-center">
              <IconOutlineSearch
                class="mr-3 h-4 w-4 shrink-0 fill-gray-500 dark:fill-gray-400" />
              <span>Search ... </span>
            </div>
            <div
              class="ml-3 flex h-5 w-5 items-center justify-center font-medium text-gray-500 dark:text-gray-400">
              <kbd class="text-[length:1.2em]">⌘</kbd>
              <kbd class="ml-[2px] text-[length:0.9em]">K</kbd>
            </div>
          </button>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div
            v-if="$page.props.canLogin"
            class="hidden px-6 py-4 lg:flex lg:items-center lg:justify-end">
            <template v-if="!$page.props.user">
              <Link
                :href="route('login')"
                class="text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
                {{ __('Login') }}
              </Link>
              <Link
                :href="route('register')"
                class="border-orange bg-orange ml-4 inline-flex w-full items-center justify-center rounded-full border-2 px-4 py-1.5 text-center text-sm font-medium text-white duration-200 hover:bg-transparent hover:text-orange-600 focus:outline-none focus-visible:outline-white focus-visible:ring-white dark:border-white dark:bg-white dark:text-gray-700 dark:hover:bg-transparent dark:hover:text-white lg:w-auto">
                {{ __('Register') }}
              </Link>
            </template>
            <ThemeSwitcher class="ml-3" />
          </div>
        </div>

        <!-- Hamburger -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="showingNavigationDropdown = !showingNavigationDropdown"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700 dark:focus:text-gray-200">
            <IconOutlineMenu
              class="h-6 w-6"
              :class="{
                hidden: showingNavigationDropdown,
                'inline-flex': !showingNavigationDropdown
              }" />
            <IconOutlineX
              class="h-6 w-6"
              :class="{
                hidden: !showingNavigationDropdown,
                'inline-flex': showingNavigationDropdown
              }" />
          </button>
        </div>
      </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <GuestResponsiveNavMenu :show="showingNavigationDropdown" />
    <DocHeaderbar :stickyHeader="stickyHeader" />
  </nav>
  <Teleport to="body">
    <SearchModal
      id="search-modal"
      searchId="search"
      :modalOpen="searchModalOpen"
      @open-modal="searchModalOpen = true"
      @close-modal="searchModalOpen = false" />
  </Teleport>
</template>
