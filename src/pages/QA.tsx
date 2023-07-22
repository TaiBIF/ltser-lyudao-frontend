import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Tabs from 'components/QA/Tabs';
import Item from 'components/QA/Item';
import Pagination from 'components/Pagination';

import bannerImg from 'image/qa_bn.png';

import { BannerData } from 'types/common';
import { FilterItem, QAItem } from 'types/qa';

import { QA_API_URL } from 'data/api';
import { qaList } from 'data/qa';

import useRender from 'hooks/page/useRender';
import usePage from 'hooks/utils/usePage';

const QA = () => {
  const { getList } = useRender();
  const [filter, setFilter] = useState<FilterItem>({
    type: 0,
  });
  const [qas, setQas] = useState<QAItem[]>([]);
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const bannerData: BannerData = {
    title: '常見Q&A',
    en: ['question', 'and answer'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const isFetchingList = qas.length === 0;
  const isAllType = filter.type === 0;

  useEffect(() => {
    getList({
      url: QA_API_URL,
      setList: setQas,
      defaultList: qaList,
      params: { page: currentPage, tag: !isAllType ? filter.type : null },
      setPaginationData,
    });
  }, [currentPage, filter.type]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <Tabs filter={filter} setFilter={setFilter} />
            {!isFetchingList && (
              <ul className="qa-list">
                {qas.map((v) => {
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
