<script setup>
const page = usePage().props.currentSection

const props = defineProps(['sticky'])

const switchVersion = version => {
  router.get(useRoutes('docs.show', { version: version, page: page }))
}
</script>

<template>
  <Dropdown align="right" width="20" v-if="$page.props.versions">
    <template #trigger>
      <span class="inline-flex rounded-md">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-100 dark:focus:bg-gray-900 dark:active:bg-gray-900"
          :class="[
            sticky
              ? 'bg-transparent hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200'
              : 'bg-white hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50'
          ]">
          v{{ $page.props.currentVersion }}
          <IconOutlineSelector class="-mr-0.5 ml-2 h-4 w-4" />
        </button>
      </span>
    </template>

    <template #content>
      <div v-if="$page.props.versions" class="w-20">
        <template v-for="(version, i) in $page.props.versions" :key="i">
          <form @submit.prevent="switchVersion(version)">
            <DropdownLink as="button">
              <div class="flex items-center">
                <div>{{ version }}</div>
                <IconOutlineBadgeCheck
                  v-if="version == $page.props.currentVersion"
                  class="ml-2 h-5 w-5 text-green-400" />
              </div>
            </DropdownLink>
          </form>
        </template>
      </div>
    </template>
  </Dropdown>
</template>
