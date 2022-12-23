const useAuth = () => {
  const user = useState("user", () => null);
  const userData = useSupabaseUser();
  const supabase = useSupabaseClient();
  const router = useRouter();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = userData.value;
  });

  const signUp = async ({ email, password, ...metadata }) => {
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
  };

  const signIn = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return u;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    router.go("/g/auth/signin");
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
  };
};

export default useAuth;
