<template>
  <li>
    <button
      class="flex w-full items-center text-left font-medium text-gray-800 dark:text-gray-200"
      @click.prevent="open = !open"
      :aria-expanded="open">
      <div class="mr-3 shrink-0">
        <svg
          class="fill-gray-400 dark:fill-gray-500"
          :class="{ 'rotate-90': open }"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12">
          <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z" />
        </svg>
      </div>
      <span>{{ title }}</span>
    </button>
    <div :class="{ hidden: !open }">
      <div class="mt-2 pl-5">
        <slot />
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'Dropdown',
  props: ['title', 'open'],
}
</script>
