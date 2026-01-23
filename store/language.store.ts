import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@/i18n";

type LanguageState = {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
  hydrateLanguage: () => Promise<void>;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: i18n.locale, // langue par défaut

  setLanguage: async (lang) => {
    i18n.locale = lang; // change i18n
    await AsyncStorage.setItem("APP_LANGUAGE", lang);
    set({ language: lang }); // force re-render global
  },

  hydrateLanguage: async () => {
    const storedLang = await AsyncStorage.getItem("APP_LANGUAGE");

    if (storedLang) {
      i18n.locale = storedLang;
      set({ language: storedLang });
    }
  },
}));
