<script setup>
const props = defineProps(['sessions'])
</script>

<template>
  <MainLayout :title="__('Profile')">
    <template #header>
      <h2 class="text-xl font-semibold leading-tight">{{ __('Profile') }}</h2>
    </template>

    <div class="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8">
      <div v-if="$page.props.serenity.canUpdateProfileInformation">
        <UpdateProfileInformationForm :user="$page.props.user" />
      </div>
    </div>
  </MainLayout>
</template>
