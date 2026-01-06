import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language, TranslationStrings } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: TranslationStrings;
  otherLangs: Language[];
  getLangPath: (lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "fr"; // Default to French
  if (location.pathname.startsWith("/en")) {
    lang = "en";
  } else if (location.pathname.startsWith("/de")) {
    lang = "de";
  }

  const t = translations[lang];

  const otherLangs: Language[] = ["fr", "en", "de"].filter((l) => l !== lang) as Language[];

  const getLangPath = (l: Language): string => {
    if (l === "fr") return "/";
    return `/${l}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs, getLangPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
