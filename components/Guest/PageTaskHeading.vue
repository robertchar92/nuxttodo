<script setup lang="ts">
import MazBtn from "maz-ui/components/MazBtn";
import MazDialog from "maz-ui/components/MazDialog";
import MazInput from "maz-ui/components/MazInput";
import MazTextarea from "maz-ui/components/MazTextarea";
import { required, maxLength, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { HalfCircleSpinner } from "epic-spinners";

interface PageTaskHeading {
  title?: string;
  refresh_name?: string;
}
const props = defineProps<PageTaskHeading>();

const openCreateDialog = ref(false);

interface InputTask {
  title: string;
  description: string;
}

const input: InputTask = reactive({
  title: "",
  description: "",
});

const rules = computed(() => {
  return {
    title: {
      required: helpers.withMessage("Title is required!", required),
      maxLength: helpers.withMessage("Title must be under 60 characters!", maxLength(60)),
    },
    description: {
      required: helpers.withMessage("Description is required!", required),
    },
  };
});

const v$ = useVuelidate(rules, input);

const toggleCreateDialog = () => {
  openCreateDialog.value = !openCreateDialog.value;
  document.documentElement.classList.remove("--backdrop-present");
};

const { $showToast } = useNuxtApp();

const task = useTask();
const auth = useAuth();

const processSubmit = ref(false);

const handleCreateTask = async () => {
  processSubmit.value = true;
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) {
    $showToast(v$.value.$errors[0].$message, "error", 3000);

    input.title = "";
    input.description = "";

    processSubmit.value = false;

    return;
  }

  try {
    await task.createTask({
      // @ts-ignore: Object is possibly 'null'.
      user_id: auth.userData.id,
      name: input.title,
      description: input.description,
      status: task.Status.ongoing,
    });

    input.title = "";
    input.description = "";

    v$.value.$reset();

    if (props.refresh_name) {
      refreshNuxtData(props.refresh_name);
    }

    $showToast("Successfully add task!", "success", 2000);
  } catch (error) {
    $showToast(error.message, "error", 3000);
  }
  processSubmit.value = false;
  toggleCreateDialog();
};
</script>

<template>
  <div
    class="border-b border-gray-200 pb-5 mb-10 sm:flex sm:items-center sm:justify-between"
  >
    <h1 class="text-lg md:text-2xl font-bold leading-6 text-gray-900">
      {{ title }}
    </h1>
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
          <div class="w-full mb-4">
            <MazInput
              v-model="input.title"
              label="Title"
              @blur="v$.title.$touch"
              :disabled="processSubmit"
              :class="{
                '[&>.m-input-wrapper]:!border-red-500 [&>.m-input-wrapper]:focus:!border-red-500':
                  v$.title.$error,
                '[&>.m-input-wrapper]:!border-[#42d392] ': !v$.title.$invalid,
              }"
            />
            <span v-if="v$.title.$error" class="text-red-500 text-sm px-2">{{
              v$.title.$errors[0].$message
            }}</span>
          </div>

          <div class="w-full">
            <MazTextarea
              v-model="input.description"
              name="description"
              id="description"
              label="Description"
              :disabled="processSubmit"
              @blur="v$.description.$touch"
              :class="{
                '!border-red-500 focus:!border-red-500': v$.description.$error,
                '!border-[#42d392] ': !v$.description.$invalid,
              }"
            />
            <span v-if="v$.description.$error" class="text-red-500 text-sm px-2">{{
              v$.description.$errors[0].$message
            }}</span>
          </div>

          <div class="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              @click="toggleCreateDialog"
              :disabled="processSubmit"
              class="flex items-center justify-center py-3 px-6 bg-red-500 hover:bg-red-700 text-white rounded-md disabled:bg-gray-500"
            >
              Cancel
              <Icon
                name="material-symbols:cancel-outline-rounded"
                class="ml-2 text-2xl"
              />
            </button>

            <button
              type="submit"
              :disabled="processSubmit"
              class="flex items-center justify-center py-3 px-6 bg-blue-500 hover:bg-blue-700 text-white rounded-md disabled:bg-gray-500"
            >
              <half-circle-spinner
                :animation-duration="1000"
                :size="20"
                color="white"
                v-if="processSubmit"
              />
              <div v-else>
                Add Task
                <Icon
                  name="material-symbols:add-circle-outline-rounded"
                  class="ml-2 text-2xl"
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </MazDialog>
  </div>
</template>
