<script setup lang="ts">
import MazBtn from "maz-ui/components/MazBtn";
import MazDialog from "maz-ui/components/MazDialog";
import MazInput from "maz-ui/components/MazInput";
import MazTextarea from "maz-ui/components/MazTextarea";
const openCreateDialog = ref(false);

interface InputTask {
  title: string;
  description: string;
}

const input: InputTask = reactive({
  title: "",
  description: "",
});

const toggleCreateDialog = () => {
  openCreateDialog.value = !openCreateDialog.value;
  document.documentElement.classList.remove("--backdrop-present");
};

interface PageTaskHeading {
  title?: string;
}
const props = defineProps<PageTaskHeading>();

const { $showToast } = useNuxtApp();

const task = useTask();
const auth = useAuth();

const handleCreateTask = async () => {
  try {
    await task.createTask({
      // @ts-ignore: Object is possibly 'null'.
      user_id: auth.user.id,
      name: input.title,
      description: input.description,
      status: task.Status.ongoing,
    });
    input.title = "";
    input.description = "";
    refreshNuxtData("get_task");
    $showToast("Successfully add task!", "success", 2000);
  } catch (error) {
    $showToast(error.message, "error", 3000);
  }

  openCreateDialog.value = false;
};
</script>

<template>
  <div
    class="border-b border-gray-200 pb-5 mb-10 sm:flex sm:items-center sm:justify-between"
  >
    <h1 class="text-lg font-medium leading-6 text-gray-900">{{ title }}</h1>
    <div class="mt-3 sm:mt-0 sm:ml-4">
      <button
        @click="toggleCreateDialog"
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Create new task
      </button>
    </div>

    <MazDialog v-model="openCreateDialog" title="Create Task" width="800px">
      <div class="w-full">
        <form @submit.prevent="handleCreateTask">
          <MazInput v-model="input.title" label="Title" class="mb-4" />
          <MazTextarea
            v-model="input.description"
            name="description"
            id="description"
            label="Description"
          />
          <div class="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              @click="toggleCreateDialog"
              class="flex items-center justify-center py-3 px-6 bg-red-500 hover:bg-red-700 text-white rounded-md"
            >
              Cancel
              <Icon
                name="material-symbols:cancel-outline-rounded"
                class="ml-2 text-2xl"
              />
            </button>

            <button
              type="submit"
              class="flex items-center justify-center py-3 px-6 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
            >
              Add Task
              <Icon
                name="material-symbols:add-circle-outline-rounded"
                class="ml-2 text-2xl"
              />
            </button>
          </div>
        </form>
      </div>
    </MazDialog>
  </div>
</template>
