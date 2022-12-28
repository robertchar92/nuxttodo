<script setup lang="ts">
import { useTask } from "@/stores/task";
const task = useTask();

const { data: taskLists, count } = await task.findAllTask(null);

definePageMeta({
  layout: "guest-default",
});
</script>

<template>
  <div>
    <div class="container mx-auto py-10">
      <div class="w-full">
        <GuestPageTaskHeading title="All Task" />

        <TransitionSlide
          group
          v-if="taskLists"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <GuestTaskCard
            v-for="task in taskLists"
            :key="task.id"
            :id="task.id"
            :title="task.name"
            :description="task.description"
            :status="task.status"
          />
        </TransitionSlide>

        <div v-else class="w-full text-center py-4 text-xl font-bold">
          Create New Task Now.
        </div>
      </div>

      <GuestPagination />
    </div>
  </div>
</template>
