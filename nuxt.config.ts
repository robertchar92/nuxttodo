// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Lato: [100, 300, 700],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  css: [
    "@/assets/css/main.css",
  ],
})
