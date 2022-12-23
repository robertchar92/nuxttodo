import { useAuth } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();

  if (!auth.isLoggedIn()) {
    return navigateTo("/g/auth/signin");
  }
});
