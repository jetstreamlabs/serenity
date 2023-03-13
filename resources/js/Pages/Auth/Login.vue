<script setup>
const props = defineProps({
  canResetPassword: Boolean,
  status: String,
})

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const submit = () => {
  form
    .transform((data) => ({
      ...data,
      remember: form.remember ? 'on' : '',
    }))
    .post(useRoutes('login'), {
      onFinish: () => form.reset('password'),
    })
}
</script>

<template>
  <AuthLayout :title="__('Login')">
    <AuthenticationCard max-width="sm">
      <template #logo>
        <AuthenticationCard-logo />
      </template>

      <ValidationErrors class="mb-4" />

      <div v-if="props.status" class="mb-4 text-sm font-medium text-green-600">
        {{ props.status }}
      </div>

      <form @submit.prevent="submit">
        <div>
          <Label for="email" :value="__('Email Address')" req />
          <Input
            id="email"
            type="text"
            class="mt-1 block w-full"
            v-model="form.email"
            autocomplete="email"
            required
            autofocus />
        </div>

        <div class="mt-4">
          <Label for="password" :value="__('Password')" req />
          <Input
            id="password"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password"
            required
            autocomplete="current-password" />
        </div>

        <div class="mt-4 block">
          <label class="flex items-center">
            <Checkbox name="remember" v-model:checked="form.remember" />
            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
          </label>
        </div>

        <div class="mt-4 flex items-center justify-end">
          <Link
            v-if="props.canResetPassword"
            :href="route('password.request')"
            class="text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400">
            {{ __('Forgot your password?') }}
          </Link>

          <Button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            {{ __('Login') }}
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  </AuthLayout>
</template>
