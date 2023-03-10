// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@morev/vue-transitions/nuxt",
    "@sidebase/nuxt-session",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lato: [100, 300, 700],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
  css: [
    "@/assets/css/main.css",
    "maz-ui/css/main.css",
    "vue-toastification/dist/index.css",
  ],
  build: {
    transpile: ["maz-ui"],
  },
  plugins: ["@/plugins/showToast.client.ts"],
  imports: {
    dirs: ["stores"],
  },
});
