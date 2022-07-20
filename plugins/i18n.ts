import { createI18n } from "vue-i18n";

import id from "../locales/id-ID.js";
import en from "../locales/en-US.js";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "id",
    messages: {
      id,
      en,
    },
  });

  vueApp.use(i18n);
});
