<script setup>
const props = defineProps({
  canRegister: Boolean,
  serenityVersion: String,
  phpVersion: String,
})

const canLogin = computed(() => usePage().props.canLogin)

const copyright = computed(() => useDayjs().format('YYYY'))
</script>

<template>
  <Head title="Welcome" />

  <div
    class="beams relative flex min-h-screen flex-col justify-start bg-gray-200 dark:bg-gray-900 dark:text-gray-100 sm:items-center sm:pt-0">
    <GuestHeader :can="canLogin" />

    <div class="z-50 mx-auto mt-12 max-w-7xl p-6 lg:p-8">
      <div class="flex justify-center">
        <ApplicationLogo class="h-32 fill-gray-700 dark:fill-gray-100 sm:h-40 md:h-52 lg:h-64 xl:h-80" />
      </div>

      <div class="mt-16 flex flex-col items-center space-y-2 px-0 text-sm lg:flex-row lg:justify-between lg:space-y-0">
        <div class="text-gray-500 dark:text-gray-400">&copy; {{ __('Jetstream Labs, LLC.') }} {{ copyright }}</div>
        <div class="text-gray-500 dark:text-gray-400">Serenity v{{ serenityVersion }} (PHP v{{ phpVersion }})</div>
      </div>
    </div>
  </div>
</template>
