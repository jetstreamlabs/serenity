<script setup>
const props = defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  jetwireVersion: String,
})

//const { canLogin, canRegister, jetwireVersion } = toRefs(props)

const dayjs = useDayjs()
const copyright = dayjs().format('YYYY')
</script>

<template>
  <Head title="Welcome" />

  <div id="home" class="relative flex justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
    <div v-if="canLogin" class="fixed top-0 right-0 hidden px-6 py-4 sm:block">
      <Link v-if="$page.props.user" :href="route('dashboard.show')" class="text-sm text-gray-700 underline">
        {{ __('Dashboard') }}
      </Link>

      <template v-else>
        <Link :href="route('login')" class="text-sm text-gray-700 underline">{{ __('Login') }}</Link>

        <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 underline">
          {{ __('Register') }}
        </Link>
      </template>
    </div>

    <div class="max-w-6xl mx-auto md:px-6 lg:px-8">
      <div class="flex flex-col justify-center pt-8 md:justify-start md:pt-0">
        <img id="logo" src="/storage/img/splash.svg" class="w-[400px] md:w-[800px]" alt="JetWire" />
      </div>

      <div class="flex justify-center mt-28 md:items-center md:justify-between">
        <div class="text-sm text-center text-gray-500 md:text-left">&copy; {{ copyright }}. Jetstream Labs, LLC.</div>

        <div class="hidden ml-4 text-sm text-right text-gray-500 md:ml-0 md:block">
          {{ jetwireVersion }}
        </div>
      </div>
    </div>
  </div>
</template>
