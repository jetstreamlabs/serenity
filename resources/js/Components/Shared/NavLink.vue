<script setup>
const props = defineProps(['href', 'active'])
const { href, active } = toRefs(props)

const classes = computed(() => {
  return active.value === true
    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-laravel-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-laravel-700 transition'
    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition'
})
</script>
<template>
  <Link :href="href" :class="classes">
    <slot />
  </Link>
</template>
