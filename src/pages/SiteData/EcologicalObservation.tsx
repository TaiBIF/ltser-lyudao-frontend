import React from 'react';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';
import Title from 'components/SiteData/Title';
import Chart from 'components/SiteData/Chart';
import Search from 'components/SiteData/Search';

import { BannerData } from 'types/common';

import bannerImg from 'image/ecological_bn.png';
import { ecoAsideList } from 'data/siteData';
import Result from 'components/SiteData/Result';

const EcologicalObservation = () => {
  const bannerData: BannerData = {
    title: '聯絡我們',
    en: ['Ecological', 'observation'],
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
            <div className="observation-box">
              <Aside data={ecoAsideList} />
              <div className="right-infbox">
                <Title />
                <Chart />
                <div className="data-searchbox">
                  <Search />
                  <Result />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcologicalObservation;
