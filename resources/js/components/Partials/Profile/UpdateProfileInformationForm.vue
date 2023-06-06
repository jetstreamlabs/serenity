<script setup>
const props = defineProps(['user'])
const photo = ref(null)

const form = useForm({
  _method: 'PUT',
  username: props.user.username,
  fname: props.user.fname,
  lname: props.user.lname,
  email: props.user.email,
  photo: null
})

const photoPreview = ref(null)

const updateProfileInformation = () => {
  if (photo.value) {
    form.photo = photo.value.files[0]
  }

  form.post(useRoutes('user-profile-information.update'), {
    errorBag: 'updateProfileInformation',
    preserveScroll: true,
    onSuccess: () => clearPhotoFileInput()
  })
}

const selectNewPhoto = () => {
  photo.value.click()
}

const updatePhotoPreview = () => {
  const image = photo.value.files[0]

  if (!image) return

  const reader = new FileReader()

  reader.onload = e => {
    photoPreview.value = e.target.result
  }

  reader.readAsDataURL(image)
}

const deletePhoto = () => {
  router.delete(useRoutes('current-user-photo.destroy'), {
    preserveScroll: true,
    onSuccess: () => {
      photoPreview.value = null
      clearPhotoFileInput()
    }
  })
}

const clearPhotoFileInput = () => {
  if (photo?.value) {
    photo.value = null
  }
}

defineExpose({ photo, photoPreview })
</script>

<template>
  <FormSection @submitted="updateProfileInformation">
    <template #title>{{ __('Profile Information') }}</template>

    <template #description>
      {{ __("Update your account's profile information and email address.") }}
    </template>

    <template #form>
      <div
        class="col-span-6 sm:col-span-4"
        v-if="$page.props.serenity.managesProfilePhotos">
        <input
          type="file"
          class="hidden"
          ref="photo"
          @change="updatePhotoPreview" />

        <Label for="photo" :value="__('Photo')" />

        <div class="mt-2" v-show="!photoPreview">
          <img
            :src="props.user.profile_photo_url"
            :alt="user.name"
            class="h-20 w-20 rounded-full object-cover" />
        </div>

        <div class="mt-2" v-show="photoPreview">
          <span
            class="block h-20 w-20 rounded-full bg-cover bg-center bg-no-repeat"
            :style="'background-image: url(\'' + photoPreview + '\');'">
          </span>
        </div>

        <SecondaryButton
          class="mr-2 mt-2"
          type="button"
          @click.prevent="selectNewPhoto">
          {{ __('Select A New Photo') }}
        </SecondaryButton>

        <SecondaryButton
          type="button"
          class="mt-2"
          @click.prevent="deletePhoto"
          v-if="props.user.profile_photo_path">
          {{ __('Remove Photo') }}
        </SecondaryButton>

        <InputError :message="form.errors.photo" class="mt-2" />
      </div>

      <div class="col-span-6 sm:col-span-4">
        <Label for="fname" :value="__('First Name')" />
        <Input
          id="fname"
          type="text"
          class="mt-1 block w-full"
          v-model="form.fname"
          autocomplete="fname" />
        <InputError :message="form.errors.fname" class="mt-2" />
      </div>

      <div class="col-span-6 sm:col-span-4">
        <Label for="lname" :value="__('Last Name')" />
        <Input
          id="lname"
          type="text"
          class="mt-1 block w-full"
          v-model="form.lname"
          autocomplete="lname" />
        <InputError :message="form.errors.lname" class="mt-2" />
      </div>

      <div class="col-span-6 sm:col-span-4">
        <Label for="email" :value="__('Email')" req />
        <Input
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email" />
        <InputError :message="form.errors.email" class="mt-2" />
      </div>
    </template>

    <template #actions>
      <ActionMessage :on="form.recentlySuccessful" class="mr-3">
        {{ __('Success') }}</ActionMessage
      >

      <Button
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing">
        {{ __('Save') }}
      </Button>
    </template>
  </FormSection>
</template>
