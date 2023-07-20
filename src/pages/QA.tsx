import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Tabs from 'components/QA/Tabs';
import Item from 'components/QA/Item';
import Pagination from 'components/Pagination';

import bannerImg from 'image/qa_bn.png';

import { BannerData } from 'types/common';
import { QAItem } from 'types/qa';

import { QA_API_URL } from 'data/api';
import { qaList } from 'data/qa';

import useRender from 'hooks/page/useRender';
import usePage from 'hooks/utils/usePage';

const QA = () => {
  const { getList } = useRender();
  const [active, setActive] = useState<number | string>(0);
  const [qas, setQas] = useState<QAItem[]>([]);
  const [data, setData] = useState<QAItem[]>([]);
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const bannerData: BannerData = {
    title: '常見Q&A',
    en: ['question', 'and answer'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const isFetchingList = qas.length === 0;
  const isAllType = active === 0;

  useEffect(() => {
    getList({
      url: QA_API_URL,
      setList: setQas,
      defaultList: qaList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  useEffect(() => {
    if (!isFetchingList) {
      if (isAllType) {
        setData([...qas]);
      } else {
        const matchType = qas.filter((v) => v.type_id === active);
        setData([...matchType]);
      }
    }
  }, [qas, active]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <Tabs active={active} setActive={setActive} />
            {!isFetchingList && (
              <ul className="qa-list">
                {data.map((v) => {
                  return <Item key={v.id} data={v} />;
                })}
              </ul>
            )}
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginationData={paginationData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QA;
