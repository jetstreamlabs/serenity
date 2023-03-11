<script setup>
const props = defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  serenityVersion: String,
  phpVersion: String,
})

const dayjs = useDayjs()
const copyright = dayjs().format('YYYY')
</script>

<template>
  <Head title="Welcome" />

  <div
    id="home"
    class="beams relative flex min-h-screen justify-center bg-gray-200 dark:bg-gray-900 dark:text-gray-100 sm:items-center sm:pt-0">
    <div v-if="canLogin" class="fixed top-0 right-0 hidden px-6 py-4 sm:block">
      <Link
        v-if="$page.props.user"
        :href="route('dashboard')"
        class="font-base text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
        {{ __('Dashboard') }}
      </Link>

      <template v-else>
        <Link
          :href="route('login')"
          class="font-base text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
          {{ __('Login') }}
        </Link>
        <Link
          :href="route('register')"
          class="ml-4 inline-flex w-full items-center justify-center rounded-full border-2 border-orange bg-orange px-4 py-1.5 text-center text-base font-medium text-white duration-200 hover:bg-transparent hover:text-orange-600 focus:outline-none focus-visible:outline-white focus-visible:ring-white dark:border-white dark:bg-white dark:text-gray-700 dark:hover:bg-transparent dark:hover:text-white lg:w-auto">
          {{ __('Register') }}
        </Link>
      </template>
      <ThemeSwitcher class="ml-3" />
    </div>

    <div class="z-50 mx-auto max-w-7xl p-6 lg:p-8">
      <div class="flex justify-center">
        <ApplicationLogo class="h-64 fill-gray-700 dark:fill-gray-100" />
      </div>

      <div class="mt-16 flex items-center justify-center px-0">
        <div class="ml-4 text-center text-base text-gray-500 dark:text-gray-400">
          Serenity v{{ serenityVersion }} (PHP v{{ phpVersion }})
        </div>
      </div>
    </div>
  </div>
</template>
