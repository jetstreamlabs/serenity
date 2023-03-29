<script setup>
const videoModalOpen = ref(false)
</script>
<template>
  <div>
    <header class="mb-6">
      <h1 class="h2 mb-4 text-gray-800 dark:text-gray-200">Marketing API Quick Start</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">
        This guide will give you everything you need to start using the Docs Marketing API to manage audiences, control
        automation workflows, sync email activity with your database, and more.
      </p>
    </header>
    <div class="space-y-6 text-gray-600 dark:text-gray-400">
      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="at-a-glance" data-scrollspy-target class="h4 scroll-mt-24 text-gray-800 dark:text-gray-200">
            At a glance
          </h2>
          <p>
            We'll walk through generating your API key, installing the client library for your preferred language, and
            making your first API call—a simple request to the Ping endpoint.
          </p>
        </div>
      </div>

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="generate-api" data-scrollspy-target class="h4 scroll-mt-24 text-gray-800 dark:text-gray-200">
            Generate your API key
          </h2>
          <p>
            The simplest way to authenticate a request to the Marketing API is using an
            <a class="font-medium text-blue-600 hover:underline" href="#0">API key</a>.
          </p>
          <ul class="list-inside space-y-2 pl-4">
            <li>
              <span class="pr-2 text-gray-400 dark:text-gray-500">↳</span> Navigate to the API Keys section of your Docs
              account.
            </li>
            <li>
              <span class="pr-2 text-gray-400 dark:text-gray-500">↳</span> If you already have an API key listed to use
              for your application, simply copy it.
            </li>
          </ul>
          <p>Let's see an example:</p>

          <!-- Image vith modal video -->
          <div>
            <div class="relative my-2 inline-flex items-center justify-center">
              <img
                class="rounded"
                src="/storage/docs/content-image-01.jpg"
                width="680"
                height="382"
                alt="Content image 01" />
              <button class="group absolute" @click.stop="videoModalOpen = true" aria-controls="video-modal">
                <svg
                  class="group h-16 w-16 fill-current sm:h-20 sm:w-20"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle
                    class="text-white opacity-80 transition duration-150 ease-in-out group-hover:opacity-100"
                    cx="44"
                    cy="44"
                    r="44" />
                  <path
                    class="text-blue-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                </svg>
              </button>
            </div>
            <DocsModal
              id="video-modal"
              ariaLabel="modal-headline"
              :modalOpen="videoModalOpen"
              @close-modal="videoModalOpen = false">
              <iframe
                class="aspect-video w-full"
                src="https://player.vimeo.com/video/174002812"
                title="Video"
                allowFullScreen></iframe>
            </DocsModal>
          </div>

          <p>
            If you're creating integrations that require access to Mailchimp on behalf of other Docs users, you'll want
            to
            <a class="font-medium text-blue-600 hover:underline" href="#0">set up authentication via Oauth 2</a>
            instead.
          </p>
        </div>
      </div>

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="install" data-scrollspy-target class="h4 scroll-mt-24 text-gray-800 dark:text-gray-200">
            Install the client library for your language
          </h2>
          <p>
            You can make calls to the Marketing API with whichever method you usually use to make HTTP requests, but
            Docs offers client libraries that make interacting with the API even simpler.
          </p>
          <p>To install the client library for your preferred language:</p>
          <div class="my-2">
            <img
              class="rounded"
              src="/storage/docs/content-image-02.jpg"
              width="680"
              height="382"
              alt="Content image 02" />
          </div>
        </div>
      </div>

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="api-call" data-scrollspy-target class="h4 scroll-mt-24 text-gray-800 dark:text-gray-200">
            Make your first API call
          </h2>
          <p>
            To test that you have everything set up correctly, we'll make a simple request to the Ping endpoint. Hitting
            this endpoint acts as a health check on the Docs API service; it won't affect your account in any way.
          </p>
          <p>
            To find the value for the server parameter used in
            <span class="font-medium text-gray-800 underline dark:text-gray-200">docs.setConfig</span>, log into your
            Docs account and look at the URL in your browser. You'll see something like
            <span class="font-medium text-gray-800 underline dark:text-gray-200">https://us19.admin.docs.com/</span>;
            the us19 part is the server prefix. Note that your specific value may be different.
          </p>
          <pre class="overflow-x-auto rounded border border-gray-700 bg-gray-800 p-4 text-sm text-gray-400">
