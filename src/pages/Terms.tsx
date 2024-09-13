import React from 'react';

import { useTranslation } from 'react-i18next';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';

import { BannerData } from 'types/common';

import bannerImg from 'image/literature_bn.png';

const Terms = () => {
  const PAGE_NAME = 'Terms';
  const I18N_KEY_PREFIX = `${PAGE_NAME}`;

  const { t } = useTranslation();

  const bannerData: BannerData = {
    title: '使用條款',
    en: ['Terms'],
    maskImg: true,
    bgImg: bannerImg,
  };
  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="terms-editer">
              <h3 className="color-green">{t(`${I18N_KEY_PREFIX}.title1`)}</h3>
              <br />
              <h3 className="color-green">{t(`${I18N_KEY_PREFIX}.title2`)}</h3>
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.lastUpdate`)}
              </h3>
              <br />
              {t(`${I18N_KEY_PREFIX}.mainDescription1`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.mainDescription2`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle1`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content1`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content2`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content3`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content4`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content5`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content5_1`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content5_2`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle2`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content6`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content7`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content8`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle3`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content9`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle4`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content10`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle5`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content11`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle6`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content12`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle7`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content13`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subTitle8`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content14`)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
