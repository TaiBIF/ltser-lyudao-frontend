import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';
import Content from 'components/SiteData/SocialEconomyData/Content';

import { BannerData } from 'types/common';
import { ContextItem } from 'types/utils';

import bannerImg from 'image/social_bn.png';

import { generateEconomyFishingAsideList } from 'data/siteData';

import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';

const Fishing = () => {
  const PAGE_NAME = 'SiteData';
  const mainBoxRef = useRef<HTMLDivElement>(null);

  const { list: asideList, isFetchingList: isFetchingAsideList } =
    useRerenderTranslation({ generateList: generateEconomyFishingAsideList });

  const { dataId } = useParams();
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };
  const page = bannerData.en.map((v) => v.toLowerCase()).join('-');

  const { pathname } = useLocation();
  const path = pathname.split('/').at(-1);

  useEffect(() => {
    if (mainBoxRef.current) {
      mainBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb ref={mainBoxRef}/>
        <div className="contentbox">
          <div className="main-box">
            <div className="observation-box">
              {!isFetchingAsideList && <Aside data={asideList} page={page} />}
              <Content PAGE_NAME={PAGE_NAME} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fishing;
