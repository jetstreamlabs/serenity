<template>
  <Head title="Welcome" />

  <div
    class="beams relative flex min-h-screen flex-col justify-start bg-gray-200 dark:bg-gray-900 dark:text-gray-100 sm:items-center sm:pt-0">
    <GuestHeader />

    <div class="z-50 mx-auto mt-12 max-w-7xl p-6 lg:p-8">
      <div class="flex justify-center">
        <LandingLogo
          class="h-32 fill-gray-700 dark:fill-gray-100 sm:h-40 md:h-52 lg:h-64 xl:h-80" />
      </div>
    </div>

    <GuestFooter />
    <Notification />
  </div>
</template>
