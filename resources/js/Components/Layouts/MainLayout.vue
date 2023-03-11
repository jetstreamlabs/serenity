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

    <main class="p-10">
      <slot></slot>
    </main>

    <MainFooter />
  </div>

  <Modal />
  <Notification />
</template>
