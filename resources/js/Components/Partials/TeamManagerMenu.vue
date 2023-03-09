<script setup>
const props = defineProps({
  sticky: {
    type: Boolean,
    required: true,
  },
})

const switchToTeam = (team) => {
  // prettier-ignore
  Inertia.put(useRoutes('current-team.update'), 
    { team_id: team.id }, 
    { preserveState: false }
	)
}
</script>

<template>
  <div class="relative ml-3">
    <!-- Teams Dropdown -->
    <Dropdown align="right" class="font-ui" width="60" v-if="$page.props.jetstream.hasTeamFeatures">
      <template #trigger>
        <span class="inline-flex rounded-md">
          <button
            type="button"
            class="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-100 dark:focus:bg-gray-900 dark:active:bg-gray-900"
            :class="[
              sticky
                ? 'bg-white hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50'
                : 'bg-transparent hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200',
            ]">
            {{ $page.props.user.current_team.name }}
            <IconOutlineSelector class="ml-2 -mr-0.5 h-4 w-4" />
          </button>
        </span>
      </template>

      <template #content>
        <div class="w-60">
          <!-- Team Management -->
          <template v-if="$page.props.jetstream.hasTeamFeatures">
            <div class="block px-4 py-2 text-xs text-gray-400 dark:font-semibold dark:text-gray-500">
              {{ __('Manage Team') }}
            </div>

            <!-- Team Settings -->
            <DropdownLink :href="route('teams.show', $page.props.user.current_team)">
              {{ __('Team Settings') }}
            </DropdownLink>

            <DropdownLink :href="route('teams.create')" v-if="$page.props.jetstream.canCreateTeams">
              {{ __('Create New Team') }}
            </DropdownLink>

            <div class="border-t border-gray-100 dark:border-gray-600"></div>

            <!-- Team Switcher -->
            <div class="block px-4 py-2 text-xs text-gray-400 dark:font-semibold dark:text-gray-500">
              {{ __('Switch Teams') }}
            </div>

            <template v-for="team in $page.props.user.all_teams" :key="team.id">
              <form @submit.prevent="switchToTeam(team)">
                <DropdownLink as="button">
                  <div class="flex items-center">
                    <IconOutlineBadgeCheck
                      v-if="team.id == $page.props.user.current_team_id"
                      class="mr-2 h-5 w-5 text-green-400" />
                    <div>{{ team.name }}</div>
                  </div>
                </DropdownLink>
              </form>
            </template>
          </template>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
