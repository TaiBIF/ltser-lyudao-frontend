import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import ActionBtns from 'components/News/ActionBtns';

import { BannerData } from 'types/common';
import { TypeItem } from 'types/utils';
import { NewsImageItem, NewsItem } from 'types/news';

import { newsList, newsTypeList } from 'data/news';

import bannerImg from 'image/newsbn.jpg';
import useRender from 'hooks/page/useRender';
import { NEWS_API_URL, NEWS_PATH, NEWS_TYPE_API_URL } from 'data/api';

const Detail = () => {
  const bannerData: BannerData = {
    title: '最新消息',
    en: ['News'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const { newsId } = useParams();
  const { getList, getDetail } = useRender();

  const [newsData, setNewsData] = useState<NewsItem>({
    id: 0,
    type: [],
    title: '',
    content: ``,
    newsDate: '',
    user: 0,
    user_email: '',
    cover: '',
    images: [],
    attachments: [],
  });
  const [typeList, setTypeList] = useState<TypeItem[]>([]);
  const [types, setTypes] = useState<any[]>([]);

  const isFetchingTypeList = typeList.length === 0;
  const isFetchingDetail = newsData.id === 0;
  const hasImages = newsData.images?.length !== 0;

  useEffect(() => {
    getDetail({
      id: Number(newsId),
      url: NEWS_API_URL,
      setData: setNewsData,
      redirectPath: NEWS_PATH,
    });
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingTypeList && !isFetchingDetail) {
      const matchType = newsData.type.map((item) =>
        typeList.find((v) => v.id === item)
      );
      setTypes([...matchType]);
    }
  }, [newsData, typeList]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="news-de">
              <div className="title-area">
                <div className="cat-date">
                  {types.map((v, i) => {
                    return (
                      <div key={i} className="category e-tag" data-color={v.id}>
                        {v.title}
                      </div>
                    );
                  })}
                  <div className="date">{newsData.newsDate}</div>
                </div>
                <div className="news-title">
                  <h2>{newsData.title}</h2>
                  <div className="greenline" />
                </div>
              </div>
              <div className="editer">
                {/*圖置中*/}
                {hasImages && (
                  <div className="center">
                    <img src={newsData.cover} alt="" />
                  </div>
                )}
                <br />
                <p style={{ whiteSpace: 'pre-line' }}>{newsData.content}</p>
                <br />
                <br />
                {/*左右圖文*/}
                <div className="flex-box">
                  <p style={{ whiteSpace: 'pre-line' }}>{newsData.content}</p>
                  {hasImages && <img src={newsData.cover} alt="" />}
                </div>
              </div>
              <ActionBtns id={Number(newsId)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
