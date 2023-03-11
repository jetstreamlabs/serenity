<script setup>
const props = defineProps({
  passform: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const slots = useSlots()
const emit = defineEmits(['submitted'])
const hasActions = computed(() => {
  return !!slots.actions
})
</script>

<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <SectionTitle>
      <template #title><slot name="title"></slot></template>
      <template #description><slot name="description"></slot></template>
    </SectionTitle>

    <div class="mt-5 md:col-span-2 md:mt-0">
      <form @submit.prevent="emit('submitted')">
        <input
          v-if="props.passform"
          type="text"
          class="hidden"
          name="email"
          autocomplete="email"
          :value="$page.props.user.email" />
        <div
          class="bg-white px-4 py-5 shadow dark:bg-gray-800 dark:text-gray-100 sm:p-6"
          :class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'">
          <div class="grid grid-cols-6 gap-6">
            <slot name="form"></slot>
          </div>
        </div>

        <div
          class="flex items-center justify-end bg-gray-200 px-4 py-3 text-right shadow dark:bg-gray-700 sm:rounded-bl-md sm:rounded-br-md sm:px-6"
          v-if="hasActions">
          <slot name="actions"></slot>
        </div>
      </form>
    </div>
  </div>
</template>
