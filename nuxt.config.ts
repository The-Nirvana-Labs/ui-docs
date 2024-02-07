// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "nirvana",
      },
      bodyAttrs: {
        class: 'font-secondary'
      }
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Raleway: true,
      "Open+Sans": true,
    },
    useStylesheet: true,
  },
})
