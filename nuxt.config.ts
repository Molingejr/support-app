// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ["nuxt-icons", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      "defineStore" // import { defineStore } from 'pinia'
    ]
  }
})
