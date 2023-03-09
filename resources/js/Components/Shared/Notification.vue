<template>
  <div
    aria-live="assertive"
    class="fixed inset-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6">
    <div class="flex flex-col items-center w-full space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <Transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        v-if="show">
        <div
          class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
          <NotifySuccess v-if="type == 'success'" show @close="dismiss">
            {{ $page.props.jetstream.flash.success }}
          </NotifySuccess>
          <NotifyError v-else-if="type == 'error'" show @close="dismiss">
            {{ $page.props.jetstream.flash.error }}
          </NotifyError>
          <NotifyWarning v-else-if="type == 'warning'" show @close="dismiss">
            {{ $page.props.jetstream.flash.warning }}
          </NotifyWarning>
          <NotifyInfo v-else-if="type == 'info'" show @close="dismiss">
            {{ $page.props.jetstream.flash.info }}
          </NotifyInfo>
          <NotifyStatus v-else-if="type == 'status'" show @close="dismiss">
            {{ $page.props.jetstream.flash.status }}
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
      return this.$page.props.jetstream.flash
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
