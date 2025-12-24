import { useState, useEffect } from "react";

export const useLanguage = () => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) return savedLang;
    return navigator.language.startsWith("ar") ? "ar" : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return [lang, setLang];
};
