<script setup>
const props = defineProps(['sessions'])
</script>

<template>
  <MainLayout :title="__('Profile')">
    <div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div v-if="$page.props.serenity.canUpdateProfileInformation">
        <UpdateProfileInformationForm :user="$page.props.user" />
      </div>
    </div>
  </MainLayout>
</template>
