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
              {t(`${I18N_KEY_PREFIX}.content0_1`)}
              <br />
              <br />
              {t(`${I18N_KEY_PREFIX}.content0_2`)}
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subtitle1`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content1`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subtitle2`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content2_1`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content2_2`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subtitle3`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content3`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subtitle4`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content4`)}
              <br />
              <br />
              <h3 className="color-green">
                {t(`${I18N_KEY_PREFIX}.subtitle5`)}
              </h3>
              {t(`${I18N_KEY_PREFIX}.content5_1`)}
              <br />
              {t(`${I18N_KEY_PREFIX}.content5_2`)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
