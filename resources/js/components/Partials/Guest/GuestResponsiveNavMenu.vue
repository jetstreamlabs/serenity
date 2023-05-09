<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div :class="{ block: show, hidden: !show }" class="sm:hidden">
    <div class="space-y-1 pb-3 pl-6 pr-4 pt-2">
      <ResponsiveNavLink
        v-if="$page.props.user"
        :href="route('dashboard')"
        :active="route().current('dashboard')">
        {{ __('Dashboard') }}
      </ResponsiveNavLink>

      <ResponsiveNavLink
        :href="route('docs.home')"
        :active="route().current('docs.home')">
        {{ __('Documentation') }}
      </ResponsiveNavLink>
    </div>

    <div
      v-if="!$page.props.user"
      class="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
      <div
        v-if="$page.props.canLogin"
        class="px-6 py-4 sm:flex sm:items-center sm:justify-end">
        <ResponsiveNavLink
          :href="route('login')"
          class="cursor-pointer text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
          {{ __('Login') }}
        </ResponsiveNavLink>
        <ResponsiveNavLink
          v-if="$page.props.canRegister"
          :href="route('register')"
          class="cursor-pointer text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
          {{ __('Register') }}
        </ResponsiveNavLink>
      </div>
    </div>
  </div>
</template>
