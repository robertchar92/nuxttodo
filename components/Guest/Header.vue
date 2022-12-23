<script setup lang="ts">
import MazBtn from "maz-ui/components/MazBtn";
import { useAuth } from "@/stores/auth";
const auth = useAuth();

const route = await useRoute();

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
        <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                @click="toggleNavMenu"
                v-click-outside="closeNavMenu"
              >
                <svg
                  class="block w-6 h-6"
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
                  class="hidden w-6 h-6"
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
              class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
            >
              <NuxtLink to="/" class="flex items-center flex-shrink-0">
                <img
                  class="block w-auto h-8 lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  class="hidden w-auto h-8 lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </NuxtLink>

              <div class="hidden sm:ml-6 sm:block">
                <div
                  class="flex space-x-4 text-gray-300 [&>a:hover]:bg-gray-900 [&>a:hover]:text-white"
                >
                  <NuxtLink
                    to="/g/user/all-task"
                    class="px-3 py-2 text-sm font-medium rounded-md"
                    :class="
                      route.path === '/g/user/all-task'
                        ? 'bg-gray-900 text-white'
                        : ''
                    "
                  >
                    All Task
                  </NuxtLink>

                  <NuxtLink
                    to="/g/user/ongoing-task"
                    class="px-3 py-2 text-sm font-medium rounded-md"
                    :class="
                      route.path === '/g/user/ongoing-task'
                        ? 'bg-gray-900 text-white'
                        : ''
                    "
                  >
                    Ongoing Task
                  </NuxtLink>

                  <NuxtLink
                    to="/g/user/complete-task"
                    class="px-3 py-2 text-sm font-medium rounded-md"
                    :class="
                      route.path === '/g/user/complete-task'
                        ? 'bg-gray-900 text-white'
                        : ''
                    "
                  >
                    Completed Task
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div
              class="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <div class="relative ml-3" v-if="auth.isLoggedIn()">
                <div>
                  <button
                    type="button"
                    @click="toggleUserMenu"
                    v-click-outside="closeUserMenu"
                    class="flex text-sm bg-gray-800 rounded-full focus:outline-none"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <Icon
                      name="ph:user-circle-duotone"
                      class="text-white transition-all duration-500 ease-in-out rounded-full hover:text-blue-100"
                      size="2rem"
                    />
                  </button>
                </div>

                <TransitionSlide>
                  <div
                    class="absolute right-0 top-[100%] z-10 w-48 py-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                    v-if="showUserMenu"
                  >
                    <a
                      href="#"
                      class="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                      >Your Profile
                      <Icon name="carbon:user-profile" class="text-black"
                    /></a>

                    <div
                      @click="auth.signOut()"
                      class="flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-300"
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

              <div class="relative flex justify-between ml-3 space-x-4" v-else>
                <MazBtn to="/g/auth/signin" size="sm" color="white">
                  Sign In <Icon name="tabler:login" class="ml-2" />
                </MazBtn>

                <MazBtn to="/g/auth/signup" size="sm" color="primary">
                  Sign Up
                  <Icon
                    name="material-symbols:assignment-outline-sharp"
                    class="ml-2"
                  />
                </MazBtn>
              </div>
            </div>
          </div>
        </div>

        <TransitionExpand>
          <div class="sm:hidden" id="mobile-menu" v-if="showNavMenu">
            <div
              class="px-2 pt-2 pb-3 space-y-1 text-gray-300 [&>a:hover]:bg-gray-900 [&>a:hover]:text-white"
            >
              <NuxtLink
                to="/g/user/all-task"
                class="block px-3 py-2 text-base font-medium"
                :class="
                  route.path === '/g/user/all-task'
                    ? 'bg-gray-900 text-white'
                    : ''
                "
              >
                All Task
              </NuxtLink>

              <NuxtLink
                to="/g/user/ongoing-task"
                class="block px-3 py-2 text-base font-medium"
                :class="
                  route.path === '/g/user/ongoing-task'
                    ? 'bg-gray-900 text-white'
                    : ''
                "
              >
                Ongoing Task
              </NuxtLink>

              <NuxtLink
                href="/g/user/complete-task"
                class="block px-3 py-2 text-base font-medium"
                :class="
                  route.path === '/g/user/complete-task'
                    ? 'bg-gray-900 text-white'
                    : ''
                "
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
