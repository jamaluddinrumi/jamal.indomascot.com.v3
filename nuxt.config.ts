import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@inkline/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icons",
  ],

  inkline: {
    css: true,
    sassVariables: [],
    locale: "id",
    colorMode: "dark",
    color: "",
  },

  buildModules: [["unplugin-icons/nuxt"]],

  tailwindcss: {
    viewer: false,
  },
});
