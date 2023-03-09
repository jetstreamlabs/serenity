<script setup>
const props = defineProps({ title: String })
//const title = props.title
</script>
<template>
  <Head :title="title" />

  <div class="min-h-screen auth-layout">
    <!-- Page Content -->
    <main>
      <slot></slot>
    </main>
  </div>
</template>
