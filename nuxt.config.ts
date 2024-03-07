import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devServer: {
    port: 5000,
  },
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  devtools: { enabled: true },
})
