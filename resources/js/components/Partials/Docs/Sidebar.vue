<script setup>
const navigation = usePage().props.sidebar

const currentPage = computed(() => usePage().props.currentSection)
</script>

<template>
  <nav class="h-screen text-sm">
    <ul class="space-y-9">
      <li class="pl-3" v-for="(categories, c) in navigation" :key="c">
        <h2 class="font-medium uppercase text-gray-900 dark:text-white">
          {{ c }}
        </h2>
        <ul
          class="mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-800 lg:mt-4 lg:space-y-4 lg:border-gray-200">
          <li class="relative" v-for="(link, i) in categories" :key="i">
            <Link
              :href="
                route('docs.show', {
                  version: link.version,
                  page: link.uri
                })
              "
              class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full"
              :class="[
                link.uri === currentPage
                  ? 'font-semibold text-blue-500 before:bg-blue-500'
                  : 'text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-gray-300'
              ]"
              >{{ link.title }}</Link
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
