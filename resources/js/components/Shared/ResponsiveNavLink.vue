<script setup>
const props = defineProps({
  active: Boolean,
  href: String,
  as: String,
})

const classes = computed(() => {
  return props.active === true
    ? 'block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-sm font-normal text-gray-900 dark:text-gray-100 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-100 dark:focus:bg-gray-600 focus:border-gray-700 dark:focus:border-red-500 transition'
    : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-normal text-gray-900 dark:text-gray-100 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-blue-500 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-600 focus:border-gray-300 dark:focus:border-red-500 transition'
})
</script>

<template>
  <div>
    <button :class="classes" class="w-full text-left" v-if="as == 'button'">
      <slot></slot>
    </button>

    <Link :href="href" :class="classes" v-else>
      <slot />
    </Link>
  </div>
</template>
