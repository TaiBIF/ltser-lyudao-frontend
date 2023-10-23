import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';
import bannerImg from 'image/ecological_bn.png';
import Main from 'components/SiteData/Main';
import DownloadPopup from 'components/SiteData/DownloadPopup';

import { BannerData } from 'types/common';

import { generateEcoAsideList } from 'data/siteData';
import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';

const EcologicalObservation = () => {
  const PAGE_NAME = 'SiteData';

  const { list: asideList, isFetchingList: isFetchingAsideList } =
    useRerenderTranslation({ generateList: generateEcoAsideList });

  const { dataId } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const item = paths[paths.length - 1];

  const bannerData: BannerData = {
    title: '環境觀測',
    en: ['Ecological', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const page = bannerData.en.map((v) => v.toLowerCase()).join('-');

  useEffect(() => {
    if (!dataId && !isFetchingAsideList) {
      const matchAsideFirstItem = asideList[0].list
        ? asideList[0].list[0].link
        : asideList[0].link;
      navigate(`/site-data/${page}/${matchAsideFirstItem}`);
    }
  }, [dataId, asideList]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
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

export default EcologicalObservation;
