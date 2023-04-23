<script setup>
const props = defineProps({
  status: String,
})

const form = useForm({
  email: '',
})

const submit = () => {
  form.post(useRoutes('password.email'), {
    onStart: () => form.clearErrors(),
    onSuccess: () => form.reset('email'),
  })
}
</script>

<template>
  <GuestLayout :title="__('Forgot Password')">
    <AuthenticationCard max-width="sm">
      <div class="mb-4 text-sm text-gray-600 dark:text-gray-500">
        {{
          __(
            'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.'
          )
        }}
      </div>

      <div v-if="props.status" class="mb-4 text-sm font-medium text-green-600">
        {{ props.status }}
      </div>

      <ValidationErrors class="mb-4" />

      <form @submit.prevent="submit">
        <div>
          <Label for="email" :value="__('Email')" />
          <Input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus />
        </div>

        <div class="mt-4 flex items-center justify-end">
          <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            {{ __('Email Password Reset Link') }}
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  </GuestLayout>
</template>
