<script setup>
const props = defineProps({ title: String })

const title = props.title || useTrans(__('Dashboard'))
</script>

<template>
  <Head :title="title" />

  <Banner />

  <div class="beams min-h-screen bg-gray-100 dark:bg-gray-900">
    <MainNavigation />

    <main class="mx-auto w-full px-4 pt-12 sm:px-6 lg:px-8">
      <slot></slot>
    </main>

    <MainFooter />
  </div>

  <Notification />
</template>
