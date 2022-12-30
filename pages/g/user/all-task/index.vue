<script setup lang="ts">
import dayjs from "dayjs";
const task = useTask();

const { data: taskLists, pending } = await useLazyAsyncData("get_task", async () => {
  const { data } = await task.findAllTask(0, 12, {});

  return data;
});

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
            :date="dayjs(task.created_at).format('ddd, DD MMM YYYY')"
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
