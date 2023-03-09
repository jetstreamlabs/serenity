<template>
  <select
    name="per_page"
    :dusk="dusk"
    :value="value"
    class="block text-sm border-gray-300 rounded-md shadow-sm cursor-pointer min-w-max focus:border-violet-500 focus:ring-violet-500"
    @change="onChange($event.target.value)">
    <option v-for="option in perPageOptions" :key="option" :value="option">
      {{ option }} {{ translations.per_page }}
    </option>
  </select>
</template>

<script setup>
import uniq from 'lodash-es/uniq'
import { getTranslations } from 'tableTranslations'

const translations = getTranslations()

const props = defineProps({
  dusk: {
    type: String,
    default: null,
    required: false,
  },

  value: {
    type: Number,
    default: 10,
    required: false,
  },

  options: {
    type: Array,
    default() {
      return [10, 25, 50, 100]
    },
    required: false,
  },

  onChange: {
    type: Function,
    required: true,
  },
})

const perPageOptions = computed(() => {
  let options = [...props.options]

  options.push(parseInt(props.value))

  return uniq(options).sort((a, b) => a - b)
})
</script>
