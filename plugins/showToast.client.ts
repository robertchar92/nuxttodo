import Toast, { POSITION, useToast } from "vue-toastification";

const toast = useToast();

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: POSITION.TOP_RIGHT,
  });
  nuxtApp.provide("showToast", (msg, type, time = 5000) =>
    toast[type](msg, { timeout: time })
  );
});
