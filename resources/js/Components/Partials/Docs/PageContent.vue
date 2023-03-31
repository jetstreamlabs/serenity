<script setup>
const props = defineProps(['content'])
</script>
<template>
  <!--prettier-ignore-->
  <div
    class="docs docs-slate max-w-none dark:docs-invert docs-headings:font-normal"
    v-html="$page.props.content" />
</template>
