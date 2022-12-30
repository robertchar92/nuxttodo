import { Database } from "lib/database.types";
export const useTask = definePiniaStore("task", () => {
  const client = useSupabaseClient<Database>();
  const Status = ref({
    ongoing: "ONGOING",
    complete: "COMPLETE",
  });

  async function findAllTask(
    offset: number,
    limit: number,
    filter: Database | {}
  ) {
    const { data, error } = await client
      .from("tasks")
      .select()
      .range(offset, offset + limit)
      .order("id", { ascending: false })
      .match(filter);

    if (error) throw error;

    const { count, error: errCount } = await client
      .from("tasks")
      .select("*", { count: "exact", head: true })
      .match(filter);

    if (errCount) throw errCount;

    return { data, count };
  }

  async function createTask(data: Database.insert) {
    const { error } = await client.from("tasks").insert(data);

    if (error) throw error;

    return error;
  }

  return { findAllTask, createTask, Status };
});
