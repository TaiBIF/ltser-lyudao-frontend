import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Pagination from 'components/Pagination';
import SearchIcon from 'components/RelatedLiterature/SearchIcon';

import literatureBannerImg from 'image/literature_bn.png';

import { BannerData } from 'types/common';
import { literatureList } from 'data/literature';
import { LiteratureItem } from 'types/literature';

import useRender from 'hooks/useRender';
import { LITERATURE_API_URL } from 'data/api';

const RelatedLiterature = () => {
  const [filter, setFilter] = useState({
    keyword: '',
  });
  const [literatureList, setLiteratureList] = useState<LiteratureItem[]>([]);
  const [data, setData] = useState<LiteratureItem[]>([]);
  const { getList } = useRender();

  const bannerData: BannerData = {
    title: '相關文獻',
    en: ['Related', 'literature'],
    maskImg: true,
    bgImg: literatureBannerImg,
  };

  const isFetchingList = setLiteratureList.length === 0;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, keyword: e.currentTarget.value });
  };

  useEffect(() => {
    getList({
      url: LITERATURE_API_URL,
      setList: setLiteratureList,
      defaultList: literatureList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingList) {
      const matchKeyword = literatureList.filter((v) =>
        v.name.includes(filter.keyword)
      );
      setData([...matchKeyword]);
    }
  }, [filter.keyword]);

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
                <button>
                  <SearchIcon />
                </button>
              </div>
            </div>
            {!isFetchingList && (
              <ul className="literature-list">
                {data.map((v) => {
                  const { id, name } = v;
                  return <li key={id}>{name}</li>;
                })}
              </ul>
            )}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedLiterature;
