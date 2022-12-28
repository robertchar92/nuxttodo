<script setup lang="ts">
import MazBadge from "maz-ui/components/MazBadge";
import MazInput from "maz-ui/components/MazInput";
import MazSwitch from "maz-ui/components/MazSwitch";
const route = useRoute();
const input = reactive({
  addList: "",
});

interface ToDoList {
  id: number;
  name?: string;
  is_complete: boolean;
}

let todoLists: Array<ToDoList> = reactive([
  {
    id: 1,
    name: "Do Task 1",
    is_complete: false,
  },
  {
    id: 2,
    name: "Do Task 2",
    is_complete: false,
  },
  {
    id: 3,
    name: "Do Task 3",
    is_complete: false,
  },
  {
    id: 4,
    name: "Do Task 4",
    is_complete: false,
  },
  {
    id: 5,
    name: "Do Task 5",
    is_complete: false,
  },
  {
    id: 6,
    name: "Do Task 6",
    is_complete: false,
  },
]);

const { $showToast } = useNuxtApp();

const addTodoList = () => {
  const l = todoLists.length;
  const newId = todoLists[l - 1].id;

  const newTodo: ToDoList = reactive({
    id: newId + 1,
    name: input.addList,
    is_complete: false,
  });

  todoLists.push(newTodo);

  console.log(todoLists);

  $showToast("Successfully add todo list", "success", 3000);
};

const deleteTodoList = (id: number) => {
  const objWithIdIndex = todoLists.findIndex((list) => list.id === id);

  if (objWithIdIndex > -1) {
    todoLists.splice(objWithIdIndex, 1);
  }

  // $showToast("Successfully delete todo list", "success", 3000);
};
</script>

<template>
  <div>
    <div class="container mx-auto py-10">
      <div
        class="border-b border-gray-200 pb-5 mb-10 md:flex md:items-center md:justify-between"
      >
        <div class="flex-1">
          <MazBadge color="warning" rounded-size="full" size="1.1rem" class="mb-4"
            >Ongoing</MazBadge
          >

          <h1 class="text-2xl font-bold leading-6 text-gray-900 mb-1">Task 1</h1>
          <p class="text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, fugit
            facilis quis sint aut necessitatibus eum accusamus eveniet ex. Inventore!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo magnam
            delectus sed maiores ex dolorum dolore, tempore tempora dolor voluptates?
          </p>
        </div>

        <div
          class="md:w-40 mt-4 md:mt-0 md:ml-4 text-sm md:text-base flex justify-center items-center space-x-4 md:space-x-0 md:space-y-4 md:justify-start md:flex-col"
        >
          <TransitionScale>
            <button
              v-if="todoLists.every((todoList) => todoList.is_complete)"
              type="button"
              class="flex items-center justify-center py-2 px-4 md:py-3 md:px-6 bg-green-500 hover:bg-green-700 text-white rounded-md w-full"
            >
              Complete
              <Icon name="carbon:task-complete" class="ml-2 text-2xl" />
            </button>
          </TransitionScale>

          <button
            type="button"
            class="flex items-center justify-center py-2 px-4 md:py-3 md:px-6 bg-red-500 hover:bg-red-700 text-white rounded-md w-full"
          >
            Delete
            <Icon name="tabler:trash-x" class="ml-2 text-2xl" />
          </button>
        </div>
      </div>

      <div class="w-full mt-10">
        <div class="w-full mb-6 flex justify-start">
          <form
            @submit.prevent="addTodoList"
            class="w-full max-w-2xl flex justify-between items-center"
          >
            <MazInput v-model="input.addList" label="Todo List" class="w-full mr-2" />
            <button
              type="submit"
              class="flex items-center justify-center py-3 px-6 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
            >
              Add
              <Icon
                name="material-symbols:add-circle-outline-rounded"
                class="ml-2 text-2xl"
              />
            </button>
          </form>
        </div>

        <div class="w-full flex justify-start">
          <div class="w-full max-w-2xl">
            <ul class="p-0 w-full list-none text-sm md:text-lg" v-if="todoLists">
              <TransitionSlide group>
                <li
                  v-for="list in todoLists"
                  :key="list.id"
                  class="py-4 px-4 border-b border-gray-300 last:border-b-0 flex justify-between items-center"
                >
                  <div class="mr-2 flex items-center">
                    <button type="button" @click="deleteTodoList(list.id)">
                      <Icon
                        name="tabler:trash-x"
                        class="text-lg text-red-500 hover:text-red-700"
                      />
                    </button>
                  </div>
                  <p class="flex-1">{{ list.name }}</p>
                  <div class="ml-4">
                    <MazSwitch
                      v-model="list.is_complete"
                      color="primary"
                      :name="list.name"
                      :key="list.id"
                      @change=""
                    />
                  </div>
                </li>
              </TransitionSlide>
            </ul>

            <div v-else>Add new todo list.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
