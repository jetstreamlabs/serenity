<template>
  <div
    v-for="(searchInput, key) in searchInputs"
    v-show="searchInput.value !== null || isForcedVisible(searchInput.key)"
    :key="key"
    class="px-4 sm:px-0">
    <div class="relative flex mt-3 rounded-md shadow-sm">
      <label
        :for="searchInput.key"
        class="inline-flex items-center px-4 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd" />
        </svg>
        <span>{{ searchInput.label }}</span></label
      >
      <input
        :id="searchInput.key"
        :ref="skipUnwrap.el"
        :key="searchInput.key"
        :name="searchInput.key"
        :value="searchInput.value"
        type="text"
        class="flex-1 block w-full min-w-0 px-3 py-2 text-sm border-gray-300 rounded-none rounded-r-md focus:border-violet-500 focus:ring-violet-500"
        @input="onChange(searchInput.key, $event.target.value)" />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          class="text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          :dusk="`remove-search-row-${searchInput.key}`"
          @click.prevent="onRemove(searchInput.key)">
          <span class="sr-only">Remove search</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import find from 'lodash-es/find'

const skipUnwrap = { el: ref([]) }
let el = computed(() => skipUnwrap.el.value)

const props = defineProps({
  searchInputs: {
    type: Object,
    required: true,
  },

  forcedVisibleSearchInputs: {
    type: Array,
    required: true,
  },

  onChange: {
    type: Function,
    required: true,
  },

  onRemove: {
    type: Function,
    required: true,
  },
})

function isForcedVisible(key) {
  return props.forcedVisibleSearchInputs.includes(key)
}

watch(
  props.forcedVisibleSearchInputs,
  (inputs) => {
    const latestInput = inputs.length > 0 ? inputs[inputs.length - 1] : null

    if (!latestInput) {
      return
    }

    nextTick().then(() => {
      const inputElement = find(el.value, (el) => {
        return el.__vnode.key === latestInput
      })

      if (inputElement) {
        inputElement.focus()
      }
    })
  },
  { immediate: true }
)
</script>