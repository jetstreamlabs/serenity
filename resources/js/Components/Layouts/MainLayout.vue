<script setup>
import { Modal } from 'momentum-modal'

const props = defineProps({ title: String })

const title = props.title || useTrans('Dashboard')
</script>

<template>
  <Head :title="title" />

  <Banner />

  <div class="min-h-screen">
    <MainNavigation />

    <main>
      <slot></slot>
    </main>

    <MainFooter />
  </div>

  <Modal />
  <Notification />
</template>
