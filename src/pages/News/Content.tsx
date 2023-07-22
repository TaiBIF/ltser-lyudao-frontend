import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/News/Item';
import Pagination from 'components/Pagination';
import DateFilter from 'components/News/DateFilter';

import bannerImg from 'image/newsbn.jpg';

import { BannerData } from 'types/common';

import { NewsItem, NewsActiveState } from 'types/news';

import { newsList, newsTypeList } from 'data/news';

import usePage from 'hooks/utils/usePage';
import useRender from 'hooks/page/useRender';
import { NEWS_API_URL, NEWS_TYPE_API_URL } from 'data/api';
import { TypeItem } from 'types/utils';

const Content = () => {
  const bannerData: BannerData = {
    title: '最新消息',
    en: ['News'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const [filter, setFilter] = useState<NewsActiveState>({
    type: 0,
  });
  const [news, setNews] = useState<NewsItem[]>([]);
  const [typeList, setTypeList] = useState<TypeItem[]>([]);

  const { getList } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const isAllType = filter.type === 0;
  const isFetchingList = news.length === 0;
  const isFetchingTypeList = typeList.length === 0;

  const handleTypeClick = (id: number | string) => {
    setFilter({ ...filter, type: id });
  };

  useEffect(() => {
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingTypeList) {
      setTypeList([{ id: 0, title: '全部' }, ...typeList]);
    }
  }, [typeList]);

  useEffect(() => {
    getList({
      url: NEWS_API_URL,
      setList: setNews,
      defaultList: newsList,
      params: { page: currentPage, filter: !isAllType ? filter.type : null },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <div className="tool-area">
              <div className="category-box">
                <ul>
                  {/*目前位置給now*/}
                  {!isFetchingTypeList &&
                    typeList.map((v) => {
                      const { id, title } = v;
                      return (
                        <li
                          key={id}
                          className={`${filter.type === id ? 'now' : ''}`}
                          onClick={() => {
                            if (id !== undefined) {
                              handleTypeClick(id);
                            }
                          }}
                        >
                          {title}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <DateFilter />
            </div>
            <div className="news-list">
              <ul>
                {!isFetchingList &&
                  news.map((v) => {
                    return <Item key={v.id} data={v} typeList={typeList} />;
                  })}
              </ul>
            </div>
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

export default Content;
