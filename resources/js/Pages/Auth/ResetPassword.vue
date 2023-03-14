<script setup>
const props = defineProps({
  email: String,
  token: String,
})

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(useRoutes('password.update'), {
    onStart: () => form.clearErrors(),
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <GuestLayout :title="__('Reset Password')">
    <AuthenticationCard max-width="sm">
      <ValidationErrors class="mb-4" />

      <form @submit.prevent="submit">
        <div>
          <Label for="email" :value="__('Email')" req />
          <Input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus />
        </div>

        <div class="mt-4">
          <Label for="password" :value="__('Password')" req />
          <Input
            id="password"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password"
            required
            autocomplete="new-password" />
        </div>

        <div class="mt-4">
          <Label for="password_confirmation" :value="__('Confirm Password')" req />
          <Input
            id="password_confirmation"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password_confirmation"
            required
            autocomplete="new-password" />
        </div>

        <div class="mt-4 flex items-center justify-end">
          <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            {{ __('Reset Password') }}
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  </GuestLayout>
</template>
