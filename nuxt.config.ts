import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  modules: ["@inkline/nuxt", "@nuxtjs/tailwindcss", "nuxt-icons"],

  inkline: { css: true, sassVariables: [] },

  buildModules: [["unplugin-icons/nuxt"]],

  tailwindcss: {
    viewer: false,
  },
});
