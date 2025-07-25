import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/News/Item';
import Pagination from 'components/Pagination/Content';
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
  const PAGE_NAME = 'News';
  const I18N_KEY_PREFIX = `${PAGE_NAME}`;

  const { t } = useTranslation();

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
  const [typeList, setTypeList] = useState<TypeItem[]>([]);

  const { getList } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const isAllType = filter.type === 0;
  const isFetchingList = news.length === 0;
  const isFetchingTypeList = typeList.length === 0;
  const hasType = filter.type !== '';
  const hasDate = filter.startDate !== '' || filter.endDate !== '';

  const handleTypeClick = (id: number | string) => {
    setFilter({ ...filter, type: id });
  };

  useEffect(() => {
    if (hasDate) {
      setFilter({ ...filter, type: '' });
    }
  }, [filter.startDate, filter.endDate]);

  useEffect(() => {
    if (hasType) {
      setFilter({ ...filter, startDate: '', endDate: '' });
    }
  }, [filter.type]);

  useEffect(() => {
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    if (hasType) {
      getList({
        url: NEWS_API_URL,
        setList: setNews,
        defaultList: newsList,
        params: {
          page: currentPage,
          tag: !isAllType ? filter.type : null,
        },
        setPaginationData,
      });
    }
  }, [currentPage, filter.type]);

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
                    [
                      { id: 0, title: t(`${I18N_KEY_PREFIX}.allTabBtn`) },
                      ...typeList,
                    ].map((v) => {
                      const { id, title } = v;
                      return (
                        <li
                          key={id}
                          className={`${filter.type === id ? 'now' : ''}`}
                          onClick={() => {
                            handleTypeClick(Number(id));
                          }}
                        >
                          {title}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <DateFilter
                filter={filter}
                setFilter={setFilter}
                setNews={setNews}
                currentPage={currentPage}
                setPaginationData={setPaginationData}
                isAllType={isAllType}
                I18N_KEY_PREFIX={I18N_KEY_PREFIX}
              />
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
