<script setup>
const props = defineProps({ title: String })

const title = props.title || useTrans('Dashboard')
</script>

<template>
  <Head :title="title" />

  <Banner />

  <div class="beams min-h-screen bg-gray-100 dark:bg-gray-900">
    <MainNavigation />

    <header class="mb-9 hidden bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 md:block">
      <div class="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs :breadcrumbs="$page.props.breadcrumbs" />
      </div>
    </header>

    <main class="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <slot></slot>
    </main>

    <MainFooter />
  </div>

  <Notification />
</template>
