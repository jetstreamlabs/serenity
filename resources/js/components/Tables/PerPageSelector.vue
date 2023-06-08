<script setup>
import uniq from 'lodash-es/uniq'
import { getTranslations } from '@/translations.js'

const translations = getTranslations()

const props = defineProps({
  dusk: {
    type: String,
    default: null,
    required: false
  },

  value: {
    type: Number,
    default: 15,
    required: false
  },

  options: {
    type: Array,
    default() {
      return [15, 30, 50, 100]
    },
    required: false
  },

  onChange: {
    type: Function,
    required: true
  }
})

const perPageOptions = computed(() => {
  let options = [...props.options]

  options.push(parseInt(props.value))

  return uniq(options).sort((a, b) => a - b)
})
</script>
<template>
  <select
    name="per_page"
    :dusk="dusk"
    :value="value"
    class="focus:border-primary-500 focus:ring-primary-500 block min-w-max rounded-md border-gray-300 text-sm shadow-sm"
    @change="onChange($event.target.value)">
    <option v-for="option in perPageOptions" :key="option" :value="option">
      {{ option }} {{ translations.per_page }}
    </option>
  </select>
</template>
