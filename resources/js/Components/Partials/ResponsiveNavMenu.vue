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
    <div class="pt-2 pb-3 pl-6 pr-4 space-y-1">
      <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
        {{ __('Dashboard') }}
      </ResponsiveNavLink>
    </div>

    <!-- Responsive Settings Options -->
    <div class="pt-4 pb-1 border-t border-gray-200">
      <div class="flex items-center px-4">
        <div v-if="$page.props.serenity.managesProfilePhotos" class="mr-3 shrink-0">
          <img
            class="object-cover w-10 h-10 rounded-full"
            :src="$page.props.user.profile_photo_url"
            :alt="$page.props.user.name" />
        </div>

        <div>
          <div class="text-base font-medium text-gray-800">{{ $page.props.user.username }}</div>
          <div class="text-sm font-medium text-gray-500">{{ $page.props.user.email }}</div>
        </div>
      </div>

      <div class="pl-6 pr-4 mt-3 space-y-2">
        <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">
          {{ __('Profile') }}
        </ResponsiveNavLink>

        <ResponsiveNavLink
          :href="route('api-tokens.index')"
          :active="route().current('api-tokens.index')"
          v-if="$page.props.serenity.hasApiFeatures">
          {{ __('API Tokens') }}
        </ResponsiveNavLink>

        <!-- Authentication -->
        <form method="POST" @submit.prevent="logout">
          <ResponsiveNavLink as="button">{{ __('Logout') }}</ResponsiveNavLink>
        </form>

        <!-- Team Management -->
        <template v-if="$page.props.serenity.hasTeamFeatures">
          <div class="border-t border-gray-200"></div>

          <div class="block py-2 pr-4 text-xs text-gray-400">{{ __('Manage Teams') }}</div>

          <!-- Team Settings -->
          <ResponsiveNavLink
            :href="route('teams.show', $page.props.user.current_team)"
            :active="route().current('teams.show')">
            {{ __('Team Settings') }}
          </ResponsiveNavLink>

          <ResponsiveNavLink
            :href="route('teams.create')"
            :active="route().current('teams.create')"
            v-if="$page.props.serenity.canCreateTeams">
            {{ __('Create New Team') }}
          </ResponsiveNavLink>

          <div class="border-t border-gray-200"></div>

          <!-- Team Switcher -->
          <div class="block py-2 pr-4 text-xs text-gray-400">{{ __('Switch Teams') }}</div>

          <template v-for="team in $page.props.user.all_teams" :key="team.id">
            <form @submit.prevent="switchToTeam(team)">
              <ResponsiveNavLink as="button">
                <div class="flex items-center">
                  <IconOutlineBadgeCheck
                    v-if="team.id == $page.props.user.current_team_id"
                    class="w-5 h-5 mr-2 text-green-400" />
                  <div>{{ team.name }}</div>
                </div>
              </ResponsiveNavLink>
            </form>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
