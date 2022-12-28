import { Database } from "lib/database.types";
export const useTask = definePiniaStore("task", () => {
  const client = useSupabaseClient<Database>();

  async function findAllTask(status: string | null) {
    const { data, count, error } = await client
      .from("tasks")
      .select("*", { count: "exact" });

    if (error) throw error;

    return { data, count };
  }

  return { findAllTask };
});
