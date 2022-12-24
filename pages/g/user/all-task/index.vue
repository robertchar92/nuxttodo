<script setup lang="ts">
definePageMeta({
  layout: "guest-default",
});
</script>

<template>
  <div>
    <div class="container mx-auto py-10">
      <div class="w-full">
        <div
          class="border-b border-gray-200 pb-5 mb-10 sm:flex sm:items-center sm:justify-between"
        >
          <h3 class="text-lg font-medium leading-6 text-gray-900">All Task</h3>
          <div class="mt-3 sm:mt-0 sm:ml-4">
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Create new task
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <GuestTaskCard
            :id="1"
            title="Task"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, similique. Consectetur iste eum aperiam assumenda? Veritatis nulla quod nemo fugit."
            status="complete"
          />
          <GuestTaskCard
            :id="2"
            title="Task 2"
            description="2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, similique. Consectetur iste eum aperiam assumenda? Veritatis nulla quod nemo fugit."
            status="ongoing"
          />
        </div>
      </div>

      <GuestPagination />
    </div>
  </div>
</template>
