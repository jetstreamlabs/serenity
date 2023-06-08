<script setup>
defineProps({
  label: {
    type: String,
    default: 'Search ...',
    required: false
  },

  value: {
    type: String,
    default: '',
    required: false
  },

  onChange: {
    type: Function,
    required: true
  }
})
</script>
<template>
  <div class="relative">
    <input
      class="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 pl-9 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700"
      :placeholder="label"
      :value="value"
      type="text"
      name="global"
      @input="onChange($event.target.value)" />
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <IconOutlineMagnifyingGlass class="h-4 w-4 text-gray-400" />
    </div>
  </div>
</template>
