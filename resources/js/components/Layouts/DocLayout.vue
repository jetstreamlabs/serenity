<script setup>
const status = ref(0)
status.value = usePage().props.title == 'Page Not Found' ? 404 : 200
</script>
<template>
  <Head :title="$page.props.title">
    <meta head-key="description" :content="$page.props.description" />
    <meta head-key="keywords" :content="$page.props.keywords" />
  </Head>

  <MainNavigation v-if="$page.props.user" />
  <DocNavigation v-else />

  <main class="mt-4 grid grid-cols-12 gap-4 px-4 pb-8">
    <aside
      class="sticky top-0 col-span-2 hidden min-h-screen bg-gray-100 dark:bg-gray-900 lg:block">
      <Sidebar />
    </aside>
    <MobileCanvas />
    <div
      class="col-span-12 rounded bg-white px-4 py-6 shadow dark:bg-gray-800 lg:col-span-7">
      <div class="flex items-center">
        <ApplicationMark class="block h-10 w-auto" />
        <h1 class="ml-4 text-4xl font-normal text-gray-800 dark:text-gray-200">
          {{ $page.props.title }}
        </h1>
      </div>
      <SectionBorder />
      <MobileNavTrigger />

      <div class="docs docs-slate dark:docs-invert docs-headings:font-normal">
        <slot />
      </div>

      <template v-if="status !== 404">
        <SectionBorder size="sm" class="mt-6" />
        <PageNavigation />
      </template>

      <PageFooter />
    </div>
    <div class="col-span-3 hidden lg:block">
      <Toc />
    </div>
  </main>
  <ScrollTop />
</template>
