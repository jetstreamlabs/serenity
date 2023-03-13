<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const logout = () => {
  Inertia.post(useRoutes('logout'))
}
</script>

<template>
  <div :class="{ block: show, hidden: !show }" class="sm:hidden">
    <div class="space-y-1 pt-2 pb-3 pl-6 pr-4">
      <ResponsiveNavLink v-if="$page.props.user" :href="route('dashboard')" :active="route().current('dashboard')">
        {{ __('Dashboard') }}
      </ResponsiveNavLink>

      <ResponsiveNavLink :href="route('home')" :active="route().current('home')">
        {{ __('Documentation') }}
      </ResponsiveNavLink>
    </div>

    <!-- Responsive Settings Options -->
    <div class="border-t border-gray-200 pt-4 pb-1 dark:border-gray-600">
      <div v-if="$page.props.canLogin" class="px-6 py-4 sm:flex sm:items-center sm:justify-end">
        <ResponsiveNavLink
          :href="route('login')"
          class="cursor-pointer text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
          {{ __('Login') }}
        </ResponsiveNavLink>
        <ResponsiveNavLink
          :href="route('register')"
          class="cursor-pointer text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
          {{ __('Register') }}
        </ResponsiveNavLink>
      </div>
    </div>
  </div>
</template>
