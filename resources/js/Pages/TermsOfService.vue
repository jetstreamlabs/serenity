<script setup>
import Terms from './Markdown/Terms.md'
</script>

<template>
  <GuestLayout>
    <Head :title="__('Terms of Service')" />

    <div class="font-sans antialiased">
      <div class="pt-4">
        <div class="flex min-h-screen flex-col items-center pt-6 sm:pt-0">
          <div>
            <AuthenticationCard-logo />
          </div>

          <div
            class="prose mt-6 w-full overflow-hidden bg-white p-6 shadow-md dark:bg-gray-800 sm:max-w-2xl sm:rounded-lg">
            <Terms />
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
