<template>
  <MainLayout :title="__('Create Team')">
    <template #header>
      <h2 class="text-xl font-semibold leading-tight">{{ __('Create Team') }}</h2>
    </template>

    <div>
      <div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <create-team-form />
      </div>
    </div>
  </MainLayout>
</template>
