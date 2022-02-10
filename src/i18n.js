import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);


// Load all locales and remember context
function loadMessages() {
   const context = require.context("./locales", true, /[a-z0-9-_]+\.json$/i);

   const messages = context
      .keys()
      .map((key) => ({
         key,
         locale: key.match(/[a-z0-9-_]+/i)[0]
      }))
      .reduce(
         (messages, {
            key,
            locale
         }) => ({
            ...messages,
            [locale]: context(key),
         }), {}
      );

   return {
      context,
      messages
   };
}

const {
   context,
   messages
} = loadMessages();

const i18n = new VueI18n({
   lazy: true,
   locale: process.env.VUE_APP_I18N_LOCALE || "en",
   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
   // messages: loadLocaleMessages(),
   messages,
   context,
   loadMessages: loadMessages(),
   silentFallbackWarn: true,
   silentTranslationWarn: true
});




export default i18n