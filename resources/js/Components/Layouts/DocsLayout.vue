<script setup>
//
</script>

<template>
  <Head :title="$page.props.title">
    <meta head-key="description" :content="$page.props.description" />
    <meta head-key="keywords" :content="$page.props.keywords" />
  </Head>

  <MainNavigation v-if="$page.props.user" />
  <DocNavigation v-else />

  <main class="z-0 flex py-6 overflow-y-scroll focus:outline-none" tabindex="0">
    <div class="flex flex-col items-start justify-start px-6 lg:flex-row lg:justify-between">
      <MobileSidebar />

      <Sidebar />

      <div class="w-full px-4 py-8 bg-white rounded shadow dark:bg-gray-800 lg:ml-4">
        <div class="flex items-center">
          <ApplicationMark class="block w-auto h-10" />
          <h1 class="pt-2 ml-4 text-4xl font-normal text-gray-800 dark:text-gray-200">
            {{ $page.props.title }}
          </h1>
        </div>

        <SectionBorder />

        <MobileNavTrigger />
        <slot />

        <SectionBorder size="sm" class="mt-6" />

        <PageNavigation />

        <PageFooter />
      </div>
      <div
        class="hidden w-full mb-4 bg-white rounded shadow dark:bg-gray-800 dark:text-gray-100 lg:ml-6 lg:block lg:w-4/12">
        <Toc />
      </div>
    </div>
    <ScrollTop />
  </main>
</template>
