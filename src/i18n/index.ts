import { createI18n } from "vue-i18n";

const messages = {
  es: {
    // Aquí puedes agregar las traducciones en español
    welcome: "Bienvenido",
    // Agrega más traducciones según necesites
  },
  en: {
    // Aquí puedes agregar las traducciones en inglés
    welcome: "Welcome",
    // Agrega más traducciones según necesites
  },
};

const i18n = createI18n({
  locale: "es", // idioma por defecto
  fallbackLocale: "es",
  messages,
});

export default i18n;
