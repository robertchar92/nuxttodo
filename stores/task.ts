import { Database } from "lib/database.types";
import dayjs from "dayjs";
export const useTask = definePiniaStore("task", () => {
  const client = useSupabaseClient<Database>();
  const Status = ref({
    ongoing: "ONGOING",
    complete: "COMPLETE",
  });

  async function findAllTask(
    offset: number,
    limit: number,
    filter: Database | {},
    sort: string,
    asc: boolean
  ) {
    const { data, error } = await client
      .from("tasks")
      .select()
      .match(filter)
      .range(offset, offset + limit - 1)
      .filter("deleted_at", "is", "NULL")
      .order(sort, { ascending: asc });

    if (error) throw error;

    const { count, error: errCount } = await client
      .from("tasks")
      .select("*", { count: "exact", head: true })
      .match(filter)
      .filter("deleted_at", "is", "NULL");

    if (errCount) throw errCount;

    return { data, count };
  }

  async function createTask(data: Database.insert) {
    const { error } = await client.from("tasks").insert(data);

    if (error) throw error;

    return error;
  }

  async function softDeleteTask(id: number) {
    const { error } = await client
      .from("tasks")
      .update({
        deleted_at: dayjs(Date.now()).format("YYYY-MM-DD HH:MM:ss"),
      })
      .eq("id", id);

    if (error) throw error;

    return error;
  }

  return { findAllTask, createTask, softDeleteTask, Status };
});
