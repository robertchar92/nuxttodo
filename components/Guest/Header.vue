<script setup lang="ts">
import MazBtn from "maz-ui/components/MazBtn";
const { isLoggedIn, signOut } = useAuth();

const showUserMenu = ref(false);
const showNavMenu = ref(false);

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

const closeUserMenu = () => {
  showUserMenu.value = false;
};

const toggleNavMenu = () => {
  showNavMenu.value = !showNavMenu.value;
};

const closeNavMenu = () => {
  showNavMenu.value = false;
};
</script>

<template>
  <div>
    <header class="bg-indigo-600">
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                @click="toggleNavMenu"
                v-click-outside="closeNavMenu"
              >
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
              class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
              <NuxtLink to="/" class="flex flex-shrink-0 items-center">
                <img
                  class="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  class="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </NuxtLink>

              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <NuxtLink
                    to="/g/user/ongoing"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Ongoing Task
                  </NuxtLink>

                  <NuxtLink
                    to="/g/user/complete"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Completed Task
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <div class="relative ml-3" v-if="isLoggedIn()">
                <div>
                  <button
                    type="button"
                    @click="toggleUserMenu"
                    v-click-outside="closeUserMenu"
                    class="flex rounded-full bg-gray-800 text-sm focus:outline-none"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <Icon
                      name="ph:user-circle-duotone"
                      class="rounded-full text-white hover:text-blue-100 transition-all ease-in-out duration-500"
                      size="2rem"
                    />
                  </button>
                </div>

                <TransitionSlide>
                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                    v-if="showUserMenu"
                  >
                    <a
                      href="#"
                      class="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                      >Your Profile <Icon name="carbon:user-profile" class="text-black"
                    /></a>

                    <div
                      @click="signOut"
                      class="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 cursor-pointer"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                      <Icon name="tabler:logout" class="text-black" />
                    </div>
                  </div>
                </TransitionSlide>
              </div>

              <div class="ml-3 flex justify-between space-x-4" v-else>
                <MazBtn to="/g/auth/signin" size="sm" color="white">
                  Sign In <Icon name="tabler:login" class="ml-2" />
                </MazBtn>

                <MazBtn to="/g/auth/signup" size="sm" color="primary">
                  Sign Up
                  <Icon name="material-symbols:assignment-outline-sharp" class="ml-2" />
                </MazBtn>
              </div>
            </div>
          </div>
        </div>

        <TransitionExpand>
          <div class="sm:hidden" id="mobile-menu" v-if="showNavMenu">
            <div class="space-y-1 px-2 pt-2 pb-3">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink
                to="/g/user/onoging"
                class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Ongoing Task
              </NuxtLink>

              <NuxtLink
                href="/g/user/complete"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Complete Task
              </NuxtLink>
            </div>
          </div>
        </TransitionExpand>
      </nav>
    </header>
  </div>
</template>
