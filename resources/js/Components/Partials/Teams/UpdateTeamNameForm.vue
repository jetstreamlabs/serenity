<script setup>
const props = defineProps(['team', 'permissions'])
const { team, permissions } = toRefs(props)

const form = useForm({
  name: props.team.name,
})

const updateTeamName = () => {
  form.put(useRoutes('teams.update', { team: props.team.id }), {
    errorBag: 'updateTeamName',
    preserveScroll: true,
  })
}
</script>

<template>
  <FormSection @submitted="updateTeamName">
    <template #title>{{ __('Team Name') }}</template>

    <template #description>{{ __("The team's name and owner information.") }}</template>

    <template #form>
      <!-- Team Owner Information -->
      <div class="col-span-6">
        <Label :value="__('Team Owner')" />

        <div class="flex items-center mt-2">
          <img class="object-cover w-12 h-12 rounded-full" :src="team.owner.profile_photo_url" :alt="team.owner.name" />

          <div class="ml-4 leading-tight">
            <div>{{ team.owner.name }}</div>
            <div class="text-sm text-gray-700">{{ team.owner.email }}</div>
          </div>
        </div>
      </div>

      <!-- Team Name -->
      <div class="col-span-6 sm:col-span-4">
        <Label for="name" :value="__('Team Name')" />

        <Input
          id="name"
          type="text"
          class="block w-full mt-1"
          v-model="form.name"
          :disabled="!permissions.canUpdateTeam" />

        <Input-error :message="form.errors.name" class="mt-2" />
      </div>
    </template>

    <template #actions v-if="permissions.canUpdateTeam">
      <ActionMessage :on="form.recentlySuccessful" class="mr-3"> {{ __('Saved.') }}</ActionMessage>

      <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ __('Save') }}
      </Button>
    </template>
  </FormSection>
</template>
