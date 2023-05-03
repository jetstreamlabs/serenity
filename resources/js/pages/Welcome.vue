<script setup>
import HomeCode from '@/components/Shared/HomeCode.md'

const features = [
  {
    name: 'VITAL Stack',
    description:
      'Vue, Inertia, Tailwind, ADR and Laravel. Build a Domain Driven, lightning fast, Modern Monolith application quickly and efficiently. '
  },
  {
    name: 'Snowflake DB IDs',
    description:
      'Incrementing Ids that can be guessed by hackers are not acceptable. Snowflake provides network generated unique ID numbers at high scale with simple guarantees.'
  },
  {
    name: 'Method Namespacing',
    description:
      'Consistently namespaced actions provide guarantees of location for incoming requests and decrease the developer decision tree in class naming.'
  },
  {
    name: 'Auto Routing',
    description:
      'Sick of writing hundreds of routes for your app by hand? Us too, so we fixed that. Routes are loaded and resolved automatically removing the burden of maintaining a huge routes file.'
  },
  {
    name: 'Generators Galore',
    description:
      'Building files and classes is a breeze since everything can be built with a generator. And wait till you try the Scaffold command, build out an entire namespace with a single command.'
  },
  {
    name: 'Native Documentation',
    description:
      "Serenity ships with it's own docs for convenience, but also provides you with a built in platform. Just swap out your docs for ours and you're ready to go."
  },
  {
    name: 'Built on Octane',
    description:
      'Built on Laravel Octane, Serenity makes the monolith even faster by loading all the backend code once, making your application extremely lean and fast.'
  },
  {
    name: 'Kubernetes Ready',
    description:
      'Docker and other container technology is by far the best choice for Enterprise applications. Serenity ships with Docker and Kubernetes support baked in.'
  }
]
</script>
<template>
  <Head :title="__('Welcome')" />

  <GuestHeader />
  <div class="-mt-[65px] bg-white dark:bg-gray-800">
    <div
      class="relative isolate overflow-hidden bg-gradient-to-b from-blue-50/20">
      <div
        class="mx-auto max-w-7xl pb-12 pt-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-20 lg:pt-32">
        <div class="px-6 lg:px-0 lg:pt-4">
          <div class="mx-auto max-w-2xl pt-[90px] lg:pt-0">
            <div class="max-w-lg">
              <ApplicationLogo
                class="h-40 fill-gray-700 dark:fill-gray-100 sm:h-48" />
              <h1
                class="mt-10 text-4xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                {{ __('Build for Enterprise') }}
              </h1>
              <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
                {{
                  __(
                    'Is your application ready to move to the Enterprise level? If so, you need separation, speed and Domain Driven Design. Meet Serenity, your new coding Zen!'
                  )
                }}
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <Link
                  :href="route('docs.home')"
                  class="rounded-full bg-blue-500 px-6 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                  {{ __('Documentation') }}
                </Link>
                <a
                  href="https://github.com/jetstreamlabs/serenity"
                  class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500"
                  target="_blank">
                  {{ __('View on GitHub') }} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div
            class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 dark:bg-gray-800 dark:ring-gray-500 md:-mr-20 lg:-mr-36"
            aria-hidden="true" />
          <div class="shadow-lg md:rounded-3xl">
            <div
              class="bg-blue-500 [clip-path:inset(0)] dark:bg-blue-500/50 md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div
                class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                aria-hidden="true" />
              <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div
                    class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div
                        class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div
                          class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          createSerenityApp.js
                        </div>
                        <div
                          class="border-r border-gray-600/10 px-4 py-2 text-gray-400">
                          StoreAction.php
                        </div>
                      </div>
                    </div>
                    <div class="bg-[#222436] p-4 dark:bg-[#020617]">
                      <HomeCode />
                    </div>
                  </div>
                </div>
                <div
                  class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                  aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-800 sm:h-32" />
    </div>
  </div>
  <div class="bg-blue-50/10 dark:bg-blue-500/50">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-3xl text-center">
        <h2
          class="text-3xl font-bold leading-8 tracking-tight text-blue-800 dark:text-white sm:text-4xl">
          {{ __('Laravel') }}
          <span class="uppercase text-orange-500">{{
            __('Transformed!')
          }}</span>
        </h2>
        <p
          class="mx-auto mt-4 max-w-xl text-lg text-blue-800 dark:text-gray-200">
          {{
            __(
              'The same Laravel base framework you know and love, but re-imagined and more opinionated for building in the Enterprise.'
            )
          }}
        </p>
      </div>
      <dl
        class="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <IconOutlineCheck
              class="absolute mt-1 h-6 w-6 text-blue-500 dark:text-blue-900"
              aria-hidden="true" />
            <p
              class="ml-10 text-lg font-semibold text-blue-900 dark:text-gray-200">
              {{ feature.name }}
            </p>
          </dt>
          <dd
            class="ml-10 mt-2 line-clamp-4 text-sm text-blue-800 dark:text-gray-300">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <footer
    class="flex flex-col items-center justify-center border-t border-gray-200 bg-gray-100 px-6 py-12 text-sm dark:border-gray-900 dark:bg-gray-800 sm:flex-row sm:justify-between sm:space-y-0">
    <div class="space-x-4 text-gray-400 dark:text-gray-300">
      <Link
        :href="route('terms.show')"
        class="hover:text-gray-600 dark:hover:text-gray-100">
        {{ __('Terms of Service') }}
      </Link>
      <Link
        :href="route('policy.show')"
        class="hover:text-gray-600 dark:hover:text-gray-100">
        {{ __('Privacy Policy') }}
      </Link>
    </div>
    <div class="space-x-4 text-gray-400 dark:text-gray-300">
      <span v-html="$page.props.copyright"></span>
      <span>
        Serenity v{{ $page.props.serenityVersion }} (PHP v{{
          $page.props.phpVersion
        }})
      </span>
    </div>
  </footer>
  <Notification />
</template>
