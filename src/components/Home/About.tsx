import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import abmapImg from 'image/abmap.png';

import { EnterState } from 'types/home';
import { generateAboutTabList } from 'data/home/content';

interface AboutProps {
  enter: EnterState;
  PAGE_NAME: string;
}

const About = (props: AboutProps) => {
  const { enter, PAGE_NAME } = props;

  const aboutTabList = generateAboutTabList();

  const COMPONENT_NAME = 'About';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  return (
    <>
      <section className={`s2-about ${enter.s2 ? 'vivi' : ''}`}>
        <div className="main-box">
          <div className="leftbox">
            <div className="mapimg">
              <div className="yel-dash">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={475}
                  height={473}
                  viewBox="0 0 475 473"
                >
                  <g
                    id="Ellipse_187"
                    data-name="Ellipse 187"
                    fill="none"
                    stroke="#d5b943"
                    strokeWidth={1}
                    strokeDasharray={5}
                  >
                    <ellipse
                      cx="237.5"
                      cy="236.5"
                      rx="237.5"
                      ry="236.5"
                      stroke="none"
                    />
                    <ellipse
                      cx="237.5"
                      cy="236.5"
                      rx={237}
                      ry={236}
                      fill="none"
                    />
                  </g>
                </svg>
              </div>
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

export default About;
