import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icons"],

  buildModules: [["unplugin-icons/nuxt", {}]],

  tailwindcss: {
    viewer: false,
  },
});
