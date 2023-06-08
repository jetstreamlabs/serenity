<script setup>
const props = defineProps({
  columns: {
    type: Object,
    required: true
  },

  hasHiddenColumns: {
    type: Boolean,
    required: true
  },

  onChange: {
    type: Function,
    required: true
  }
})
</script>
<template>
  <ButtonWithDropdown
    placement="bottom-end"
    dusk="columns-dropdown"
    :active="hasHiddenColumns">
    <template #button>
      <IconOutlineFilter
        class="h-5 w-5"
        :class="{
          'text-gray-400': !hasHiddenColumns,
          'text-secondary-400': hasHiddenColumns
        }" />
    </template>

    <div
      role="menu"
      aria-orientation="horizontal"
      aria-labelledby="toggle-columns-menu"
      class="min-w-max">
      <div
        class="rounded-md border border-gray-200 px-4 py-2 dark:border-gray-600 dark:bg-gray-800">
        <ul class="divide-y divide-gray-200 dark:divide-gray-600">
          <li
            v-for="(column, key) in props.columns"
            v-show="column.can_be_hidden"
            :key="key"
            class="flex items-center justify-between py-2">
            <p class="text-sm text-gray-700 dark:text-gray-400">
              {{ column.label }}
            </p>

            <button
              type="button"
              class="relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              :class="{
                'bg-secondary-500 dark:bg-gray-400': !column.hidden,
                'bg-gray-200 dark:bg-gray-900': column.hidden
              }"
              :aria-pressed="!column.hidden"
              :aria-labelledby="`toggle-column-${column.key}`"
              :aria-describedby="`toggle-column-${column.key}`"
              :dusk="`toggle-column-${column.key}`"
              @click.prevent="onChange(column.key, column.hidden)">
              <span class="sr-only">Column status</span>
              <span
                aria-hidden="true"
                :class="{
                  'translate-x-5': !column.hidden,
                  'translate-x-0': column.hidden
                }"
                class="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-600" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </ButtonWithDropdown>
</template>
