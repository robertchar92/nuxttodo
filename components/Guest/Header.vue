<template>
  <div>
    <header class="bg-indigo-600">
      <nav class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div
          class="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none"
        >
          <div class="flex items-center">
            <a href="#">
              <span class="sr-only">Your Company</span>
              <img
                class="w-auto h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </a>
            <div class="hidden ml-10 space-x-8 lg:block">
              <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
                >Solutions</a
              >

              <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
                >Pricing</a
              >

              <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
                >Docs</a
              >

              <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
                >Company</a
              >
            </div>
          </div>
          <div class="ml-10 space-x-4">
            <a
              href="/g/auth/signin"
              class="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
              >Sign in</a
            >
            <a
              href="/g/auth/signup"
              class="inline-block px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
              >Sign up</a
            >
          </div>
        </div>
        <div class="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
            >Solutions</a
          >

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
            >Pricing</a
          >

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
            >Docs</a
          >

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50"
            >Company</a
          >
        </div>
      </nav>
    </header>
  </div>
</template>
