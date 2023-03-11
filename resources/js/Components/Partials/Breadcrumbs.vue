<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <nav class="w-full">
    <ol class="breadcrumbs flex">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <template v-if="breadcrumb.route === 'last'">
          <li class="last">{{ breadcrumb.text }}</li>
        </template>
        <template v-else>
          <Link :href="breadcrumb.route">
            {{ breadcrumb.text }}
          </Link>
        </template>
      </li>
    </ol>
  </nav>
</template>
