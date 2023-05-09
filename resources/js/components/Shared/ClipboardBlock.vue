<script setup>
const { isSupported, copy, copied } = useClipboard()
//const permissionRead = usePermission('clipboard-read')
//const permissionWrite = usePermission('clipboard-write')

const props = defineProps({
  copytext: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div
    v-if="isSupported"
    class="flex items-center justify-between rounded bg-gray-100 px-4 py-2 font-mono text-sm text-gray-500">
    <span>{{ copytext }}</span>
    <IconOutlineClipboard
      v-if="!copied"
      @click.native="copy(copytext)"
      class="cursor-pointer text-gray-500/40 hover:text-gray-500/100" />
    <IconOutlineClipboardCheck v-else />
  </div>
</template>
