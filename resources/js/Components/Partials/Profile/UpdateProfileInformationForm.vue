<script setup>
const props = defineProps(['user'])
const photo = ref(null)

const form = useForm({
  _method: 'PUT',
  username: props.user.username,
  first: props.user.first,
  last: props.user.last,
  email: props.user.email,
  photo: null,
})

const photoPreview = ref(null)

const updateProfileInformation = () => {
  if (photo.value) {
    form.photo = photo.value.files[0]
  }

  form.post(useRoutes('user-profile-information.update'), {
    errorBag: 'updateProfileInformation',
    preserveScroll: true,
    onSuccess: () => clearPhotoFileInput(),
  })
}

const selectNewPhoto = () => {
  photo.value.click()
}

const updatePhotoPreview = () => {
  const image = photo.value.files[0]

  if (!image) return

  const reader = new FileReader()

  reader.onload = (e) => {
    photoPreview.value = e.target.result
  }

  reader.readAsDataURL(image)
}

const deletePhoto = () => {
  Inertia.delete(useRoutes('current-user-photo.destroy'), {
    preserveScroll: true,
    onSuccess: () => {
      photoPreview.value = null
      clearPhotoFileInput()
    },
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
      <!-- Profile Photo -->
      <div class="col-span-6 sm:col-span-4" v-if="$page.props.jetstream.managesProfilePhotos">
        <!-- Profile Photo File Input -->
        <input type="file" class="hidden" ref="photo" @change="updatePhotoPreview" />

        <Label for="photo" :value="__('Photo')" />

        <!-- Current Profile Photo -->
        <div class="mt-2" v-show="!photoPreview">
          <img :src="props.user.profile_photo_url" :alt="user.name" class="h-20 w-20 rounded-full object-cover" />
        </div>

        <!-- New Profile Photo Preview -->
        <div class="mt-2" v-show="photoPreview">
          <span
            class="block h-20 w-20 rounded-full bg-cover bg-center bg-no-repeat"
            :style="'background-image: url(\'' + photoPreview + '\');'">
          </span>
        </div>

        <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
          {{ __('Select A New Photo') }}
        </SecondaryButton>

        <SecondaryButton type="button" class="mt-2" @click.prevent="deletePhoto" v-if="props.user.profile_photo_path">
          {{ __('Remove Photo') }}
        </SecondaryButton>

        <InputError :message="form.errors.photo" class="mt-2" />
      </div>

      <!-- Username -->
      <div class="col-span-6 sm:col-span-4">
        <Label for="username" :value="__('Username')" />
        <Input
          id="username"
          type="text"
          class="mt-1 block w-full"
          v-model="form.username"
          static
          autocomplete="username" />
        <InputError :message="form.errors.username" class="mt-2" />
      </div>

      <!-- First Name -->
      <div class="col-span-6 sm:col-span-4">
        <Label for="first" :value="__('First Name')" req />
        <Input id="first" type="text" class="mt-1 block w-full" v-model="form.first" autocomplete="first" />
        <InputError :message="form.errors.first" class="mt-2" />
      </div>

      <!-- Last Name -->
      <div class="col-span-6 sm:col-span-4">
        <Label for="last" :value="__('Last Name')" req />
        <Input id="last" type="text" class="mt-1 block w-full" v-model="form.last" autocomplete="last" />
        <InputError :message="form.errors.last" class="mt-2" />
      </div>

      <!-- Email -->
      <div class="col-span-6 sm:col-span-4">
        <Label for="email" :value="__('Email')" req />
        <Input id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
        <InputError :message="form.errors.email" class="mt-2" />
      </div>
    </template>

    <template #actions>
      <ActionMessage :on="form.recentlySuccessful" class="mr-3"> {{ __('Success') }}</ActionMessage>

      <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ __('Save') }}
      </Button>
    </template>
  </FormSection>
</template>
