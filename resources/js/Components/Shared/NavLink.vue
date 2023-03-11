<script setup>
const props = defineProps(['href', 'active'])
const { href, active } = toRefs(props)

const classes = computed(() => {
  return active.value === true
    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-contrast-500 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-contrast-700 transition'
    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition'
})
</script>
<template>
  <Link :href="href" :class="classes">
    <slot />
  </Link>
</template>
