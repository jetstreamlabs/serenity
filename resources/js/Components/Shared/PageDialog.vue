<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { useModal } from 'momentum-modal'

const { show, close, redirect } = useModal()
</script>

<template>
  <TransitionRoot appear as="template" :show="show">
    <Dialog as="div" class="relative z-10" @close="close">
      <TransitionChild
        @after-leave="redirect"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500/75" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex justify-center p-4 text-center max-h-fit">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                <slot name="title" />
              </DialogTitle>
              <slot name="content" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
