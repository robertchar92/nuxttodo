<script setup lang="ts">
import MazBadge from "maz-ui/components/MazBadge";

interface TaskCardProps {
  id?: number;
  title?: string;
  description?: string;
  status?: string;
  date?: string;
}

const props = defineProps<TaskCardProps>();
</script>

<template>
  <div class="col-span-1 bg-white rounded-lg shadow flex flex-col min-h-[12.5rem]">
    <div class="w-full px-6 pt-3 flex justify-between items-center">
      <div class="">
        <MazBadge
          :color="status === 'COMPLETE' ? 'success' : 'warning'"
          rounded-size="full"
          size="0.8rem"
          >{{ status }}</MazBadge
        >
      </div>

      <div class="text-gray-400 text-sm">{{ date }}</div>
    </div>

    <div class="flex flex-1 justify-between w-full py-4 px-6 space-x-6">
      <div class="flex-1">
        <div class="flex items-center space-x-3">
          <h3
            class="text-sm font-bold text-gray-900 md:text-base lg:text-xl line-clamp-1"
          >
            {{ title }}
          </h3>
        </div>
        <p class="w-full mt-1 text-xs text-gray-500 line-clamp-3 text md:text-sm">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="flex justify-end w-full px-6 pb-3 space-x-6 text-sm md:text-base">
      <NuxtLink
        :to="`/g/user/task/${id}`"
        class="flex items-center justify-between text-green-500 hover:text-green-700"
      >
        <Icon name="material-symbols:overview-outline" class="mr-1" /> Show
      </NuxtLink>

      <button
        type="button"
        class="flex items-center justify-between text-red-500 hover:text-red-700"
      >
        <Icon name="tabler:trash-x" class="mr-1" /> Delete
      </button>
    </div>
  </div>
</template>
