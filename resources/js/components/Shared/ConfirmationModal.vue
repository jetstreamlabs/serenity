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
    <div class="bg-white px-4 pt-5 pb-4 dark:bg-gray-800 dark:text-gray-100 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div
          class="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <IconOutlineExclamation class="h-6 w-6 text-red-600" />
        </div>

        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg font-medium">
            <slot name="title"></slot>
          </h3>

          <div class="mt-2">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 px-6 py-4 text-right dark:bg-gray-700">
      <slot name="footer"> </slot>
    </div>
  </Modal>
</template>
