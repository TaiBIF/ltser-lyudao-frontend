import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Pagination from 'components/Pagination';
import SearchIcon from 'components/RelatedLiterature/SearchIcon';

import literatureBannerImg from 'image/literature_bn.png';

import { BannerData } from 'types/common';
import { LiteratureItem } from 'types/literature';

import { LITERATURE_API_URL } from 'data/api';
import { literatureList } from 'data/literature';

import useRender from 'hooks/page/useRender';
import usePage from 'hooks/utils/usePage';

const RelatedLiterature = () => {
  const [filter, setFilter] = useState({
    keyword: '',
  });
  const [literatures, setLiteratures] = useState<LiteratureItem[]>([]);
  const [data, setData] = useState<LiteratureItem[]>([]);
  const { getList } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const bannerData: BannerData = {
    title: '相關文獻',
    en: ['Related', 'literature'],
    maskImg: true,
    bgImg: literatureBannerImg,
  };

  const isFetchingList = literatures.length === 0;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, keyword: e.currentTarget.value });
  };

  const handleSearchClick = () => {
    getList({
      url: LITERATURE_API_URL,
      setList: setLiteratures,
      defaultList: literatureList,
      params: { page: currentPage, keyword: filter.keyword },
      setPaginationData,
    });
  };

  useEffect(() => {
    getList({
      url: LITERATURE_API_URL,
      setList: setLiteratures,
      defaultList: literatureList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="search-centerbox">
              <div className="searchbox">
                <input
                  type="text"
                  placeholder="關鍵字查詢"
                  value={filter.keyword}
                  onChange={handleSearchChange}
                />
                <button type="button" onClick={handleSearchClick}>
                  <SearchIcon />
                </button>
              </div>
            </div>
            {!isFetchingList && (
              <ul className="literature-list">
                {literatures.map((v) => {
                  const { id, name } = v;
                  return <li key={id}>{name}</li>;
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

export default RelatedLiterature;
