<script setup>
//
</script>
<template>
  <nav class="hidden w-48 shrink-0 xl:block">
    <div class="no-scrollbar fixed bottom-0 h-[calc(100vh-5rem)] w-48 overflow-y-auto pt-32 pb-8">
      <div class="border-l border-gray-200 dark:border-gray-800">
        <div class="py-1.5 pl-4 text-xs font-[650] uppercase text-gray-400 dark:text-gray-200">On this page</div>
        <ul class="text-sm">
          <li>
            <!-- The data-scrollspy-link attribute makes the scrollspy work -->
            <a
              data-scrollspy-link
              class="relative block py-1.5 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5"
              href="#overview"
              >Overview</a
            >
          </li>
          <li>
            <!-- The data-scrollspy-link attribute makes the scrollspy work -->
            <a
              data-scrollspy-link
              class="relative block py-1.5 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5"
              href="#support"
              >Support</a
            >
          </li>
          <li>
            <!-- The data-scrollspy-link attribute makes the scrollspy work -->
            <a
              data-scrollspy-link
              class="relative block py-1.5 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5"
              href="#security"
              >Security &amp; Privacy</a
            >
          </li>
          <li>
            <!-- The data-scrollspy-link attribute makes the scrollspy work -->
            <a
              data-scrollspy-link
              class="relative block py-1.5 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5"
              href="#troubleshooting"
              >Troubleshooting</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
