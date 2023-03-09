<template>
  <div class="py-12 wrapper md:flex">
    <section class="w-full h-full md:w-8/12 md:pr-3">
      <slot name="content" />
    </section>
    <aside class="w-full h-full mt-6 md:mt-0 md:w-4/12 md:pl-3">
      <slot name="right-sidebar" />
    </aside>
  </div>
</template>
