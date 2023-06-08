<script setup>
import IconHome from '~icons/heroicons-outline/home'
import IconUsers from '~icons/heroicons-outline/users'
import IconBriefcase from '~icons/heroicons-outline/briefcase'
import IconKey from '~icons/heroicons-outline/key'

const navigation = [
  {
    name: 'Dashboard',
    href: useRoutes('admin.dashboard'),
    icon: IconHome,
    current: useRoutes().current('admin.dashboard')
  },
  {
    name: 'Users',
    href: useRoutes('admin.users'),
    icon: IconUsers,
    current: useRoutes().current('admin.users')
  },
  { name: 'Roles', href: '#', icon: IconBriefcase, current: false },
  { name: 'Permissions', href: '#', icon: IconKey, current: false }
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' }
]

const sidebarOpen = ref(false)
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <IconOutlineXMark
                      class="h-6 w-6 text-white"
                      aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 dark:bg-gray-900">
                <div class="flex h-16 shrink-0 items-center">
                  <ApplicationMark class="h-12 w-12" />
                  <h2
                    class="ml-4 text-2xl font-medium text-gray-800 dark:text-gray-300">
                    Serenity
                  </h2>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <Link
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-blue-50/20 text-blue-500'
                                : 'text-gray-700 hover:bg-orange-50/20 hover:text-orange-500 dark:text-gray-500 dark:hover:text-orange-500',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                            ]">
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-blue-500'
                                  : 'text-gray-400 group-hover:text-orange-500 dark:text-gray-500',
                                'h-6 w-6 shrink-0'
                              ]"
                              aria-hidden="true" />
                            {{ item.name }}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <Link
                        :href="route('admin.playground')"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                        <IconOutlineCog6Tooth
                          class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-500"
                          aria-hidden="true" />
                        {{ __('Playground') }}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4 dark:border-gray-950 dark:bg-gray-900">
        <div class="flex h-16 shrink-0 items-center">
          <ApplicationMark class="h-10 w-10" />
          <h2
            class="ml-4 text-2xl font-medium text-gray-800 dark:text-gray-300">
            Serenity
          </h2>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <Link
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-blue-50/20 text-blue-500'
                        : 'text-gray-700 hover:bg-orange-50/20 hover:text-orange-500 dark:text-gray-500 dark:hover:text-orange-500',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
                    ]">
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-blue-500'
                          : 'text-gray-400 group-hover:text-orange-500 dark:text-gray-500',
                        'h-5 w-5 shrink-0'
                      ]"
                      aria-hidden="true" />
                    {{ item.name }}
                  </Link>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <Link
                :href="route('admin.playground')"
                :class="[
                  route().current('admin.playground')
                    ? 'bg-blue-50/20 text-blue-500'
                    : 'text-gray-700 hover:bg-orange-50/20 hover:text-orange-500 dark:text-gray-500 dark:hover:text-orange-500',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
                ]">
                <IconOutlineCog6Tooth
                  :class="[
                    route().current('admin.playground')
                      ? 'text-blue-500'
                      : 'text-gray-400 group-hover:text-orange-500 dark:text-gray-500',
                    'h-5 w-5 shrink-0'
                  ]"
                  aria-hidden="true" />
                {{ __('Playground') }}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="beams h-screen bg-white dark:bg-gray-800 lg:pl-64">
      <div class="sticky top-0 z-40 shadow lg:w-full">
        <div
          class="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-900 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
          <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-700 dark:text-gray-400 lg:hidden"
            @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <IconOutlineBars3 class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Separator -->
          <div
            class="h-6 w-px bg-gray-200 dark:bg-gray-500 lg:hidden"
            aria-hidden="true" />

          <div class="flex flex-1 gap-x-4 self-stretch px-8 lg:gap-x-6">
            <form class="relative flex flex-1" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <IconSolidMagnifyingGlass
                class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 dark:text-gray-500"
                aria-hidden="true" />
              <input
                id="search-field"
                class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-500 sm:text-sm"
                placeholder="Search..."
                type="search"
                name="search" />
            </form>
            <div class="flex items-center gap-x-4 lg:gap-x-4">
              <button
                type="button"
                class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                <span class="sr-only">View notifications</span>
                <IconOutlineBell class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Separator -->
              <div
                class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-gray-500"
                aria-hidden="true" />

              <!-- Profile dropdown -->
              <AccountManagerMenu class="ml-0" />

              <ThemeSwitcher class="-ml-2" />
            </div>
          </div>
        </div>
        <header
          class="hidden border-gray-100 bg-white text-gray-800 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:block">
          <div class="mx-auto w-full px-4 py-6 lg:px-8">
            <Breadcrumbs />
          </div>
        </header>
      </div>

      <main class="py-10 dark:text-gray-400">
        <slot />
      </main>
    </div>
  </div>
</template>
