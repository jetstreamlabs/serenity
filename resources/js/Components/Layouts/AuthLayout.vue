<script setup>
const props = defineProps({ title: String })
</script>
<template>
  <Head :title="title" />

  <div class="beams min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
    <GuestHeader />

    <main>
      <slot></slot>
    </main>

    <GuestFooter />
  </div>
</template>
