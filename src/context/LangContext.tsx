import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';

import { languageList } from 'data/utils';
import { swalToast } from 'helpers/customSwal';

const LangContext = createContext<any>(null);

export const useLangContext = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>('zh-tw');
  const [changed, setChanged] = useState<boolean>(false);
  const langPreference = localStorage.getItem('lang');

  useEffect(() => {
    if (langPreference) {
      setLang(langPreference);
    }
  }, []);

  useEffect(() => {
    const matchLang = languageList.find((v) => v.id === lang);
    if (matchLang) {
      i18n.changeLanguage(matchLang.id);
      localStorage.setItem('lang', lang);
      if (changed) {
        swalToast.fire({
          icon: 'info',
          title: matchLang.hint,
        });
        setChanged(false);
      }
    }
  }, [lang, i18n]);

  const contextData = { lang, setLang, setChanged };

  return (
    <LangContext.Provider value={contextData}>{children}</LangContext.Provider>
  );
};
