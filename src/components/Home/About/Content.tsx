import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Deco from 'components/Home/About/Deco';

import abmapImg from 'image/abmap.png';

import { EnterState } from 'types/home';
import { generateAboutTabList } from 'data/home/content';

interface ContentProps {
  enter: EnterState;
  PAGE_NAME: string;
}

const Content = (props: ContentProps) => {
  const { enter, PAGE_NAME } = props;

  const COMPONENT_NAME = 'About';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const aboutTabList = generateAboutTabList();

  return (
    <>
      <section className={`s2-about ${enter.s2 ? 'vivi' : ''}`}>
        <div className="main-box">
          <div className="leftbox">
            <div className="mapimg">
              <Deco />
              <img src={abmapImg} alt={t(`${I18N_KEY_PREFIX}.mapTitle`)} />
              {aboutTabList.map((v) => {
                const { id, style, title, subtitle, link } = v;
                return (
                  <Link
                    key={id}
                    to={`/site-data/${link}`}
                    className={`ciritem cir0${style}`}
                  >
                    <div className="txt">
                      <p>{title}</p>
                      <span>
                        {subtitle.map((v, i) => {
                          return (
                            <>
                              {v}
                              {i === subtitle.length - 1 ? <></> : <br />}
                            </>
                          );
                        })}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="rightbox">
            <h2>{t(`${I18N_KEY_PREFIX}.aboutTitle`)}</h2>
            <p>
              {t(`${I18N_KEY_PREFIX}.content1`)}
              <br />
              <br />
              {t(`${I18N_KEY_PREFIX}.content2`)}
              <br />
              <br />
              {t(`${I18N_KEY_PREFIX}.content3`)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
