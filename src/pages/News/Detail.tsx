import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import ActionBtns from 'components/News/ActionBtns';

import { BannerData } from 'types/common';
import { TypeItem } from 'types/utils';
import { NewsImageItem, NewsItem } from 'types/news';

import { newsImageList, newsList, newsTypeList } from 'data/news';

import bannerImg from 'image/newsbn.jpg';

const Detail = () => {
  const { newsId } = useParams();
  const [typeData, setTypeData] = useState<TypeItem>({
    id: '',
    title: '',
    colorClass: '',
  });
  const [newsData, setNewsData] = useState<NewsItem>({
    id: 0,
    type: 0,
    userId: '',
    title: '',
    content: '',
    image: [],
    attachments: [],
    created: '',
    modified: '',
  });
  const [imageData, setImageData] = useState<NewsImageItem[]>([]);
  const [coverImage, setCoverImage] = useState<NewsImageItem>({
    id: 0,
    title: '',
    cover: true,
  });

  const isFetchingNews = newsData.id === 0;
  const isFetchingImage = imageData.length === 0;

  useEffect(() => {
    const matchNews = newsId && newsList.find((v) => v.id === Number(newsId));
    if (matchNews) {
      setNewsData({ ...matchNews });
    }
  }, [newsId]);

  useEffect(() => {
    if (!isFetchingNews) {
      const matchType = newsTypeList.find((v) => v.id === newsData.type);
      if (matchType) {
        setTypeData({ ...matchType });
      }
      const matchImage = newsImageList.filter((v) =>
        newsData.image.includes(v.id)
      );
      if (matchImage) {
        setImageData([...matchImage]);
      }
    }
  }, [newsData]);

  useEffect(() => {
    if (!isFetchingImage) {
      const matchCover = imageData.find((v) => v.cover);
      if (matchCover) {
        setCoverImage({ ...matchCover });
      }
    }
  }, [imageData]);

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
        <div className="contentbox">
          <div className="main-box">
            <div className="news-de">
              <div className="title-area">
                <div className="cat-date">
                  <div className={`category ${typeData.colorClass}`}>
                    {typeData.title}
                  </div>
                  <div className="date">{newsData.modified}</div>
                </div>
                <div className="news-title">
                  <h2>{newsData.title}</h2>
                  <div className="greenline" />
                </div>
              </div>
              <div className="editer">
                {/*圖置中*/}
                <div className="center">
                  <img src={coverImage.title} alt={coverImage.title} />
                </div>
                <br />
                <p style={{ whiteSpace: 'pre-line' }}>{newsData.content}</p>
                <br />
                <br />
                {/*左右圖文*/}
                <div className="flex-box">
                  <p style={{ whiteSpace: 'pre-line' }}>{newsData.content}</p>
                  {imageData
                    .filter((v) => !v.cover)
                    .map((v) => {
                      const { id, title } = v;
                      return <img key={id} src={title} alt={title} />;
                    })}
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
