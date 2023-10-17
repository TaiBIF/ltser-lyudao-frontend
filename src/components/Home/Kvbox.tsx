import React from 'react';

import { useTranslation } from 'react-i18next';

const Kvbox = ({ PAGE_NAME }: { PAGE_NAME: string }) => {
  const COMPONENT_NAME = `Kvbox`;
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  return (
    <>
      <section className="s1-kvbox">
        <div className="bg-area"></div>
        <div className="center-slogan">
          <h3>{t(`${I18N_KEY_PREFIX}.subtitle`)}</h3>
          <h2>{t(`${I18N_KEY_PREFIX}.title`)}</h2>
        </div>
      </section>
    </>
  );
};

export default Kvbox;
