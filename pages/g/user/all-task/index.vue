<script setup lang="ts">
import dayjs from "dayjs";
const task = useTask();
const fetchName = ref("all_task");

const pagination = ref({
  limit: 12,
  offset: 0,
  total: 0,
});

const taskLists = ref();

const { pending } = await useLazyAsyncData(fetchName.value, async () => {
  const { data, count } = await task.findAllTask(
    pagination.value.offset,
    pagination.value.limit,
    {},
    "id",
    false
  );

  taskLists.value = data;

  if (count) {
    pagination.value.total = count;
  }
});

definePageMeta({
  layout: "guest-default",
});
</script>

<template>
  <div>
    <div class="container mx-auto py-10">
      <div class="w-full" v-if="!pending">
        <GuestPageTaskHeading title="All Task" :refresh_name="fetchName" />

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

        <div
          v-else
          class="w-full text-center py-4 text-xl font-bold min-h-[80vh] items-center"
        >
          Create New Task Now.
        </div>
      </div>

      <GuestPagination :pagination="pagination" v-if="!pending" />
    </div>
  </div>
</template>
