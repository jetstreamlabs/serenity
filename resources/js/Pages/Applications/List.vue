<script setup>
const props = defineProps(['apps'])
const displayingAppTokens = ref(false)
const appBeingDeleted = ref(null)

const _ = inject('_')

const createApplicationForm = useForm({
  name: '',
})

const deleteAppForm = useForm()

const createNewApplication = () => {
  createApplicationForm.post(useRoutes('applications.store'), {
    preserveScroll: true,
    onSuccess: () => {
      displayingAppTokens.value = true
      createApplicationForm.reset()
    },
  })
}

const confirmAppDeletion = (app) => {
  appBeingDeleted.value = app
}

const deleteApplication = () => {
  deleteAppForm.delete(useRoutes('applications.delete', { id: appBeingDeleted.value.id }), {
    preserveScroll: true,
    preserveState: true,
    onSuccess: () => {
      appBeingDeleted.value = null
    },
  })
}

const clearAppFormName = () => {
  createApplicationForm.name = ''
}

const randomName = computed(() => {
  let name = useNamer()
  createApplicationForm.name = name
  return name
})
</script>

<template>
  <MainLayout :title="__('Applications')">
    <TwoColumnContentLeft>
      <template #content>
        <section aria-labelledby="applications-table-title">
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h2 id="applications-table-title" class="text-lg font-medium leading-6 text-gray-900">
                {{ __('Applications') }}
              </h2>
              <p class="max-w-2xl mt-1 text-sm text-gray-500">
                {{ __('Some text here to explain applications and the content of the page.') }}
              </p>
            </div>
            <div class="px-4 py-5 border-t border-gray-200 sm:px-6">
              <Table :resource="apps" preventScroll="table-top">
                <template #cell(key)="{ item: app }">
                  {{
                    _.truncate(app.key, {
                      length: 28,
                      omission: ' ...',
                    })
                  }}
                </template>
                <template #cell(actions)="{ item: app }">
                  <TableActionButtons>
                    <TableButton
                      link
                      state
                      :uri="route('applications.edit', { id: app.id })"
                      color="info"
                      class="group-left">
                      <IconOutlinePencilAlt class="w-4 h-4 text-white" />
                    </TableButton>
                    <TableButton color="error" class="group-right" @click.native="confirmAppDeletion(app)">
                      <IconOutlineTrash class="w-4 h-4 text-white" />
                    </TableButton>
                  </TableActionButtons>
                </template>
              </Table>
            </div>
          </div>
        </section>
      </template>
      <template #right-sidebar>
        <FormCard @submitted="createNewApplication">
          <template #title>Create Application</template>
          <template #form>
            <div class="w-full">
              <Label for="name" :value="__('Name')" />
              <Input
                id="name"
                type="text"
                class="block w-full mt-1"
                v-model="createApplicationForm.name"
                :placeholder="randomName"
                @focus="clearAppFormName" />
              <InputError :message="createApplicationForm.errors.name" class="mt-2" />
            </div>
          </template>
          <template #actions>
            <ActionMessage :on="createApplicationForm.recentlySuccessful" class="mr-3">
              {{ __('Created') }}
            </ActionMessage>

            <Button
              :class="{ 'opacity-25': createApplicationForm.processing }"
              :disabled="createApplicationForm.processing">
              {{ __('Create') }}
            </Button>
          </template>
        </FormCard>
      </template>
    </TwoColumnContentLeft>
    <DialogModal :show="displayingAppTokens" @close="displayingAppTokens = false">
      <template #title>{{ __('Application Credentials') }}</template>
      <template #content>
        <p>
          {{
            __(
              "Please copy your new Application Credentials and store them in a secure place, you'll need them later to connect to the Jetwire Cloud."
            )
          }}
        </p>

        <p class="mt-4 font-medium text-red-500">
          {{ __("For your security, your app-secret won't be shown again.") }}
        </p>

        <template v-if="$page.props.serenity.flash.app">
          <div class="my-4">
            <Label class="ml-1" :value="__('APP-ID:')" />
            <ClipboardBlock :copytext="$page.props.serenity.flash.app.id" />
          </div>

          <div class="my-4">
            <Label class="ml-1" :value="__('APP-KEY:')" />
            <ClipboardBlock :copytext="$page.props.serenity.flash.app.key" />
          </div>

          <div class="my-4">
            <Label class="ml-1" :value="__('APP-SECRET:')" />
            <ClipboardBlock :copytext="$page.props.serenity.flash.app.secret" />
          </div>
        </template>
      </template>
      <template #footer>
        <SecondaryButton @click="displayingAppTokens = false">
          {{ __('Close') }}
        </SecondaryButton>
      </template>
    </DialogModal>
    <!-- Delete Token Confirmation Modal -->
    <ConfirmationModal :show="appBeingDeleted" @close="appBeingDeleted = null">
      <template #title>{{ __('Delete Application') }}</template>
      <template #content>
        {{ __('Are you sure you want to delete this application? This CANNOT be undone!') }}
      </template>
      <template #footer>
        <SecondaryButton @click="appBeingDeleted = null">
          {{ __('Cancel') }}
        </SecondaryButton>
        <DangerButton
          class="ml-2"
          @click="deleteApplication"
          :class="{ 'opacity-25': deleteAppForm.processing }"
          :disabled="deleteAppForm.processing">
          {{ __('Delete') }}
        </DangerButton>
      </template>
    </ConfirmationModal>
  </MainLayout>
</template>
