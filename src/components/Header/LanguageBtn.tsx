import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import LanguageIcon from 'components/Header/LanguageIcon';

import { languageList } from 'data/utils';
import { useLangContext } from 'context/LangContext';
import { useHeaderContext } from 'context/HeaderContext';
import { gsapSlideToggle } from 'utils/animation';

const LanguageBtn = () => {
  const { setLang, setChanged } = useLangContext();
  const { handleMenuClick, show, langMenuRef, isMobile } = useHeaderContext();

  const handleLangClick = (lang: string) => {
    setLang(lang);
    setChanged(true);
  };

  useEffect(() => {
    const target = langMenuRef.current;
    if (target) {
      if (show.langMenu) {
        target.style.display = 'block';
        gsapSlideToggle('auto', target, show.langMenu);
      } else {
        gsapSlideToggle('auto', target, show.langMenu);
      }
    }
  }, [show.langMenu]);

  return (
    <>
      <div
        className={`lang ${isMobile && show.langMenu ? 'now' : ''}`}
        onClick={handleMenuClick}
        data-target="langMenu"
      >
        <LanguageIcon />
        <p>選擇語系</p>
        <div className="menu_2 u-slide-toggle" ref={langMenuRef}>
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
