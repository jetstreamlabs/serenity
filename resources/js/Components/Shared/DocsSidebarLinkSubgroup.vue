<template>
  <li class="mt-3">
    <a
      class="flex items-center space-x-3 font-medium text-gray-800 dark:text-gray-200"
      href="#0"
      @click.prevent="open = !open"
      aria-haspopup="true"
      :aria-expanded="open">
      <svg
        class="ml-2 shrink-0 fill-gray-400"
        :class="{ 'rotate-90': open }"
        width="8"
        height="10"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
      </svg>
      <span>{{ title }}</span>
    </a>
    <!-- 3rd level -->
    <ul class="mb-3 ml-1 border-l border-gray-200 pl-4 dark:border-gray-800" :class="{ hidden: !open }">
      <slot />
    </ul>
  </li>
</template>
<script>
export default {
  name: 'SidebarLinkSubgroup',
  props: ['title', 'open'],
}
</script>
