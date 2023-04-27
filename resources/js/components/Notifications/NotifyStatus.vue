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

if (isObject(usePage().props.flash.status)) {
  heading.value = usePage().props.flash.status.title
  message.value = usePage().props.flash.status.message
} else {
  message.value = usePage().props.flash.status
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
      class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="bg-violet-400 p-4 dark:bg-violet-500">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <IconOutlineCode
              class="h-6 w-6 text-violet-900"
              aria-hidden="true" />
          </div>
          <div class="-pt-2 ml-3 w-0 flex-1">
            <p class="text-base font-medium text-violet-900">
              {{ heading }}
            </p>
            <p class="mt-1 text-sm text-violet-800">
              {{ message }}
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              type="button"
              @click="emit('close')"
              class="inline-flex text-violet-900 hover:text-violet-700 focus:outline-none">
              <span class="sr-only">{{ __('Close') }}</span>
              <IconOutlineXMark class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
