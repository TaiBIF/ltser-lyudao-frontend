import React, { ReactNode, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Aside from 'components/SiteData/Aside/Content';
import Title from 'components/SiteData/SocialEconomyData/Title';

import bannerImg from 'image/social_bn.png';
import { BannerData } from 'types/common';

import { generateEconomyDataAsideList } from 'data/siteData';
import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';
import { AsideItem } from 'types/siteData';

import { SocialEconomyPageMap } from 'pages/SiteData/SocialObservation/SocialEconomyPageMap';

const SocialObservation = () => {
  const PAGE_NAME = 'SiteData';
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social-observation', 'socioeconomic-data'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const { list: asideList, isFetchingList: isFetchingAsideList } =
    useRerenderTranslation({ generateList: generateEconomyDataAsideList });
  const { dataId } = useParams();
  const navigate = useNavigate();

  const page = bannerData.en.map((v) => v.toLowerCase()).join('/');

  const { pathname } = useLocation();
  const path = pathname.split('/').at(-1);

  const matchTitle =
    !isFetchingAsideList &&
    asideList
      .flatMap((v: AsideItem) => [v, ...(v.list || [])])
      .find((v: AsideItem) => v.link === path)?.title;

  const content =
    dataId && SocialEconomyPageMap[dataId] ? (
      SocialEconomyPageMap[dataId]
    ) : (
      <div>404 - 頁面不存在</div>
    );

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
              <div className="right-infbox">
                <Title text={matchTitle} />
                <div className="u-section">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialObservation;
