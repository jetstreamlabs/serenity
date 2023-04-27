<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const isObject = inject('isObject')

const heading = ref('')
const message = ref('')

if (isObject(usePage().props.flash.warning)) {
  heading.value = usePage().props.flash.warning.title
  message.value = usePage().props.flash.warning.message
} else {
  message.value = usePage().props.flash.warning
}

const emit = defineEmits(['close'])
</script>
<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div
      v-if="show"
      class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="bg-yellow-400 p-4 dark:bg-yellow-500">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <IconOutlineExclamationCircle
              class="h-6 w-6 text-yellow-900"
              aria-hidden="true" />
          </div>
          <div class="-pt-2 ml-3 w-0 flex-1">
            <p class="text-base font-medium text-yellow-900">
              {{ heading }}
            </p>
            <p class="mt-1 text-sm text-yellow-800">
              {{ message }}
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              type="button"
              @click="emit('close')"
              class="inline-flex text-yellow-900 hover:text-yellow-700 focus:outline-none">
              <span class="sr-only">{{ __('Close') }}</span>
              <IconOutlineXMark class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
