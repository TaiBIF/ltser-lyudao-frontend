import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';

import { BannerData } from 'types/common';

import bannerImg from 'image/ecological_bn.png';
import { generateEnvAsideList } from 'data/siteData';

import Main from 'components/SiteData/Main';
import DownloadPopup from 'components/SiteData/DownloadPopup';
import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';

const EnvironmentalObservation = () => {
  const PAGE_NAME = 'SiteData';
  const mainBoxRef = useRef<HTMLDivElement>(null);

  const { list: asideList, isFetchingList: isFetchingAsideList } =
    useRerenderTranslation({ generateList: generateEnvAsideList });

  const { dataId } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const item = paths[paths.length - 1];
  const bannerData: BannerData = {
    title: '環境觀測',
    en: ['Environmental', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const page = bannerData.en.map((v) => v.toLowerCase()).join('-');
  const category = 'native';

  useEffect(() => {
    if (!dataId && !isFetchingAsideList) {
      const matchAsideFirstItem = asideList[0].list
        ? asideList[0].list[0].link
        : asideList[0].link;
      navigate(`/site-data/${page}/${matchAsideFirstItem}`);
    }
  }, [dataId, asideList]);

  useEffect(() => {
    if (mainBoxRef.current) {
      mainBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb ref={mainBoxRef} />
        <div className="contentbox">
          <div className="main-box">
            <div className="observation-box">
              {!isFetchingAsideList && <Aside data={asideList} page={page} />}
              {dataId && (
                <Main
                  item={item}
                  paths={paths}
                  pathname={pathname}
                  PAGE_NAME={PAGE_NAME}
                  category={category}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <DownloadPopup item={item} />
    </>
  );
};

export default EnvironmentalObservation;
