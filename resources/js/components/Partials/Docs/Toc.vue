<template>
  <div
    id="toc"
    class="rounded bg-white px-4 pt-4 shadow dark:bg-gray-800 dark:text-gray-100">
    <h2
      class="mb-3 text-sm font-semibold uppercase text-gray-800 dark:text-gray-100">
      On This Page
    </h2>
    <ul
      v-if="$page.props.toc && $page.props.toc.length > 0"
      class="divide-y divide-dashed divide-gray-200 dark:divide-gray-600">
      <li v-for="(link, i) in $page.props.toc" :key="i" class="py-3">
        <a
          :href="link.href"
          class="ml-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >{{ link.text }}</a
        >
      </li>
    </ul>
    <ul v-else>
      <li class="py-3 text-sm text-gray-600 dark:text-gray-300">
        Nothing Yet ...
      </li>
    </ul>
  </div>
</template>
