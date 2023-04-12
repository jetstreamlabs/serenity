<template>
  <Head :title="$page.props.title">
    <meta head-key="description" :content="$page.props.description" />
    <meta head-key="keywords" :content="$page.props.keywords" />
  </Head>

  <MainNavigation v-if="$page.props.user" />
  <DocNavigation v-else />

  <main class="z-0 flex overflow-y-scroll py-6 focus:outline-none" tabindex="0">
    <div
      class="flex flex-col items-start justify-start px-6 lg:flex-row lg:justify-between">
      <MobileSidebar />

      <Sidebar />

      <div
        class="w-full rounded bg-white px-4 py-8 shadow dark:bg-gray-800 lg:ml-4">
        <div class="flex items-center">
          <ApplicationMark class="block h-10 w-auto" />
          <h1
            class="ml-4 pt-2 text-4xl font-normal text-gray-800 dark:text-gray-200">
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
        class="mb-4 hidden w-full rounded bg-white shadow dark:bg-gray-800 dark:text-gray-100 lg:ml-6 lg:block lg:w-4/12">
        <Toc />
      </div>
    </div>
    <ScrollTop />
  </main>
</template>
