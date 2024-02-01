import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  devtools: { enabled: true },
})
