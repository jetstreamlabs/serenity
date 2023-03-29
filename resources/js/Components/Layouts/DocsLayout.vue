<script setup>
const sidebarOpen = ref(false)

const prevArticle = ref(null)
const nextArticle = ref({
  title: 'Methods and Parameters',
  link: '#0',
})

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

const stickyHeader = ref(false)

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}
</script>

<template>
  <Head :title="$page.props.title">
    <meta head-key="description" :content="$page.props.description" />
    <meta head-key="keywords" :content="$page.props.keywords" />
  </Head>

  <MainNavigation v-if="$page.props.user" />
  <DocNavigation v-else />

  <div className="flex flex-col min-h-screen overflow-hidden">
    <main class="documentation-content grow">
      <section class="relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <!-- Main content -->
          <div>
            <!-- Sidebar -->
            <DocsSidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

            <!-- Page container -->
            <div class="md:grow md:pl-64 lg:pr-6 xl:pr-0">
              <div class="pt-8 pb-8 md:pt-8 md:pl-6 lg:pl-12">
                <!-- Page header -->
                <div class="mb-6 flex h-16 items-center">
                  <ApplicationMark class="block h-10 w-auto" />
                  <h1 class="ml-4 pt-2 text-4xl font-normal text-gray-800 dark:text-gray-200">
                    {{ $page.props.title }}
                  </h1>
                </div>

                <article class="flex xl:space-x-12">
                  <!-- Main area -->
                  <div class="min-w-0">
                    <!-- Mobile hamburger + breadcrumbs -->
                    <div class="mb-8 flex items-center md:hidden">
                      <!-- Hamburger button -->
                      <DocsMenuButton :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
                      <!-- Breadcrumbs -->
                      <div class="ml-3 flex min-w-0 items-center whitespace-nowrap text-sm">
                        <span class="text-gray-600 dark:text-gray-400">Documentation</span>
                        <svg
                          class="mx-2 shrink-0 fill-gray-400 dark:fill-gray-500"
                          width="8"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                        </svg>
                        <span class="truncate font-medium text-gray-800 dark:text-gray-200">Fundamentals</span>
                      </div>
                    </div>
                    <slot />

                    <!-- Page navigation -->
                    <DocsPageNavigation :prevArticle="prevArticle" :nextArticle="nextArticle" />

                    <!-- Content footer -->
                    <DocsPageFooter />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
