<script setup>
const props = defineProps(['sessions'])
</script>

<template>
  <MainLayout :title="__('Settings')">
    <template #header>
      <h2 class="text-xl font-semibold leading-tight">{{ __('Settings') }}</h2>
    </template>

    <div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div v-if="$page.props.serenity.canUpdatePassword">
        <UpdatePasswordForm class="mt-10 sm:mt-0" />

        <SectionBorder />
      </div>

      <div v-if="$page.props.serenity.canManageTwoFactorAuthentication">
        <TwoFactorAuthenticationForm class="mt-10 sm:mt-0" />

        <SectionBorder />
      </div>

      <LogoutOtherBrowserSessionsForm :sessions="props.sessions" class="mt-10 sm:mt-0" />

      <template v-if="$page.props.serenity.hasAccountDeletionFeatures">
        <SectionBorder />

        <DeleteUserForm class="mt-10 sm:mt-0" />
      </template>
    </div>
  </MainLayout>
</template>
