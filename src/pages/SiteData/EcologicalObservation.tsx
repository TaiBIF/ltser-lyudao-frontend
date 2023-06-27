import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';
import Title from 'components/SiteData/Title';
import Chart from 'components/SiteData/Chart';
import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import DownloadPopup from 'components/SiteData/DownloadPopup';

import { BannerData } from 'types/common';

import bannerImg from 'image/ecological_bn.png';
import { ecoAsideList } from 'data/siteData';

import { useEcoContext } from 'context/EcoContext';

const EcologicalObservation = () => {
  const { show, setShow } = useEcoContext();
  const { dataId } = useParams();
  const navigate = useNavigate();
  const bannerData: BannerData = {
    title: '聯絡我們',
    en: ['Ecological', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };

  useEffect(() => {
    if (!dataId) {
      navigate('/site-data/ecological-observation/otolith');
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
      <DownloadPopup />
    </>
  );
};

export default EcologicalObservation;
