import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';
import Content from 'components/SiteData/Economy/Content';

import { BannerData } from 'types/common';
import { ContextItem } from 'types/utils';

import bannerImg from 'image/social_bn.png';

import { generateEconomyAsideList } from 'data/siteData';

import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';

const Economy = () => {
  const PAGE_NAME = 'SiteData';

  const { list: asideList, isFetchingList: isFetchingAsideList } =
    useRerenderTranslation({ generateList: generateEconomyAsideList });

  const { dataId } = useParams();
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
              {!isFetchingAsideList && <Aside data={asideList} page={page} />}
              {dataId && <Content PAGE_NAME={PAGE_NAME} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Economy;
