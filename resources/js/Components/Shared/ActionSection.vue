<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <SectionTitle>
      <template #title><slot name="title"></slot></template>
      <template #description><slot name="description"></slot></template>
    </SectionTitle>

    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
