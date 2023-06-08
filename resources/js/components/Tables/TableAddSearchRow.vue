<script setup>
const props = defineProps({
  searchInputs: {
    type: Object,
    required: true
  },

  hasSearchInputsWithoutValue: {
    type: Boolean,
    required: true
  },

  onAdd: {
    type: Function,
    required: true
  }
})

const dropdown = ref(null)

function enableSearch(key) {
  props.onAdd(key)
  dropdown.value.hide()
}
</script>
<template>
  <ButtonWithDropdown
    ref="dropdown"
    dusk="add-search-row-dropdown"
    :disabled="!hasSearchInputsWithoutValue"
    class="w-auto">
    <template #button>
      <IconOutlineMagnifyingGlass class="h-5 w-5 text-gray-400" />
    </template>

    <div
      role="menu"
      aria-orientation="horizontal"
      aria-labelledby="add-search-input-menu"
      class="min-w-max overflow-hidden rounded-md border border-gray-200 p-1 dark:border-gray-600 dark:bg-gray-800">
      <button
        v-for="(searchInput, key) in searchInputs"
        :key="key"
        :dusk="`add-search-row-${searchInput.key}`"
        class="w-full rounded-md px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        role="menuitem"
        @click.prevent="enableSearch(searchInput.key)">
        {{ searchInput.label }}
      </button>
    </div>
  </ButtonWithDropdown>
</template>
