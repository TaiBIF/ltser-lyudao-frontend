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
import { IMAGE_URL } from 'utils/config';
import Images from 'components/News/Images';
import AttachmentItem from 'components/News/AttachmentItem';
import usePage from 'hooks/utils/usePage';

const Detail = () => {
  const bannerData: BannerData = {
    title: '最新消息',
    en: ['News'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const { newsId } = useParams();
  const { getList, getDetail } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const [data, setData] = useState<NewsItem>({
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
  const isFetchingDetail = data.id === 0;

  useEffect(() => {
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    getDetail({
      id: Number(newsId),
      url: NEWS_API_URL,
      setData: setData,
      redirectPath: NEWS_PATH,
    });
  }, [newsId]);

  useEffect(() => {
    if (!isFetchingTypeList && !isFetchingDetail) {
      const matchType = data.type.map((item) =>
        typeList.find((v) => v.id === item)
      );
      setTypes([...matchType]);
    }
  }, [data, typeList]);

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
                  <div className="date">{data.newsDate}</div>
                </div>
                <div className="news-title">
                  <h2>{data.title}</h2>
                  <div className="greenline" />
                </div>
              </div>
              <div className="editer">
                {/*圖置中*/}
                <div className="flex-box">
                  <p style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
                  <img src={`${IMAGE_URL}${data.cover}`} alt="" />
                </div>
                {data.images && <Images data={data.images} />}
                {data.attachments?.map((v, i) => {
                  return <AttachmentItem data={v} i={i} />;
                })}
              </div>
              <ActionBtns
                id={Number(newsId)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                paginationData={paginationData}
                setPaginationData={setPaginationData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
