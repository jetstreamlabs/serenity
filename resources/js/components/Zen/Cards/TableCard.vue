<template>
  <z-card class="mx-6 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
    <div class="flex items-center justify-between">
      <h2 class="py-3 text-2xl font-medium">
        <slot name="title" />
      </h2>
      <slot name="button" />
    </div>

    <z-divider class="my-4" />

    <slot name="table" />

    <slot />
  </z-card>
</template>
