import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // env,
  typescript: {
    strict: true,
  },
  ssr: true,
});
