import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';

import bannerImg from 'image/social_bn.png';

import { BannerData } from 'types/common';
import { Link, useParams } from 'react-router-dom';
import { interviewList } from 'data/siteData';
import { InterviewItem } from 'types/siteData';
import TagIcon from 'components/SiteData/Interview/TagIcon';
import ActionBtns from 'components/SiteData/Interview/ActionBtns';

const Detail = () => {
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState<InterviewItem>({
    id: 0,
    date: '',
    title: '',
    content: '',
    target: '',
    type: 0,
    image: '',
    tags: [],
  });

  const hasTags = interviewData.tags.length !== 0;

  useEffect(() => {
    const matchInterview =
      interviewId && interviewList.find((v) => v.id === Number(interviewId));
    if (matchInterview) {
      setInterviewData({ ...matchInterview });
    }
  }, [interviewId]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="news-de soci-de">
              <div className="title-area">
                <div className="cat-date">
                  <div className="date">{interviewData.date}</div>
                </div>
                <div className="news-title">
                  <h2>{interviewData.title}</h2>
                  <div className="greenline" />
                </div>
              </div>
              {hasTags && (
                <div className="tag-box">
                  <div className="icon">
                    <TagIcon />
                  </div>
                  {interviewData.tags.map((v, i) => {
                    return (
                      <a key={i} href="/" className="tagitem">
                        #{v}
                      </a>
                    );
                  })}
                </div>
              )}
              <div className="editer">
                <p style={{ whiteSpace: 'pre-line' }}>
                  {interviewData.content}
                </p>
                <br />
                <br />
                {/*左右圖文*/}
                <div className="flex-box">
                  <p style={{ whiteSpace: 'pre-line' }}>
                    {interviewData.content}
                  </p>
                  <img src={interviewData.image} alt="" />
                </div>
              </div>
              <div className="btn-area">
                <ActionBtns />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
