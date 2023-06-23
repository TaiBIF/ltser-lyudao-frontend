import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { aboutList, attachmentList, attachmentNameList } from 'data/about';
import { tabList } from 'data/home/content';
import { AboutItem } from 'types/about';
import { RelateState } from 'types/utils';
import AttachmentName from 'components/About/AttachmentName';

const About = () => {
  const { pathname } = useLocation();
  const { aboutId } = useParams();
  const [aboutData, setAboutData] = useState<AboutItem>({
    id: 0,
    type: 0,
    name: '',
    content: '',
    image: '',
    attachmentName: [],
    created: '',
    modified: '',
  });
  const [relate, setRelate] = useState<RelateState>({
    type: '',
  });

  const hasAboutData = aboutData.id !== 0;

  useEffect(() => {
    const matchAbout = aboutList.find((v) => v.id === aboutId);
    if (matchAbout) {
      setAboutData({ ...matchAbout });
    }
  }, [pathname]);

  useEffect(() => {
    if (hasAboutData) {
      const matchCategory = tabList.find((v) => v.id === aboutData.type);
      if (matchCategory) {
        setRelate({ ...aboutData, type: matchCategory.title });
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
                  <div className="ab-category">{relate.type}</div>
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
            {aboutData.attachmentName &&
              aboutData.attachmentName.map((item) => {
                const matchNames = attachmentNameList.find(
                  (v) => v.id === item
                );
                return (
                  matchNames && (
                    <AttachmentName key={matchNames.id} data={matchNames} />
                  )
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
