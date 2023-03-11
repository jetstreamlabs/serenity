<script setup>
const props = defineProps(['href', 'as'])
const { href, as } = toRefs(props)
</script>

<template>
  <div>
    <button
      type="submit"
      class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:bg-gray-900"
      v-if="as == 'button'">
      <slot></slot>
    </button>

    <a
      :href="href"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:bg-gray-900"
      v-else-if="as == 'a'">
      <slot></slot>
    </a>

    <Link
      :href="href"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:bg-gray-900"
      v-else>
      <slot></slot>
    </Link>
  </div>
</template>
