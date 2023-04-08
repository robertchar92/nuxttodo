<template>
  <div class="w-full">
    <div class="w-full mb-4">
      <div class="flex justify-between items-center">
        <MazBadge
          color="warning"
          rounded-size="full"
          size="1.1rem"
          class="mb-4 !text-white"
          >Ongoing</MazBadge
        >

        <div class="text-gray-600 text-lg">Thu, 06 Jan 2023</div>
      </div>

      <h1 class="text-2xl font-bold leading-6 text-gray-900 mb-1">Task 1</h1>
      <p class="text-sm md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, fugit
        facilis quis sint aut necessitatibus eum accusamus eveniet ex. Inventore! Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Explicabo magnam delectus sed
        maiores ex dolorum dolore, tempore tempora dolor voluptates?
      </p>
    </div>

    <div class="w-full mt-4 text-sm md:text-base flex justify-end items-center space-x-4">
      <button
        type="button"
        class="flex items-center justify-center py-2 px-4 md:py-3 md:px-6 bg-green-500 hover:bg-green-700 text-white rounded-md"
      >
        Complete
        <Icon name="carbon:task-complete" class="ml-2 text-2xl" />
      </button>

      <button
        type="button"
        class="flex items-center justify-center py-2 px-4 md:py-3 md:px-6 bg-red-500 hover:bg-red-700 text-white rounded-md"
      >
        Delete
        <Icon name="tabler:trash-x" class="ml-2 text-2xl" />
      </button>

      <button
        type="button"
        class="flex items-center justify-center py-2 px-4 md:py-3 md:px-6 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
      >
        Save
        <Icon name="carbon:save" class="ml-2 text-2xl" />
      </button>
    </div>
  </div>
</template>
