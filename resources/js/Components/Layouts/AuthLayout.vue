<script setup>
const props = defineProps({ title: String })
</script>
<template>
  <Head :title="title" />

  <div class="min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
    <!-- Page Content -->
    <main>
      <slot></slot>
    </main>
  </div>
</template>
