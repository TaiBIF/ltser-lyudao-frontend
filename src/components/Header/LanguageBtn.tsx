import React from 'react';
import { Link } from 'react-router-dom';

import LanguageIcon from 'components/Header/LanguageIcon';

const LanguageBtn = () => {
  return (
    <>
      <div className="lang">
        <LanguageIcon />
        <p>選擇語系</p>
        <div className="menu_2">
          <div className="w_bg">
            <Link to="/">English</Link>
            <Link to="/">繁體中文</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageBtn;
