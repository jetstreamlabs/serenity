<script setup>
const props = defineProps(['prevArticle', 'nextArticle'])
</script>

<template>
  <div class="items-center justify-between space-y-6 py-8 sm:flex sm:space-y-0 sm:space-x-4">
    <!-- Prev link -->
    <div v-if="prevArticle" class="flex-col items-start sm:flex sm:w-1/2">
      <div>
        <div class="mb-1 text-xs font-[650] uppercase text-blue-600">Prev</div>
        <div>
          <Link class="flex items-center font-[650] text-gray-800 dark:text-gray-200" :href="prevArticle.link">
            <svg
              class="mr-2 shrink-0 rotate-180 fill-gray-400 dark:fill-gray-500"
              width="8"
              height="10"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
            </svg>
            <span>{{ prevArticle.title }}</span>
          </Link>
        </div>
      </div>
    </div>
    <!-- Next link -->
    <div v-if="nextArticle" class="ml-auto flex-col items-end sm:flex sm:w-1/2">
      <div>
        <div class="mb-1 text-xs font-[650] uppercase text-blue-600">Next</div>
        <div>
          <Link class="flex items-center font-[650] text-gray-800 dark:text-gray-200" :href="nextArticle.link">
            <span>{{ nextArticle.title }}</span>
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
  </div>
</template>
