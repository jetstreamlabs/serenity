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

        <div class="mt-2 flex items-center">
          <img class="h-12 w-12 rounded-full object-cover" :src="team.owner.profile_photo_url" :alt="team.owner.name" />

          <div class="ml-4 leading-tight">
            <div>{{ team.owner.name }}</div>
            <div class="text-sm text-gray-700 dark:text-gray-500">{{ team.owner.email }}</div>
          </div>
        </div>
      </div>

      <!-- Team Name -->
      <div class="col-span-6 sm:col-span-4">
        <Label for="name" :value="__('Team Name')" />

        <Input
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="form.name"
          :disabled="!permissions.canUpdateTeam" />

        <InputError :message="form.errors.name" class="mt-2" />
      </div>
    </template>

    <template #actions v-if="permissions.canUpdateTeam">
      <ActionMessage :on="form.recentlySuccessful" class="mr-3 text-green-500"> {{ __('Saved.') }}</ActionMessage>

      <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ __('Save') }}
      </Button>
    </template>
  </FormSection>
</template>
