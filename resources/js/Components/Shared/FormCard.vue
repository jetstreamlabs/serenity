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
  <div
    class="bg-white shadow sm:rounded-tl-lg sm:rounded-tr-lg"
    :class="hasActions ? 'sm:rounded-lg' : 'sm:rounded-bl-lg sm:rounded-br-lg'">
    <div class="px-4 py-5 sm:px-6">
      <h2 class="text-lg font-medium leading-6 text-gray-900">
        <slot name="title" />
      </h2>
    </div>
    <form @submit.prevent="emit('submitted')">
      <input
        v-if="props.passform"
        type="text"
        class="hidden"
        name="username"
        autocomplete="username"
        :value="$page.props.user.username" />

      <div class="px-4 py-5 sm:px-6">
        <slot name="form"></slot>
      </div>
      <div
        v-if="hasActions"
        class="flex items-center justify-end bg-gray-200 px-4 py-3 text-right shadow sm:rounded-bl-lg sm:rounded-br-lg sm:px-6">
        <slot name="actions" />
      </div>
    </form>
  </div>
</template>
