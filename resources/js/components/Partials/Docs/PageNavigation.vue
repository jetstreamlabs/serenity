<template>
  <div
    class="items-center justify-between space-y-6 pt-8 sm:flex sm:space-x-4 sm:space-y-0">
    <!-- Prev link -->
    <div
      v-if="$page.props.prevPage"
      class="flex-col items-start sm:flex sm:w-1/2">
      <div>
        <div class="mb-1 pl-4 text-xs font-[650] uppercase text-blue-600">
          Previous
        </div>
        <div>
          <Link
            :href="$page.props.prevPage.link"
            class="flex items-center font-medium text-gray-800 dark:text-gray-200">
            <svg
              class="mr-2 shrink-0 rotate-180 fill-gray-400 dark:fill-gray-500"
              width="8"
              height="10"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
            </svg>
            <span>{{ $page.props.prevPage.title }}</span>
          </Link>
        </div>
      </div>
    </div>
    <!-- Next link -->
    <div
      v-if="$page.props.nextPage"
      class="ml-auto flex-col items-end sm:flex sm:w-1/2">
      <div>
        <div
          class="mb-1 pr-4 text-right text-xs font-[650] uppercase text-blue-600">
          Next
        </div>
        <Link
          :href="$page.props.nextPage.link"
          class="flex items-center font-medium text-gray-800 dark:text-gray-200">
          <span>{{ $page.props.nextPage.title }}</span>
          <svg
            class="ml-2 shrink-0 fill-gray-400 dark:fill-gray-500"
            width="8"
            height="10"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</template>
