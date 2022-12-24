<script setup lang="ts">
definePageMeta({
  layout: "guest-default",
  middleware: ["guest-role"],
});
</script>

<template>
  <div>
    <div class="container md:px-0 md:mx-auto h-[100vh]">
      <div class="bg-white flex justify-center items-center h-[100vh]">
        <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Task Management with Todo List</span>
            <span class="block">Start add your task now.</span>
          </h2>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <NuxtLink
                href="/g/user/all-task"
                class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >Get started</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
