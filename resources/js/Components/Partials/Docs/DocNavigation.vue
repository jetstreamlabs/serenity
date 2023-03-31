<script setup>
const showingNavigationDropdown = ref(false)
const searchModalOpen = ref(false)
const versionOpen = ref(false)

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
const closeVersion = () => {
  versionOpen.value = false
}
</script>
<template>
  <nav class="sticky top-0 z-50 bg-white dark:bg-gray-800" :class="{ stickyHeader: stickyHeader }">
    <!-- Primary Navigation Menu -->
    <div class="px-6">
      <div class="flex justify-center h-16 md:justify-between">
        <div class="flex items-center w-full">
          <!-- Logo -->
          <div class="flex items-center shrink-0">
            <Link :href="route('home')">
              <ApplicationMark class="block w-auto h-9" />
            </Link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:flex lg:-my-px lg:ml-10">
            <NavLink v-if="$page.props.user" :href="route('dashboard')" :active="route().current('dashboard')">
              {{ __('Dashboard') }}
            </NavLink>

            <NavLink :href="route('docs.home')" class="my-px" :active="route().current('docs.home')">
              {{ __('Documentation') }}
            </NavLink>
          </div>
        </div>
        <div class="flex justify-center w-full px-4 lg:px-0">
          <button
            class="m-auto inline-flex w-full items-center justify-between whitespace-nowrap rounded border border-gray-200 bg-white py-[7px] pl-3 pr-2 text-[15px] leading-5 text-gray-400 shadow-sm hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600 sm:w-[380px]"
            :class="{ 'bg-gray-200': searchModalOpen }"
            @click.stop="searchModalOpen = true"
            aria-controls="search-modal">
            <div class="flex items-center justify-center">
              <IconOutlineSearch class="w-4 h-4 mr-3 shrink-0 fill-gray-500 dark:fill-gray-400" />
              <span>Search ... </span>
            </div>
            <div class="flex items-center justify-center w-5 h-5 ml-3 font-medium text-gray-500 dark:text-gray-400">
              <kbd class="text-[length:1.2em]">⌘</kbd>
              <kbd class="ml-[2px] text-[length:0.9em]">K</kbd>
            </div>
          </button>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div v-if="$page.props.canLogin" class="hidden px-6 py-4 lg:flex lg:items-center lg:justify-end">
            <template v-if="!$page.props.user">
              <Link
                :href="route('login')"
                class="text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
                {{ __('Login') }}
              </Link>
              <Link
                :href="route('register')"
                class="ml-4 inline-flex w-full items-center justify-center rounded-full border-2 border-orange bg-orange px-4 py-1.5 text-center text-sm font-medium text-white duration-200 hover:bg-transparent hover:text-orange-600 focus:outline-none focus-visible:outline-white focus-visible:ring-white dark:border-white dark:bg-white dark:text-gray-700 dark:hover:bg-transparent dark:hover:text-white lg:w-auto">
                {{ __('Register') }}
              </Link>
            </template>
            <ThemeSwitcher class="ml-3" />
          </div>
        </div>

        <!-- Hamburger -->
        <div class="flex items-center -mr-2 sm:hidden">
          <button
            @click="showingNavigationDropdown = !showingNavigationDropdown"
            class="inline-flex items-center justify-center p-2 text-gray-400 transition rounded-md hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700 dark:focus:text-gray-200">
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
    <GuestResponsiveNavMenu :show="showingNavigationDropdown" />
    <header
      class="hidden text-gray-800 border-t border-gray-100 transparent dark:border-gray-900 dark:text-gray-100 md:flex md:items-center md:justify-between">
      <div class="w-full px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <Breadcrumbs />
      </div>
      <div class="flex items-center px-4 py-6 sm:px-6 lg:px-8">
        <!-- Version dropdown -->
        <div class="relative ml-3">
          <div>
            <button
              v-click-outside="closeVersion"
              @click.prevent="versionOpen = !versionOpen"
              class="flex items-center justify-center w-auto h-8 font-medium text-gray-600 cursor-pointer hover:text-gray-700 focus:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
              id="version-menu"
              aria-label="Version menu"
              aria-haspopup="true">
              v{{ $page.props.currentVersion }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-auto h-4 ml-2 stroke-current"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-show="versionOpen" class="absolute right-0 w-auto mt-2 origin-top-right rounded-md shadow-lg">
              <div
                class="py-1 bg-white rounded-md shadow-xs dark:bg-gray-800 dark:text-gray-200"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu">
                <div v-for="version in $page.props.versions" :key="version">
                  <Link
                    :href="route('docs.show', { version: version, page: $page.props.currentSection })"
                    class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600"
                    role="menuitem">
                    {{ version }}
                  </Link>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!-- Github button -->
        <a
          :href="`https://github.com/${$page.props.github}`"
          target="_blank"
          class="flex items-center justify-center w-10 h-10 ml-4 text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-600 dark:focus:text-gray-600"
          aria-label="Github Link">
          <svg class="w-auto h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>GitHub</title>
            <path
              d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
          </svg>
        </a>
        <!-- Twitter button -->
        <a
          :href="`https://twitter.com/${$page.props.twitter}`"
          target="_blank"
          class="flex items-center justify-center w-10 h-10 ml-3 text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-600 dark:focus:text-gray-600"
          aria-label="Github Link">
          <svg class="w-auto h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Twitter</title>
            <path
              d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
          </svg>
        </a>
      </div>
    </header>
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
