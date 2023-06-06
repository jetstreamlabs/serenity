<script setup>
const form = useForm({
  name: ''
})

const createTeam = () => {
  form.post(useRoutes('teams.store'), {
    errorBag: 'createTeam',
    preserveScroll: true
  })
}
</script>

<template>
  <FormSection @submitted="createTeam">
    <template #title> {{ __('Team Details') }} </template>

    <template #description>
      {{ __('Create a new team to collaborate with others on projects.') }}
    </template>

    <template #form>
      <div class="col-span-6">
        <Label value="Team Owner" />

        <div class="mt-2 flex items-center">
          <img
            class="h-12 w-12 rounded-full object-cover"
            :src="$page.props.user.profile_photo_url"
            :alt="$page.props.user.name" />

          <div class="ml-4 leading-tight">
            <div>{{ $page.props.user.name }}</div>
            <div class="text-sm text-gray-700 dark:text-gray-500">
              {{ $page.props.user.email }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-6 sm:col-span-4">
        <Label for="name" value="Team Name" />
        <Input
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="form.name"
          autofocus />
        <InputError :message="form.errors.name" class="mt-2" />
      </div>
    </template>

    <template #actions>
      <Button
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing">
        {{ __('Create') }}
      </Button>
    </template>
  </FormSection>
</template>
