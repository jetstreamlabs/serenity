@seoTitle(__('Welcome'))

<div class="relative min-h-screen bg-center bg-gray-50 sm:flex sm:justify-center sm:items-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
  <div class="absolute inset-0 min-h-screen bg-bottom bg-no-repeat bg-gray-50 bottom-10 dark:bg-gray-900 beams">
    <div class="absolute min-h-screen inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" style="mask-image:linear-gradient(to bottom, transparent, black);-webkit-mask-image:linear-gradient(to bottom, transparent, black)"></div>
  </div>

  @if($canLogin)
  <div class="flex items-center p-6 text-right sm:fixed sm:top-0 sm:right-0">
    @auth
    <Link href="{{ route('dashboard') }}" class="text-gray-600 font-base hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none">Dashboard</Link>
    @else
    <Link href="{{ route('login') }}" class="text-gray-600 font-base hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none">Log in</Link>

    @if($canRegister)
    <Link href="{{ route('register') }}" class="ml-4 items-center text-base font-medium justify-center bg-orange text-white border-orange hover:bg-transparent hover:text-orange-600  dark:bg-white dark:hover:bg-transparent dark:border-white dark:text-gray-700 dark:hover:text-white border-2 duration-200 focus:outline-none inline-flex focus-visible:outline-white focus-visible:ring-white  lg:w-auto px-4 py-1.5 rounded-full text-center w-full">{{ __('Register') }}</Link>




    @endif
    @endauth
    <Switcher class="ml-3" />
  </div>
  @endif

  <div class="z-50 p-6 mx-auto max-w-7xl lg:p-8">
    <div class="flex justify-center">
      <x-application-logo class="h-64 fill-gray-700 dark:fill-gray-100" />
    </div>

    <div class="flex items-center justify-center px-0 mt-16">
      <div class="ml-4 text-base text-center text-gray-500 dark:text-gray-400">
        Serenity v{{ $serenityVersion }} (PHP v{{ $phpVersion }})
      </div>
    </div>
  </div>
</div>