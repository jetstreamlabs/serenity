<script setup>
defineProps({
  hasEnabledFilters: {
    type: Boolean,
    required: true
  },

  filters: {
    type: Object,
    required: true
  },

  onFilterChange: {
    type: Function,
    required: true
  }
})
</script>
<template>
  <ButtonWithDropdown
    placement="bottom-end"
    dusk="filters-dropdown"
    :active="hasEnabledFilters">
    <template #button>
      <IconOutlineFilter
        class="h-5 w-5"
        :class="{
          'text-gray-400': !hasEnabledFilters,
          'text-secondary-400': hasEnabledFilters
        }" />
    </template>

    <div
      role="menu"
      aria-orientation="horizontal"
      aria-labelledby="filter-menu"
      class="min-w-max">
      <div v-for="(filter, key) in filters" :key="key">
        <h3 class="bg-gray-100 p-3 text-xs uppercase tracking-wide">
          {{ filter.label }}
        </h3>
        <div class="p-2">
          <select
            v-if="filter.type === 'select'"
            :name="filter.key"
            :value="filter.value"
            class="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 text-sm shadow-sm"
            @change="onFilterChange(filter.key, $event.target.value)">
            <option
              v-for="(option, optionKey) in filter.options"
              :key="optionKey"
              :value="optionKey">
              {{ option }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </ButtonWithDropdown>
</template>
