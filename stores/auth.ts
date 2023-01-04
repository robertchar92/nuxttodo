import { skipHydrate } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useAuth = definePiniaStore("auth", () => {
  const userData = useLocalStorage("user", null);
  const supabase = useSupabaseClient();
  const router = useRouter();
  const userSessionExpired = useLocalStorage("user_session_expired", null);

  supabase.auth.onAuthStateChange((e, session) => {
    userData.value = session?.user || null;
    userSessionExpired.value = session?.expires_at || null;
  });

  async function signUp(email, password, ...metadata) {
    const { data: u, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: metadata,
      }
    );

    if (error) throw error;

    await supabase.auth.signOut();

    userData.value = null;

    return u;
  }

  async function signIn(email, password) {
    const { data: u, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    userData.value = u.user;

    return u;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    userData.value = null;
    userSessionExpired.value = null;

    return router.go("/g/auth/signin");
  }

  function isLoggedIn() {
    if (Date.now() < userSessionExpired.value * 1000 && !!userData.value) {
      return true;
    }

    return false;
  }

  return {
    userData: skipHydrate(userData),
    signIn,
    signUp,
    signOut,
    isLoggedIn,
  };
});
