import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Item from 'components/About/Item';

import { AboutItem } from 'types/about';
import { AttachmentItem } from 'types/about';
import { RelateState } from 'types/utils';

import { tabList } from 'data/home/content';
import { ABOUT_API_URL } from 'data/api';

import useRender from 'hooks/page/useRender';

const About = () => {
  const { aboutId } = useParams();
  const { getDetail } = useRender();
  const { pathname } = useLocation();

  const [data, setData] = useState<AboutItem>({
    id: 0,
    type: '',
    name: '',
    content: '',
    image: '',
    created_at: '',
    updated_at: '',
    attachments: [],
  });
  const [relate, setRelate] = useState<RelateState>({
    type: '',
  });

  const hasData = data.id !== 0;

  useEffect(() => {
    getDetail({
      id: aboutId,
      url: ABOUT_API_URL,
      setData,
    });
  }, [pathname]);

  useEffect(() => {
    if (hasData) {
      const matchCategory = tabList.find((v) => v.id === data.type);
      if (matchCategory) {
        setRelate({ ...data, type: matchCategory.title });
      }
    }
  }, [data]);

  return (
    <>
      <div className="innbox">
        <div className="contentbox">
          <div className="main-box">
            <div className="about-mainbox">
              <div className="leftbox">
                <div className="title-area">
                  <div className="ab-category">{relate.type}</div>
                  <h2>{data.name}</h2>
                </div>
                <p>{data.content}</p>
              </div>
              <div className="rightbox">
                <div className="pic-area">
                  {/*上背景圖*/}
                  <div
                    className="img-area"
                    style={{ backgroundImage: data.image }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*有其他內容的才有下面這塊*/}
        <div className="ab-otherbox">
          <div className="main-box">
            {data.attachments?.map((v) => {
              return <Item key={v.id} data={v} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
