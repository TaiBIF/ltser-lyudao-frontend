import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { aboutList } from 'data/about';
import { tabList } from 'data/home';
import { ArticleItem } from 'types/about';

const About = () => {
  const { pathname } = useLocation();
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState<ArticleItem>({
    id: '',
    category: 0,
    title: '',
    content: '',
    img: '',
    sections: [],
    categoryTitle: '',
  });

  const hasArticleData = articleData.id !== '';

  useEffect(() => {
    const matchArticle = aboutList.find((v) => v.id === articleId);
    if (matchArticle) {
      setArticleData({ ...matchArticle });
    }
  }, [pathname]);

  useEffect(() => {
    if (hasArticleData) {
      const matchCategory = tabList.find((v) => v.id === articleData.category);
      if (matchCategory) {
        setArticleData({ ...articleData, categoryTitle: matchCategory.title });
      }
    }
  }, [articleData]);

  return (
    <>
      <div className="innbox">
        <div className="contentbox">
          <div className="main-box">
            <div className="about-mainbox">
              <div className="leftbox">
                <div className="title-area">
                  <div className="ab-category">{articleData.categoryTitle}</div>
                  <h2>{articleData.title}</h2>
                </div>
                <p>{articleData.content}</p>
              </div>
              <div className="rightbox">
                <div className="pic-area">
                  {/*上背景圖*/}
                  <div
                    className="img-area"
                    style={{ backgroundImage: articleData.img }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*有其他內容的才有下面這塊*/}
        <div className="ab-otherbox">
          <div className="main-box">
            {articleData.sections &&
              articleData.sections.map((v) => {
                const { id, title, content, imgs } = v;
                return (
                  <div key={id} className="ab-item">
                    <div className="titlebox">{title}</div>
                    <div className="editer-area">
                      <p className="center marb_20">{content}</p>
                      <div className="main-1280">
                        {imgs?.map((img, i) => {
                          const isLastItem = i === imgs.length - 1;
                          return (
                            <img
                              className={isLastItem ? '' : 'marb_20'}
                              src={img}
                              alt=""
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
