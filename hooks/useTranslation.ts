import i18n from "@/i18n";
import { useLanguageStore } from "@/store/language.store";

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  // ce hook va re-render chaque fois que language change
  return {
    t: (key: string): any => i18n.t(key),
    language,
  };
}
