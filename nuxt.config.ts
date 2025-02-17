// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss",'@nuxtjs/google-fonts'],

  googleFonts: {
    families:{
        'JetBrains Mono': [100, 200,400, 500, 600, 700],
    }
  },

  compatibilityDate: '2025-02-14'
})