<code class="font-pt-mono"># install jq: https://docs.github.io/jq/download/

<span class="text-teal-500">dc</span><span class="text-rose-400">=</span><span class="text-purple-500">"YOUR_DC"</span>

<span class="text-teal-500">apikey</span><span class="text-rose-400">=</span><span class="text-purple-500">"YOUR_API_KEY"</span>

<span class="text-teal-500">curl</span> -sS \

  <span class="text-purple-500">"https://</span><span class="text-teal-500">$&#123;dc&#125;</span><span class="text-purple-500">.api.docs.com/3.0/ping"</span> \

  --user <span class="text-purple-500">"anystring:</span><span class="text-teal-500">$&#123;apikey&#125;</span><span class="text-purple-500">"</span> <span class="text-rose-400">|</span> jq -r</code>
</pre>
          <p>
            If everything was set up correctly and the request to
            <span class="font-medium text-gray-800 underline dark:text-gray-200">ping</span> was a success, the response
            should look like the following:
          </p>
        </div>
      </div>

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="config-status" data-scrollspy-target class="h4 scroll-mt-24 text-gray-800 dark:text-gray-200">
            Configuration status
          </h2>
          <p>
            There are a number of configuration status which are explained in detail in this article. Below is an index
            of all configuration status:
          </p>
          <!-- Table -->
          <div class="overflow-x-auto">
            <table class="my-2 w-full table-auto border-b border-gray-200 dark:border-gray-800">
              <!-- Table header -->
              <thead>
                <tr class="text-left text-gray-800 dark:text-gray-200">
                  <th class="px-2 py-3 font-medium first:pl-0 last:pr-0">Status</th>
                  <th class="px-2 py-3 font-medium first:pl-0 last:pr-0">Description</th>
                </tr>
              </thead>
              <!-- Table body -->
              <tbody>
                <!-- Row -->
                <tr class="border-t border-gray-200 dark:border-gray-800">
                  <td class="px-2 py-3 first:pl-0 last:pr-0">
                    <div
                      class="inline-flex rounded bg-teal-500 bg-opacity-25 px-1 text-center text-sm font-medium text-teal-600">
                      Subscribed
                    </div>
                  </td>
                  <td class="px-2 py-3 first:pl-0 last:pr-0">
                    The contact is subscribed to the list and can receive campaigns.
                  </td>
                </tr>
                <!-- Row -->
                <tr class="border-t border-gray-200 dark:border-gray-800">
                  <td class="px-2 py-3 first:pl-0 last:pr-0">
                    <div
                      class="inline-flex rounded bg-rose-500 bg-opacity-25 px-1 text-center text-sm font-medium text-rose-500">
                      Unsubscribed
                    </div>
                  </td>
                  <td class="px-2 py-3 first:pl-0 last:pr-0">The contact is no longer subscribed to the list.</td>
                </tr>
                <!-- Row -->
                <tr class="border-t border-gray-200 dark:border-gray-800">
                  <td class="px-2 py-3 first:pl-0 last:pr-0">
                    <div
                      class="inline-flex rounded bg-purple-500 bg-opacity-25 px-1 text-center text-sm font-medium text-purple-600">
                      Cleaned
                    </div>
                  </td>
                  <td class="px-2 py-3 first:pl-0 last:pr-0">The contact bounced and was removed from the list.</td>
                </tr>
                <!-- Row -->
                <tr class="border-t border-gray-200 dark:border-gray-800">
                  <td class="px-2 py-3 first:pl-0 last:pr-0">
                    <div
                      class="inline-flex rounded bg-blue-500 bg-opacity-25 px-1 text-center text-sm font-medium text-blue-500">
                      Pending
                    </div>
                  </td>
                  <td class="px-2 py-3 first:pl-0 last:pr-0">The contact has not yet confirmed their subscription.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            To test that you have everything set up correctly, we'll make a simple request to the Ping endpoint. Hitting
            this endpoint acts as a health check on the Docs API service; it won't affect your account in any way.
          </p>
          <p>
            HTTP requests are the backbone of the internet. Without them, we wouldn't be able to communicate with web
            servers and load the pages we see in our browser.
          </p>
          <p>
            This library is available on most Unix-like systems, and can be used to make HTTP requests to any HTTP
            server.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
