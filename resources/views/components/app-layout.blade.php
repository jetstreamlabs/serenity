<x-banner />

<div class="min-h-screen bg-gray-100 beams dark:bg-gray-900">
  
  <x-navigation />

  <!-- Page Heading -->
  @isset($header)
  <header class="relative bg-white shadow dark:bg-gray-800">
    <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {{ $header }}
    </div>
  </header>
  @endif

  <!-- Page Content -->
  <main>
    {{ $slot }}
  </main>
</div>
