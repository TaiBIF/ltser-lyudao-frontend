import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from 'image/logo.png';
import { useTranslation } from 'react-i18next';

const LogoLink = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/" className="logo">
        <img src={logoImg} alt={t(`${I18N_KEY_PREFIX}.logoTitle`)} />
        <div className="logo-txt">
          <span>{t(`${I18N_KEY_PREFIX}.logoSubtitle`)}</span>
          <h1>{t(`${I18N_KEY_PREFIX}.logoTitle`)}</h1>
        </div>
      </Link>
    </>
  );
};

export default LogoLink;
