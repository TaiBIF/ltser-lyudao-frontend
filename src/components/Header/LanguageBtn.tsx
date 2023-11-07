import React from 'react';
import { Link } from 'react-router-dom';

import LanguageIcon from 'components/Header/LanguageIcon';

import { languageList } from 'data/utils';
import { useLangContext } from 'context/LangContext';

const LanguageBtn = () => {
  const { setLang, setChanged } = useLangContext();
  const handleLangClick = (lang: string) => {
    setLang(lang);
    setChanged(true);
  };
  return (
    <>
      <div className="lang">
        <LanguageIcon />
        <p>選擇語系</p>
        <div className="menu_2">
          <div className="w_bg">
            {languageList.map((v) => {
              const { id, title } = v;
              return (
                <button
                  type="button"
                  className="lang-btn"
                  key={id}
                  onClick={() => {
                    handleLangClick(id);
                  }}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageBtn;
