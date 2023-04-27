<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <NotifySuccess v-if="type == 'success'" show @close="dismiss" />
      <NotifyError v-else-if="type == 'error'" show @close="dismiss" />
      <NotifyWarning v-else-if="type == 'warning'" show @close="dismiss" />
      <NotifyInfo v-else-if="type == 'info'" show @close="dismiss" />
      <NotifyStatus v-else-if="type == 'status'" show @close="dismiss" />
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
      messageLength: 0
    }
  },
  computed: {
    flashMessages() {
      return this.$page.props.flash
    },
    showing() {
      return this.show
    }
  },
  watch: {
    flashMessages: {
      handler(flashes) {
        for (let [key, value] of Object.entries(flashes)) {
          if (value !== null) {
            this.type = key
            this.show = true

            if (this.isObject(value)) {
              this.message = value.message
              this.messageLength = value.message.length
            } else {
              this.message = value
              this.messageLength = value.length
            }
          }
        }
      },
      deep: true,
      immediate: true
    },
    showing: {
      handler() {
        if (this.show) {
          let time = Math.min(
            Math.max(this.messageLength * 50, this.minimum),
            this.maximum
          )

          setTimeout(() => {
            this.dismiss()
          }, time)
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    dismiss() {
      this.show = false
      this.messageLength = 0
      this.type = ''
      this.message = ''
    },
    isObject(obj) {
      return obj === Object(obj)
    }
  }
}
</script>
