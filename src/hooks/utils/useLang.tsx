import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { languageList } from 'data/utils';

import { swalToast } from 'helpers/customSwal';

const useLang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('zh-TW');

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
      swalToast.fire({
        icon: 'info',
        title: matchLang.hint,
      });
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  return { lang, setLang };
};

export default useLang;
