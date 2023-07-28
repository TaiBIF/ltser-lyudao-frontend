import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/News/Item';
import Pagination from 'components/Pagination';
import DateFilter from 'components/News/DateFilter';

import bannerImg from 'image/newsbn.jpg';

import { BannerData } from 'types/common';

import { NewsItem, NewsFilterItem } from 'types/news';

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

  const [filter, setFilter] = useState<NewsFilterItem>({
    type: 0,
    startDate: '',
    endDate: '',
  });

  const [news, setNews] = useState<NewsItem[]>([]);
  const [typeList, setTypeList] = useState<TypeItem[]>([
    {
      id: 1,
      title: '類別1',
    },
    {
      id: 2,
      title: '類別2',
    },
    {
      id: 3,
      title: '類別3',
    },
    {
      id: 4,
      title: '類別4',
    },
  ]);

  const { getList } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const isAllType = filter.type === 0;
  const isFetchingList = news.length === 0;
  const isFetchingTypeList = typeList.length === 0;
  const hasStartDate = filter.startDate !== '';
  const hasEndDate = filter.endDate !== '';

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
    getList({
      url: NEWS_API_URL,
      setList: setNews,
      defaultList: newsList,
      params: {
        page: currentPage,
        filter: !isAllType ? filter.type : null,
        startDate: hasStartDate ? filter.startDate : null,
        endDate: hasEndDate ? filter.endDate : null,
      },
      setPaginationData,
    });
  }, [currentPage, filter]);

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
                    [{ id: 0, title: '全部' }, ...typeList].map((v) => {
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
              <DateFilter filter={filter} setFilter={setFilter} />
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
