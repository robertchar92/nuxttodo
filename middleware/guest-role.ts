export default defineNuxtRouteMiddleware((to, from) => {
  const role = "guest";
  if (role !== "guest") {
    return navigateTo("/");
  }
});
