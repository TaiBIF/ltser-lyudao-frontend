import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';

import { BannerData } from 'types/common';
import { ContextItem } from 'types/utils';

import bannerImg from 'image/social_bn.png';

import { economyAsideList } from 'data/siteData';

import { useDataContext } from 'context/DataContext';
import Content from 'components/SiteData/Economy/Content';

const Economy = () => {
  const { dataId } = useParams();

  const navigate = useNavigate();
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };
  const page = bannerData.en.map((v) => v.toLowerCase()).join('-');

  // useEffect(() => {
  //   if (!dataId) {
  //     const matchAsideFirstItem = economyAsideList[0].list
  //       ? economyAsideList[0].list[0].link
  //       : economyAsideList[0].link;
  //     navigate(`/site-data/${page}/${matchAsideFirstItem}`);
  //   }
  // }, [dataId]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="observation-box">
              <Aside data={economyAsideList} page={page} />
              {dataId && <Content />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Economy;
