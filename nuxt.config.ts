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
  css: [
    '~/css/tailwind.css', // Add this line to include your custom Tailwind CSS file
  ],
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
