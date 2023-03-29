<script setup>
const props = defineProps(['id', 'searchId', 'modalOpen'])
const emit = defineEmits(['open-modal', 'close-modal'])

const modalContent = ref(null)
const searchInput = ref(null)

// close on click outside
const clickHandler = ({ target }) => {
  if (!props.modalOpen || modalContent.value.contains(target)) return
  emit('close-modal')
}

// close if the esc key is pressed
const keyHandler = (event) => {
  if (props.modalOpen && event.key === 'Escape') emit('close-modal')
  if (!props.modalOpen && event.metaKey && event.key == 'k') {
    event.preventDefault()
    emit('open-modal')
  }
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

watch(
  () => props.modalOpen,
  (open) => {
    open && nextTick(() => searchInput.value.focus())
  }
)
</script>

<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div
      v-show="modalOpen"
      class="fixed inset-0 z-50 bg-gray-900 bg-opacity-20 transition-opacity"
      aria-hidden="true"></div>
  </transition>
  <!-- Modal dialog -->
  <transition
    enter-active-class="transition duration-200 ease-in-out"
    enter-from-class="opacity-0 trangray-y-4"
    enter-to-class="opacity-100 trangray-y-0"
    leave-active-class="transition duration-200 ease-in-out"
    leave-from-class="opacity-100 trangray-y-0"
    leave-to-class="opacity-0 trangray-y-4">
    <div
      v-show="modalOpen"
      :id="id"
      class="fixed inset-0 top-20 z-50 mb-4 flex items-start justify-center overflow-hidden px-4 sm:px-6 md:top-28"
      role="dialog"
      aria-modal="true">
      <div
        ref="modalContent"
        class="max-h-full w-full max-w-2xl overflow-auto rounded bg-white shadow-lg dark:bg-gray-800">
        <!-- Search form -->
        <form class="border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center">
            <label :for="searchId">
              <span class="sr-only">Search</span>
              <IconOutlineSearch class="ml-4 h-4 w-4 shrink-0 fill-gray-500 dark:fill-gray-400" />
            </label>
            <input
              :id="searchId"
              class="w-full appearance-none border-0 bg-white py-3 pl-2 pr-4 text-sm placeholder-gray-400 focus:ring-transparent dark:bg-gray-800 dark:placeholder:text-gray-500"
              type="search"
              placeholder="Search ..."
              ref="searchInput" />
          </div>
        </form>
        <div class="space-y-4 px-2 py-4">
          <!-- Popular -->
          <div>
            <div class="mb-2 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Popular</div>
            <ul>
              <li>
                <Link
                  class="flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  href="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Alternative Schemas</span>
                </Link>
              </li>
              <li>
                <Link
                  class="flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  href="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Query string parameters</span>
                </Link>
              </li>
              <li>
                <Link
                  class="flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  href="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Integrations</span>
                </Link>
              </li>
              <li>
                <Link
                  class="flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  href="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Organize Contacts with Tags</span>
                </Link>
              </li>
            </ul>
          </div>
          <!-- Actions -->
          <div>
            <div class="mb-2 px-2 text-sm font-medium text-gray-500">Actions</div>
            <ul>
              <li>
                <Link
                  class="flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  href="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="mr-3 h-3 w-3 shrink-0 fill-blue-600"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.854.146a.5.5 0 0 0-.525-.116l-11 4a.5.5 0 0 0-.015.934l4.8 1.921 1.921 4.8A.5.5 0 0 0 7.5 12h.008a.5.5 0 0 0 .462-.329l4-11a.5.5 0 0 0-.116-.525Z" />
                  </svg>
                  <span class="font-medium">Contact support</span>
                </Link>
              </li>
              <li>
                <Link
                  class="flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  href="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="mr-3 h-3 w-3 shrink-0 fill-purple-500"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 0C2.691 0 0 2.362 0 5.267c0 2.905 2.691 5.266 6 5.266a6.8 6.8 0 0 0 1.036-.079l2.725 1.485a.5.5 0 0 0 .739-.439V8.711A4.893 4.893 0 0 0 12 5.267C12 2.362 9.309 0 6 0Z" />
                  </svg>
                  <span class="font-medium">Submit feedback</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
