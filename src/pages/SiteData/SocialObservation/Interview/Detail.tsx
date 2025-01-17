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
import useRender from 'hooks/page/useRender';

const Detail = () => {
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState<InterviewItem[]>([]);

  const { getSocialObservationContent } = useRender();

  const [selectedInterview, setSelectedInterview] = useState<InterviewItem | null>(null);

  useEffect(() => {
    getSocialObservationContent({
      url: `social_observation/social_interview?id=${interviewId}`,
      setList: (responseData: { [key: string]: any }) => {
        setSelectedInterview(responseData.data[0]);
      },
    });
  }, [interviewId, interviewData]); 

  const hasTags = selectedInterview && selectedInterview.tag.length !== 0;

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
                  <div className="date">{selectedInterview && selectedInterview.time}</div>
                </div>
                <div className="news-title">
                  <h2>{selectedInterview && selectedInterview.dataID}</h2>
                  <div className="greenline" />
                </div>
              </div>
              {hasTags && (
                <div className="tag-box">
                  <div className="icon">
                    <TagIcon />
                  </div>
                  {selectedInterview && selectedInterview.tag.map((v, i) => {
                    return (
                      <a key={i} className="tagitem">
                        #{v}
                      </a>
                    );
                  })}
                </div>
              )}
              <div className="editer">
                <p>受訪對象：{selectedInterview && selectedInterview.participant_type}</p>
                <p>CAP議題：{selectedInterview && selectedInterview.CAP_issue}</p>
                <p style={{ marginBottom: 20 }}>在地議題：{selectedInterview && selectedInterview.local_issue}</p>
                <p style={{ whiteSpace: 'pre-line' }}>
                  {selectedInterview && selectedInterview.text}
                </p>
                <br />
                <br />
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
