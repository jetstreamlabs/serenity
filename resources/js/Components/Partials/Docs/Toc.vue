<template>
  <div id="toc" class="px-4 py-4">
    <h2 class="text-gray-800 dark:text-gray-100 mb-3 text-sm font-semibold uppercase">On This Page</h2>
    <ul v-if="$page.props.toc && $page.props.toc.length > 0">
      <li v-for="(link, i) in $page.props.toc" :key="i" class="border-b border-gray-200 border-dashed dark:border-gray-600 py-3">
        <a :href="link.href" class="ml-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">{{
          link.text
        }}</a>
      </li>
    </ul>
    <ul v-else>
      <li class="py-3 text-sm text-gray-600 dark:text-gray-300">Nothing Yet ...</li>
    </ul>
  </div>
</template>
