<template>
  <MainLayout :title="__('Dashboard')">
    <template #header>
      <h2 class="text-xl font-semibold leading-tight">{{ __('Dashboard') }}</h2>
    </template>

    <div class="py-12">
      <div class="wrapper">
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">
          <Welcome />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
