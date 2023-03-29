<script setup></script>
<template>
  <div class="flex items-center justify-between space-x-6 border-b border-gray-200 py-8 dark:border-gray-800">
    <div class="text-lg font-bold text-gray-800 dark:text-gray-200">Was this helpful?</div>
    <div class="flex items-center space-x-4">
      <button class="opacity-30">
        <span class="sr-only">No, it didn't help</span>
        <img src="/storage/docs/feedback-01.svg" width="21" height="21" alt="No, it didn't help" />
      </button>
      <button class="opacity-30">
        <span class="sr-only">Still feel confused</span>
        <img src="/storage/docs/feedback-02.svg" width="21" height="21" alt="Still feel confused" />
      </button>
      <button>
        <span class="sr-only">Sounds good!</span>
        <img src="/storage/docs/feedback-03.svg" width="21" height="21" alt="Sounds good!" />
      </button>
      <button class="opacity-30">
        <span class="sr-only">Excellent article</span>
        <img src="/storage/docs/feedback-04.svg" width="21" height="21" alt="Excellent article" />
      </button>
    </div>
  </div>
</template>
