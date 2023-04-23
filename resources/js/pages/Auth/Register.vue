<script setup>
const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  terms: false,
})

const submit = () => {
  form.post(useRoutes('register'), {
    onStart: () => form.clearErrors(),
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <GuestLayout :title="__('Register')">
    <AuthenticationCard max-width="fit">
      <ValidationErrors class="mb-4" />

      <form @submit.prevent="submit">
        <div>
          <Label for="name" :value="__('Name')" req />
          <Input
            id="name"
            type="text"
            class="block w-full mt-1"
            v-model="form.name"
            required
            autofocus
            autocomplete="name" />
        </div>

        <div class="mt-4">
          <Label for="email" :value="__('Email')" req />
          <Input id="email" type="email" class="block w-full mt-1" v-model="form.email" required />
        </div>

        <div class="mt-4">
          <Label for="password" :value="__('Password')" req />
          <Input
            id="password"
            type="password"
            class="block w-full mt-1"
            v-model="form.password"
            required
            autocomplete="new-password" />
        </div>

        <div class="mt-4">
          <Label for="password_confirmation" :value="__('Confirm Password')" req />
          <Input
            id="password_confirmation"
            type="password"
            class="block w-full mt-1"
            v-model="form.password_confirmation"
            required
            autocomplete="new-password" />
        </div>

        <div class="mt-4" v-if="$page.props.serenity.hasTermsAndPrivacyPolicyFeature">
          <Label for="terms">
            <div class="flex items-center">
              <Checkbox name="terms" id="terms" v-model:checked="form.terms" />

              <div class="ml-2">
                I agree to the
                <Link
                  :href="route('terms.show')"
                  class="text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500">
                  {{ __('Terms of Service') }}
                </Link>
                and
                <Link
                  :href="route('policy.show')"
                  class="text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500">
                  {{ __('Privacy Policy') }}
                </Link>
              </div>
            </div>
          </Label>
        </div>

        <div class="flex items-center justify-end mt-4">
          <Link :href="route('login')" class="text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500">
            {{ __('Already registered?') }}
          </Link>

          <Button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            {{ __('Register') }}
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  </GuestLayout>
</template>
