import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import DateIcon from 'components/News/DateIcon';
import NewsListItem from 'components/News/NewsListItem';

import bannerImg from 'image/newsbn.jpg';

import { BannerData } from 'types/common';

import { NewsItem, NewsActiveState } from 'types/news';

import { newsList, newsTypeList } from 'data/news';
import Pagination from 'components/Pagination';

const News = () => {
  const [filter, setFilter] = useState<NewsActiveState>({
    type: 0,
  });
  const [news, setNews] = useState<NewsItem[]>([]);

  const isAllType = filter.type === 0;

  const handleTypeClick = (id: number | string) => {
    setFilter({ ...filter, type: id });
  };

  useEffect(() => {
    if (isAllType) {
      setNews([...newsList]);
    } else {
      const matchType = newsList.filter((v) => v.type === filter.type);
      setNews([...matchType]);
    }
  }, [filter.type]);

  const bannerData: BannerData = {
    title: '最新消息',
    en: ['News'],
    maskImg: true,
    bgImg: bannerImg,
  };

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
                  {newsTypeList.map((v) => {
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
              <div className="tool-select">
                <p>篩選</p>
                <div className="date-box">
                  <div className="inp-item">
                    <input type="text" placeholder="2020-02-02" />
                    <DateIcon />
                  </div>
                  <span>~</span>
                  <div className="inp-item">
                    <input type="text" placeholder="2020-02-02" />
                    <DateIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="news-list">
              <ul>
                {news.map((v) => {
                  return <NewsListItem key={v.id} data={v} />;
                })}
              </ul>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
