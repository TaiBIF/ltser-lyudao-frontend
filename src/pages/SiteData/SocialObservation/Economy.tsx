import React from 'react';
import { useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Banner from 'components/Banner';
import Aside from 'components/SiteData/Aside/Content';

import { BannerData } from 'types/common';

import bannerImg from 'image/social_bn.png';
import chartImg from 'image/chart-demo.png';

import { economyAsideList } from 'data/siteData';

const Economy = () => {
  const { dataId } = useParams();
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };
  const page = bannerData.en.map((v) => v.toLowerCase()).join('-');
  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="observation-box">
              <Aside data={economyAsideList} page={page} />
              <div className="right-infbox">
                <div className="infbox-title">
                  <div className="titlearea">
                    <h2>
                      辨識出的鳥類紀錄
                      <div className="mark-cir">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                        >
                          <g
                            id="Ellipse_2931"
                            data-name="Ellipse 2931"
                            fill="none"
                            stroke="#e8d06a"
                            strokeWidth={4}
                          >
                            <circle cx={9} cy={9} r={9} stroke="none" />
                            <circle cx={9} cy={9} r={7} fill="none" />
                          </g>
                        </svg>
                      </div>
                    </h2>
                    <div className="line" />
                  </div>
                  <a href="#" className="meta">
                    查看metadata
                  </a>
                </div>
                <div className="chart-box">
                  <img src={chartImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Economy;
