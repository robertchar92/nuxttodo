<script setup lang="ts">
import MazDialog from "maz-ui/components/MazDialog";
const show = ref(false);
const task = useTask();
const { $showToast } = useNuxtApp();

const idTask = ref();
const titleTask = ref();
const props = defineProps({
  refresh_name: String,
});

const openDeleteDialog = (id: number, title: string) => {
  idTask.value = id;
  titleTask.value = title;
  show.value = true;
};

const closeDeleteDialog = () => {
  show.value = false;
  document.documentElement.classList.remove("--backdrop-present");
};

const deleteTask = async (id: number) => {
  try {
    await task.softDeleteTask(id);

    if (props.refresh_name) {
      refreshNuxtData(props.refresh_name);
    }

    $showToast("Successfully delete task!", "success", 2000);
  } catch (error) {
    $showToast(error.message, "error", 3000);
  }

  closeDeleteDialog();
};

defineExpose({
  openDeleteDialog,
});
</script>

<template>
  <div>
    <MazDialog v-model="show" title="Delete Task">
      <div class="w-full">
        <div class="w-full mb-4 text-xl">
          Are sure want to delete
          <span class="font-bold">{{ titleTask }}</span> ?
        </div>

        <div class="flex justify-end space-x-4 mt-4">
          <button
            type="button"
            @click="deleteTask(idTask)"
            class="flex items-center justify-center py-3 px-6 bg-red-500 hover:bg-red-700 text-white rounded-md"
          >
            Delete
            <Icon name="tabler:trash-x" class="ml-2 text-2xl" />
          </button>

          <button
            type="button"
            @click="closeDeleteDialog"
            class="flex items-center justify-center py-3 px-6 bg-gray-200 hover:bg-gray-300 text-white rounded-md"
          >
            Cancel
            <Icon name="material-symbols:cancel-outline-rounded" class="ml-2 text-2xl" />
          </button>
        </div>
      </div>
    </MazDialog>
  </div>
</template>
