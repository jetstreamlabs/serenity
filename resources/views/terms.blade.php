@seoTitle(__('Terms of Service'))

<div class="font-sans antialiased text-gray-900">
    <div class="pt-4 bg-gray-100 dark:bg-gray-900">
        <div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0">
            <div>
                <x-authentication-card-logo class="h-24" />
            </div>

            <x-splade-content class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl dark:bg-gray-800 sm:rounded-lg dark:prose-invert" :html="$terms" />
        </div>
    </div>
</div>