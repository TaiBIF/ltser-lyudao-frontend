import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Item from 'components/About/Item';

import { AboutItem } from 'types/about';
import { RelateState } from 'types/utils';

import { generateTypeList } from 'data/about';
import { ABOUT_API_URL } from 'data/api';

import useRender from 'hooks/page/useRender';
import { useHeaderContext } from 'context/HeaderContext';
import { IMAGE_URL } from 'utils/config';
import { useLangContext } from 'context/LangContext';

const About = () => {
  const { lang } = useLangContext();

  const tabList = generateTypeList();

  const { categoryId, aboutId } = useParams();
  const { getDetail } = useRender();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { about } = useHeaderContext();

  const [data, setData] = useState<AboutItem>({
    id: 0,
    type: '',
    name: '',
    content: '',
    image: '',
  });
  const [relate, setRelate] = useState<RelateState>({
    type: '',
  });

  const isFetchingData = data.id === 0;
  const hasType = relate.type !== '';

  useEffect(() => {
    if (aboutId) {
      getDetail({
        id: aboutId,
        url: ABOUT_API_URL,
        setData,
      });
    }
  }, [aboutId, pathname, lang]);

  useEffect(() => {
    if (!isFetchingData) {
      const matchCategory = tabList.find((v) => v.id === data.type);
      if (matchCategory) {
        setRelate({ ...data, type: matchCategory.title });
      }
    }
  }, [data]);

  useEffect(() => {
    if (!aboutId) {
      const id = `${categoryId?.split('-')[0]}${categoryId
        ?.split('-')[1]
        .slice(0, 1)
        .toUpperCase()}${categoryId?.split('-')[1].slice(1)}`;
      const aboutById: any = Object.entries(about).find(([key]) => key === id);
      if (aboutById) {
        navigate(`/about/${categoryId}/${aboutById[1][0].id}`);
      }
    }
  }, [aboutId]);

  return (
    <>
      <div className="innbox">
        <div className="contentbox">
          <div className="main-box">
            <div className="about-mainbox">
              <div className="leftbox">
                <div className="title-area">
                  {hasType && <div className="ab-category">{relate.type}</div>}
                  <h2>{!isFetchingData && data.name}</h2>
                </div>
                <p>{!isFetchingData && data.content}</p>
              </div>
              {!isFetchingData && (
                <div className="rightbox">
                  <div className="pic-area">
                    {/*上背景圖*/}
                    <div
                      className="img-area"
                      style={{
                        backgroundImage: `url(${IMAGE_URL}${data.image})`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*有其他內容的才有下面這塊*/}
        <div className="ab-otherbox">
          <div className="main-box">
            {!isFetchingData &&
              data.attachments?.map((v) => {
                return <Item key={v.id} data={v} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
