<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import find from 'lodash-es/find'

const skipUnwrap = { el: ref([]) }
let el = computed(() => skipUnwrap.el.value)

const props = defineProps({
  searchInputs: {
    type: Object,
    required: true
  },

  forcedVisibleSearchInputs: {
    type: Array,
    required: true
  },

  onChange: {
    type: Function,
    required: true
  },

  onRemove: {
    type: Function,
    required: true
  }
})

function isForcedVisible(key) {
  return props.forcedVisibleSearchInputs.includes(key)
}

watch(
  props.forcedVisibleSearchInputs,
  inputs => {
    const latestInput = inputs.length > 0 ? inputs[inputs.length - 1] : null

    if (!latestInput) {
      return
    }

    nextTick().then(() => {
      const inputElement = find(el.value, el => {
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
<template>
  <div
    v-for="(searchInput, key) in searchInputs"
    v-show="searchInput.value !== null || isForcedVisible(searchInput.key)"
    :key="key"
    class="px-4 sm:px-0">
    <div class="relative mt-3 flex rounded-md shadow-sm">
      <label
        :for="searchInput.key"
        class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-4 text-sm text-gray-500">
        <IconOutlineMagnifyingGlass class="mr-2 h-4 w-4 text-gray-400" />
        <span>{{ searchInput.label }}</span></label
      >
      <input
        :id="searchInput.key"
        :ref="skipUnwrap.el"
        :key="searchInput.key"
        :name="searchInput.key"
        :value="searchInput.value"
        type="text"
        class="focus:border-primary-500 focus:ring-primary-500 block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 text-sm"
        @input="onChange(searchInput.key, $event.target.value)" />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          class="focus:ring-primary-500 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
          :dusk="`remove-search-row-${searchInput.key}`"
          @click.prevent="onRemove(searchInput.key)">
          <span class="sr-only">Remove search</span>
          <IconOutlineXMark class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>
