<script setup>
const logout = () => {
  Inertia.post(useRoutes('logout'))
}
</script>

<template>
  <div class="relative ml-3">
    <Dropdown align="right" width="48">
      <template #trigger>
        <button
          v-if="$page.props.serenity.managesProfilePhotos"
          class="flex text-sm transition border-2 border-transparent rounded-full focus:border-contrast-500 focus:outline-none">
          <img
            class="object-cover w-8 h-8 rounded-full"
            :src="$page.props.user.profile_photo_url"
            :alt="$page.props.user.name" />
        </button>

        <span v-else class="inline-flex rounded-md">
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none">
            {{ $page.props.user.name }}

            <IconOutlineChevronDown class="ml-2 -mr-0.5 h-4 w-4" />
          </button>
        </span>
      </template>

      <template #content>
        <!-- Account Management -->
        <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Manage Account') }}</div>
        <DropdownLink :href="route('profile.show')"> {{ __('Account') }} </DropdownLink>
        <DropdownLink :href="route('profile.show')" v-if="$page.props.serenity.canUpdateProfileInformation">
          {{ __('Profile') }}
        </DropdownLink>
        <DropdownLink :href="route('api-tokens.index')" v-if="$page.props.serenity.hasApiFeatures">
          {{ __('API Tokens') }}
        </DropdownLink>

        <div class="border-t border-gray-200 dark:border-gray-600"></div>

        <!-- Authentication -->
        <form @submit.prevent="logout">
          <DropdownLink as="button"> {{ __('Logout') }} </DropdownLink>
        </form>
      </template>
    </Dropdown>
  </div>
</template>
