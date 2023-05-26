import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { aboutList } from 'data/about';
import { tabList } from 'data/home';
import { AboutItem } from 'types/about';

const About = () => {
  const { pathname } = useLocation();
  const { aboutId } = useParams();
  const [aboutData, setAboutData] = useState<AboutItem>({
    id: 0,
    type: 0,
    name: '',
    content: '',
    image: '',
    sections: [],
    created: '',
    modified: '',
    typeTitle: '',
  });

  const hasArticleData = aboutData.id !== 0;

  useEffect(() => {
    const matchAbout = aboutList.find((v) => v.id === aboutId);
    console.log(matchAbout);
    if (matchAbout) {
      setAboutData({ ...matchAbout });
    }
  }, [pathname]);

  useEffect(() => {
    if (hasArticleData) {
      const matchCategory = tabList.find((v) => v.id === aboutData.type);
      if (matchCategory) {
        setAboutData({ ...aboutData, typeTitle: matchCategory.title });
      }
    }
  }, [aboutData]);

  return (
    <>
      <div className="innbox">
        <div className="contentbox">
          <div className="main-box">
            <div className="about-mainbox">
              <div className="leftbox">
                <div className="title-area">
                  <div className="ab-category">{aboutData.typeTitle}</div>
                  <h2>{aboutData.name}</h2>
                </div>
                <p>{aboutData.content}</p>
              </div>
              <div className="rightbox">
                <div className="pic-area">
                  {/*上背景圖*/}
                  <div
                    className="img-area"
                    style={{ backgroundImage: aboutData.image }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*有其他內容的才有下面這塊*/}
        <div className="ab-otherbox">
          <div className="main-box">
            {aboutData.sections &&
              aboutData.sections.map((section) => {
                const { id, attachments_name, attachments } = section;
                return (
                  <div key={id} className="ab-item">
                    <div className="titlebox">{attachments_name}</div>
                    {attachments.map((attatchment, i) => {
                      const { id, type, content } = attatchment;
                      const isLastItem = i === attachments.length - 1;
                      const renderContent = () => {
                        switch (type) {
                          case 'text':
                            return <p className="center marb_20">{content}</p>;
                          case 'image':
                            return (
                              <div className="main-1280">
                                <img
                                  className={isLastItem ? '' : 'marb_20'}
                                  src={content}
                                  alt=""
                                />
                              </div>
                            );
                        }
                      };
                      return (
                        <div key={id} className="editer-area">
                          {renderContent()}
                        </div>
                      );
                    })}
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
