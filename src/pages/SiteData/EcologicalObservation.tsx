import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';
import bannerImg from 'image/ecological_bn.png';

import { BannerData } from 'types/common';

import { ecoAsideList } from 'data/siteData';
import Main from 'components/SiteData/Main';
import DownloadPopup from 'components/SiteData/DownloadPopup';

const EcologicalObservation = () => {
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
    if (!dataId) {
      const matchAsideFirstItem = ecoAsideList[0].list
        ? ecoAsideList[0].list[0].link
        : ecoAsideList[0].link;
      navigate(`/site-data/${page}/${matchAsideFirstItem}`);
    }
  }, [dataId]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="observation-box">
              <Aside data={ecoAsideList} page={page} />
              {dataId && <Main item={item} paths={paths} pathname={pathname} />}
            </div>
          </div>
        </div>
      </div>
      <DownloadPopup item={item} />
    </>
  );
};

export default EcologicalObservation;
