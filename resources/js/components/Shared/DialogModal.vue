<script setup>
const props = defineProps({
  show: {
    default: false,
  },
  maxWidth: {
    default: '2xl',
  },
  closeable: {
    default: true,
  },
})
const { show, maxWidth, closeable } = toRefs(props)

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
    <div class="px-6 py-4">
      <div class="text-lg font-medium">
        <slot name="title"> </slot>
      </div>

      <div class="mt-4 dark:text-gray-500">
        <slot name="content"> </slot>
      </div>
    </div>

    <div class="bg-gray-100 px-6 py-4 text-right dark:bg-gray-700">
      <slot name="footer"> </slot>
    </div>
  </Modal>
</template>
