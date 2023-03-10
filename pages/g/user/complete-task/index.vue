<script setup lang="ts">
import dayjs from "dayjs";
const route = useRoute();
const task = useTask();
const fetchName = ref("complete_task");
const deleteDialog = ref();

const pagination = ref({
  limit: 12,
  offset: 0,
  total: 0,
});

const taskLists = ref();

const { pending, refresh } = await useLazyAsyncData(fetchName.value, async () => {
  const { data, count } = await task.findAllTask(
    pagination.value.offset,
    pagination.value.limit,
    { status: task.Status.complete },
    "id",
    false
  );

  taskLists.value = data;

  if (count) {
    pagination.value.total = count;
  }
});

watch(
  () => route.query.page,
  () => {
    if (route.query.page) {
      pagination.value.offset = pagination.value.limit * Number(route.query.page);
    } else {
      pagination.value.offset = 0;
    }
    refresh();
  }
);

const triggerDeleteDialog = (id: number, title: string) => {
  deleteDialog.value.openDeleteDialog(id, title);
};

definePageMeta({
  layout: "guest-default",
});

definePageMeta({
  layout: "guest-default",
});
</script>

<template>
  <div>
    <div class="container mx-auto py-10">
      <div class="w-full">
        <GuestPageTaskHeading title="Complete Task" :refresh_name="fetchName" />

        <div v-if="pagination.total > 0" class="w-full min-h-[71vh]">
          <LazyTransitionFade
            group
            tag="div"
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
              @open-del-dialog="triggerDeleteDialog"
            />
          </LazyTransitionFade>
        </div>

        <div v-else-if="pending" class="w-full min-h-[71vh]">Skeleton</div>

        <div
          v-else
          class="w-full py-4 text-xl font-bold min-h-[80vh] items-center flex justify-center"
        >
          Create New Task Now.
        </div>

        <GuestPagination :pagination="pagination" v-if="pagination.total > 0" />
      </div>
    </div>

    <GuestDeleteTaskDialog ref="deleteDialog" :refresh_name="fetchName" />
  </div>
</template>
