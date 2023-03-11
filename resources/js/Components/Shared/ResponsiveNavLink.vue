<script setup>
const props = defineProps(['active', 'href', 'as'])
const { active, href, as } = toRefs(props)
const classes = computed(() => {
  active.value === true
    ? 'block pl-3 pr-4 py-2 border-l-4 border-contrast-400 text-base font-medium text-contrast-700 bg-contrast-50 focus:outline-none focus:text-contrast-800 focus:bg-contrast-100 focus:border-contrast-700 transition'
    : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition'
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
