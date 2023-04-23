<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <Transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-from-class="trangray-y-2 opacity-0 sm:trangray-y-0 sm:trangray-x-2"
        enter-to-class="trangray-y-0 opacity-100 sm:trangray-x-0"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        v-if="show">
        <div
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <NotifySuccess v-if="type == 'success'" show @close="dismiss">
            {{ $page.props.serenity.flash.success }}
          </NotifySuccess>
          <NotifyError v-else-if="type == 'error'" show @close="dismiss">
            {{ $page.props.serenity.flash.error }}
          </NotifyError>
          <NotifyWarning v-else-if="type == 'warning'" show @close="dismiss">
            {{ $page.props.serenity.flash.warning }}
          </NotifyWarning>
          <NotifyInfo v-else-if="type == 'info'" show @close="dismiss">
            {{ $page.props.serenity.flash.info }}
          </NotifyInfo>
          <NotifyStatus v-else-if="type == 'status'" show @close="dismiss">
            {{ $page.props.serenity.flash.status }}
          </NotifyStatus>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minimum: 4000,
      maximum: 10000,
      show: false,
      type: '',
      message: '',
      messageLength: 0,
    }
  },
  computed: {
    flashMessages() {
      return this.$page.props.serenity.flash
    },
    showing() {
      return this.show
    },
  },
  watch: {
    flashMessages: {
      handler(flashes) {
        for (let [key, value] of Object.entries(flashes)) {
          if (value !== null) {
            this.type = key
            this.message = value
            this.messageLength = value.length
            this.show = true
          }
        }
      },
      deep: true,
      immediate: true,
    },
    showing: {
      handler() {
        if (this.show) {
          let time = Math.min(Math.max(this.messageLength * 50, this.minimum), this.maximum)

          setTimeout(() => {
            this.dismiss()
          }, time)
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    dismiss() {
      this.show = false
      this.messageLength = 0
      this.type = ''
      this.message = ''
    },
  },
}
</script>
