<script setup>
const form = useForm({
  password: '',
})

const submit = () => {
  form.post(useRoutes('password.confirm'), {
    onStart: () => form.clearErrors(),
    onSuccess: () => form.reset('password'),
  })
}
</script>

<template>
  <GuestLayout :title="__('Secure Area')">
    <AuthenticationCard max-width="md">
      <div class="mb-4 text-sm text-gray-600">
        {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
      </div>

      <ValidationErrors class="mb-4" />

      <form @submit.prevent="submit">
        <div>
          <Label for="password" value="Password" />
          <Input
            id="password"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password"
            required
            autocomplete="current-password"
            autofocus />
        </div>

        <div class="mt-4 flex justify-end">
          <Button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            {{ __('Confirm') }}
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  </GuestLayout>
</template>
