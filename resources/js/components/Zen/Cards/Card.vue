<template>
  <z-card class="mx-6 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
    <h2 class="py-3 text-2xl font-medium">
      <slot name="title" />
    </h2>

    <z-divider class="mb-4 mt-2" />

    <slot />

    <slot name="footer" />
  </z-card>
</template>
