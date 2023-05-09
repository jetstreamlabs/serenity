<script setup>
const { isClient } = useClientOnly()
</script>
<template>
  <nav class="w-full" v-if="isClient">
    <ol class="breadcrumbs flex">
      <li v-for="(breadcrumb, index) in $page.props.breadcrumbs" :key="index">
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
