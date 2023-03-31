<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div :class="{ block: show, hidden: !show }" class="sm:hidden">
    <div class="pt-2 pb-3 pl-6 pr-4 space-y-1">
      <ResponsiveNavLink v-if="$page.props.user" :href="route('dashboard')" :active="route().current('dashboard')">
        {{ __('Dashboard') }}
      </ResponsiveNavLink>

      <ResponsiveNavLink :href="route('docs.home')" :active="route().current('docs.home')">
        {{ __('Documentation') }}
      </ResponsiveNavLink>
    </div>

    <!-- Responsive Settings Options -->
    <div v-if="!$page.props.user" class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
      <div v-if="$page.props.canLogin" class="px-6 py-4 sm:flex sm:items-center sm:justify-end">
        <ResponsiveNavLink
          :href="route('login')"
          class="text-sm text-gray-600 cursor-pointer hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
          {{ __('Login') }}
        </ResponsiveNavLink>
        <ResponsiveNavLink
          v-if="$page.props.canRegister"
          :href="route('register')"
          class="text-sm text-gray-600 cursor-pointer hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
          {{ __('Register') }}
        </ResponsiveNavLink>
      </div>
    </div>
  </div>
</template>
