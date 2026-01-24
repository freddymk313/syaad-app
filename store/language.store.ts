// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import i18n from "@/i18n";

// type LanguageState = {
//   language: string;
//   setLanguage: (lang: string) => Promise<void>;
//   hydrateLanguage: () => Promise<void>;
// };

// export const useLanguageStore = create<LanguageState>((set) => ({
//   language: i18n.locale, // langue par défaut

//   setLanguage: async (lang) => {
//     i18n.locale = lang; // change i18n
//     await AsyncStorage.setItem("APP_LANGUAGE", lang);
//     set({ language: lang }); // force re-render global
//   },

//   hydrateLanguage: async () => {
//     const storedLang = await AsyncStorage.getItem("APP_LANGUAGE");

//     if (storedLang) {
//       i18n.locale = storedLang;
//       set({ language: storedLang });
//     }
//   },
// }));

// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import i18n from "@/i18n";

// export const useLanguageStore = create((set) => ({
//   language: "en",

//   setLanguage: async (lang: string) => {
//     i18n.locale = lang; // 🔥 update immédiat
//     await AsyncStorage.setItem("app_language", lang);

//     set({ language: lang });
//   },

//   hydrateLanguage: async () => {
//     const savedLang = await AsyncStorage.getItem("app_language");
//     const lang = savedLang ?? "en";

//     i18n.locale = lang;
//     set({ language: lang });
//   },
// }));

// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import i18n from "@/i18n";

// type LanguageState = {
//   language: string;
//   setLanguage: (lang: string) => Promise<void>;
//   hydrateLanguage: () => Promise<void>;
// };

// export const useLanguageStore = create<LanguageState>((set) => ({
//   language: "en",

//   // 🔥 changement manuel (clic utilisateur)
//   setLanguage: async (lang: string) => {
//     i18n.locale = lang; // ✅ AVANT le set
//     await AsyncStorage.setItem("app_language", lang);

//     set({ language: lang }); // 🔥 force le re-render
//   },

//   // 🔥 restauration au démarrage
//   hydrateLanguage: async () => {
//     const savedLang = await AsyncStorage.getItem("app_language");
//     const lang = savedLang ?? "en";

//     i18n.locale = lang; // ✅ synchro globale
//     set({ language: lang }); // ✅ synchro React
//   },
// }));


// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import i18n from "@/i18n";

// type LanguageState = {
//   language: string;
//   setLanguage: (lang: string) => Promise<void>;
//   hydrate: () => Promise<void>;
// };

// export const useLanguageStore = create<LanguageState>((set) => ({
//   language: "en",

//   setLanguage: async (lang) => {
//     await AsyncStorage.setItem("language", lang);
//     i18n.changeLanguage(lang); // 🔥 IMPORTANT
//     set({ language: lang });
//   },

//   hydrate: async () => {
//     const storedLang = await AsyncStorage.getItem("language");
//     const lang = storedLang || "en";

//     i18n.changeLanguage(lang); // 🔥 IMPORTANT
//     set({ language: lang });
//   },
// }));

// store/language.store.ts
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@/i18n";

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
  hydrate: () => Promise<void>;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: i18n.locale,
  setLanguage: async (lang) => {
    i18n.locale = lang;          // change la langue
    await AsyncStorage.setItem("language", lang);
    set({ language: lang });      // 🔥 force le re-render global
  },
  hydrate: async () => {
    const storedLang = await AsyncStorage.getItem("language");
    if (storedLang) {
      i18n.locale = storedLang;
      set({ language: storedLang });
    }
  },
}));
