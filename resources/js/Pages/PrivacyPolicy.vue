<script setup>
import Privacy from './Markdown/Policy.md'
</script>

<template>
  <GuestLayout>
    <Head :title="__('Privacy Policy')" />

    <div class="font-sans antialiased">
      <div class="pt-4">
        <div class="flex min-h-screen flex-col items-center pt-6 sm:pt-0">
          <div>
            <AuthenticationCard-logo />
          </div>

          <div class="prose mt-6 w-full overflow-hidden p-6 shadow-md dark:bg-gray-800 sm:max-w-2xl sm:rounded-lg">
            <Privacy />
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
