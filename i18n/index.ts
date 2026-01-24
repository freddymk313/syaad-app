import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import en from "./en.json";
import fr from "./fr.json";
import es from "./es.json";
import zh from "./zh.json";

const i18n = new I18n({
  en,
  fr,
  es,
  zh,
});

i18n.enableFallback = true;
i18n.locale = getLocales()[0]?.languageCode ?? "en";

export default i18n;
