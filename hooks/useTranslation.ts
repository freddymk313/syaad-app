// import i18n from "@/i18n";
// import { useLanguageStore } from "@/store/language.store";

// export function useTranslation() {
//   const language = useLanguageStore((state) => state.language);

//   return {
//     t: (key: string) => i18n.t(key),
//     language,
//   };
// }

// import i18n from "@/i18n";
// import { useLanguageStore } from "@/store/language.store";

// export function useTranslation() {
//   const language = useLanguageStore((state) => state.language);

//   return {
//     t: (key: string) => i18n.t(key),
//     language, // ⚠️ IMPORTANT : utilisé pour re-render
//   };
// }

// import i18n from "@/i18n";
// import { useLanguageStore } from "@/store/language.store";

// export const useTranslation = () => {
//   const language = useLanguageStore((s) => s.language);

//   return {
//     t: (key: string) => i18n.t(key),
//     language,
//   };
// };

// hooks/useTranslation.ts

import i18n from "@/i18n";
import { useLanguageStore } from "@/store/language.store";

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  // ce hook va re-render chaque fois que language change
  return {
    t: (key: string) => i18n.t(key),
    language,
  };
}
