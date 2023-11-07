import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { languageList } from 'data/utils';

import { swalToast } from 'helpers/customSwal';

const useLang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>('');
  const langPreference = localStorage.getItem('lang');
  const [changed, setChanged] = useState<boolean>(false);

  useEffect(() => {
    if (langPreference) {
      setLang(langPreference);
    }
  }, []);

  useEffect(() => {
    const matchLang = languageList.find((v) => v.id === lang);
    if (matchLang) {
      i18n.changeLanguage(matchLang.id);
      if (changed) {
        swalToast.fire({
          icon: 'info',
          title: matchLang.hint,
        });
      }
      localStorage.setItem('lang', lang);
      setChanged(false);
    }
  }, [lang]);

  return { lang, setLang, setChanged };
};

export default useLang;
