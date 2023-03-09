<script setup>
const dayjs = useDayjs()
const copyright = dayjs().format('YYYY')
</script>

<template>
  <footer class="flex flex-row items-center justify-center py-3 my-12">
    <p class="text-sm text-gray-400">&copy; {{ copyright }}. Jetstream Labs, LLC.</p>
  </footer>
</template>
