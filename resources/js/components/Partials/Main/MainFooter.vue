<script setup>
const copyright = useDayjs().format('YYYY')
</script>

<template>
  <footer class="mt-6 flex flex-row items-center justify-center py-12">
    <p class="text-sm text-gray-400">&copy; {{ copyright }}. Jetstream Labs, LLC.</p>
  </footer>
</template>
