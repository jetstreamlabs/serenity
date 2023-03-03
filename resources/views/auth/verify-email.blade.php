@seoTitle(__('Email Verification'))

<x-authentication-card>
    <x-slot:logo>
        <x-authentication-card-logo class="h-24" />
    </x-slot>

    <x-splade-form :action="route('verification.send')" stay prevent-scroll>
        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            {{ __('Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
        </div>

        <div v-if="form.wasSuccessful" class="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
            {{ __('A new verification link has been sent to the email address you provided in your profile settings.') }}
        </div>

        <div class="flex items-center justify-between mt-4">
            <x-splade-submit :label="__('Resend Verification Email')" />

            <div>
                <Link
                    href="{{ route('profile.show') }}"
                    class="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >{{ __('Edit Profile') }}</Link>

                <Link
                    href="{{ route('logout') }}"
                    method="post"
                    as="button"
                    class="ml-2 text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >{{ __('Log Out') }}</Link>
            </div>
        </div>
    </x-splade-form>
</x-authentication-card>
