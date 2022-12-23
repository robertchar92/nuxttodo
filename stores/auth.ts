import { skipHydrate } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useAuth = definePiniaStore("auth", () => {
  const user = useLocalStorage("user", null);
  const supabase = useSupabaseClient();
  const router = useRouter();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });

  async function signUp(email, password, ...metadata) {
    const { user: u, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: metadata,
      }
    );

    if (error) throw error;

    return u;
  }

  async function signIn(email, password) {
    const { user: u, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return u;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    return router.go("/g/auth/signin");
  }

  function isLoggedIn() {
    return !!user.value;
  }

  return { user: skipHydrate(user), signIn, signUp, signOut, isLoggedIn };
});
