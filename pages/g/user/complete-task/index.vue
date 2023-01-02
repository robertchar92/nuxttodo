<script setup lang="ts">
const pagination = ref({
  limit: 12,
  offset: 0,
  total: 0,
});

definePageMeta({
  layout: "guest-default",
});
</script>

<template>
  <div>
    <div class="container mx-auto py-10">
      <div class="w-full">
        <GuestPageTaskHeading title="Complete Task" />

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

      <GuestPagination :pagination="pagination" />
    </div>
  </div>
</template>
