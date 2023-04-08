<script setup lang="ts">
import MazBadge from "maz-ui/components/MazBadge";
import MazInput from "maz-ui/components/MazInput";
import MazSwitch from "maz-ui/components/MazSwitch";
const route = useRoute();
const input = reactive({
  addList: "",
});

// console.log(route.params.id);

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
      <h2 class="w-full mb-10 text-4xl font-bold">Task Detail</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <GuestPagesTaskTaskSection />

        <div class="w-full min-h-[75vh]">
          <div class="w-full mb-6 flex justify-start">
            <form
              @submit.prevent="addTodoList"
              class="w-full flex justify-between items-center"
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
            <div class="w-full">
              <ul class="p-0 w-full list-none text-sm md:text-lg" v-if="todoLists">
                <TransitionSlide group>
                  <li
                    v-for="list in todoLists"
                    :key="list.id"
                    class="py-4 px-4 border-b border-gray-300 last:border-b-0 flex justify-between items-center"
                  >
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
                    <div class="ml-2 flex items-center">
                      <button type="button" @click="deleteTodoList(list.id)">
                        <Icon
                          name="tabler:trash-x"
                          class="text-xl text-red-500 hover:text-red-700"
                        />
                      </button>
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
  </div>
</template>
