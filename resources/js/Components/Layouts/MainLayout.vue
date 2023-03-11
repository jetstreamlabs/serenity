<script setup>
import { Modal } from 'momentum-modal'

const props = defineProps({ title: String })

const title = props.title || useTrans('Dashboard')
</script>

<template>
  <Head :title="title" />

  <Banner />

  <div class="min-h-screen bg-gray-100 beams dark:bg-gray-900">
    <MainNavigation />

    <header class="hidden text-gray-800 bg-white mb-9 dark:bg-gray-800 dark:text-gray-100 md:block">
      <div class="w-full px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <Breadcrumbs :breadcrumbs="$page.props.breadcrumbs" />
      </div>
    </header>

    <main class="w-full px-4 mx-auto sm:px-6 lg:px-8">
      <slot></slot>
    </main>

    <MainFooter />
  </div>

  <Modal />
  <Notification />
</template>
