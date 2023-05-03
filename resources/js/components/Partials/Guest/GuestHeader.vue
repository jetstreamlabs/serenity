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
    class="sticky top-0 z-50 min-w-full border-b border-gray-100 bg-white bg-opacity-5 backdrop-blur-lg backdrop-filter dark:border-gray-900 dark:bg-gray-800 dark:bg-opacity-5 dark:backdrop-blur-lg dark:backdrop-filter"
    :class="{ stickyGuestHeader: stickyHeader }">
    <!-- Primary Navigation Menu -->
    <div class="px-6">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <!-- Logo -->
          <div class="flex shrink-0 items-center">
            <Link :href="route('home')">
              <ApplicationMark class="block h-9 w-auto" />
            </Link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
            <NavLink
              v-if="$page.props.user"
              :href="route('dashboard')"
              :active="route().current('dashboard')">
              {{ __('Dashboard') }}
            </NavLink>

            <NavLink
              :href="route('docs.home')"
              :active="route().current().startsWith('/docs')">
              {{ __('Documentation') }}
            </NavLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div
            v-if="$page.props.canLogin"
            class="hidden px-6 py-4 sm:flex sm:items-center sm:justify-end">
            <template v-if="!$page.props.user">
              <NavLink
                :href="route('login')"
                :active="route().current('login')">
                {{ __('Login') }}
              </NavLink>
              <Link
                :href="route('register')"
                class="border-orange bg-orange ml-4 inline-flex w-full items-center justify-center rounded-full border-2 px-4 py-1.5 text-center text-sm font-medium text-white duration-200 hover:bg-transparent hover:text-orange-600 focus:outline-none focus-visible:outline-white focus-visible:ring-white dark:border-white dark:bg-white dark:text-gray-700 dark:hover:bg-transparent dark:hover:text-white lg:w-auto">
                {{ __('Register') }}
              </Link>
            </template>
            <template v-else>
              <TeamManagerMenu :sticky="stickyHeader" />
              <AccountManagerMenu />
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
  </nav>
</template>
