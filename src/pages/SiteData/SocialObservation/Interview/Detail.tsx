import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Pagination from 'components/Pagination';

import bannerImg from 'image/social_bn.png';

import { BannerData } from 'types/common';
import { Link, useParams } from 'react-router-dom';
import { interviewList } from 'data/siteData';
import { InterviewItem } from 'types/siteData';
import NextIcon from 'components/NextIcon';
import PrevIcon from 'components/PrevIcon';

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
              <div className="tag-box">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29.999"
                    height={30}
                    viewBox="0 0 29.999 30"
                  >
                    <g
                      id="Group_7709"
                      data-name="Group 7709"
                      transform="translate(0)"
                    >
                      <g id="Group_7729" data-name="Group 7729">
                        <path
                          id="Path_15856"
                          data-name="Path 15856"
                          d="M30,7.65c0,1.25,0,2.5,0,3.749a6.809,6.809,0,0,1-2.083,5.018q-3.867,3.865-7.736,7.727c-1.584,1.582-3.163,3.17-4.754,4.745a3.5,3.5,0,0,1-5.128-.011c-.532-.528-1.061-1.06-1.59-1.591L1.2,19.77a3.525,3.525,0,0,1,0-5.307Q7.344,8.317,13.478,2.169A7.01,7.01,0,0,1,18.713,0c2.562.019,5.124,0,7.686.007A3.479,3.479,0,0,1,29.959,3,3.934,3.934,0,0,1,30,3.651q.005,2,0,4M22.374,2.339c-1.208,0-2.416.014-3.623,0a4.8,4.8,0,0,0-3.633,1.5Q9.01,9.99,2.874,16.111a1.217,1.217,0,0,0,0,2.013q4.523,4.532,9.048,9.061a1.191,1.191,0,0,0,1.9,0q6.222-6.212,12.442-12.425a4.607,4.607,0,0,0,1.4-3.393q0-3.841,0-7.683a1.208,1.208,0,0,0-1.356-1.343H22.374"
                          transform="translate(0 0)"
                          fill="#529a81"
                        />
                        <path
                          id="Path_15857"
                          data-name="Path 15857"
                          d="M386.8,103.722a3.51,3.51,0,1,1-3.528,3.471,3.512,3.512,0,0,1,3.528-3.471m-.029,2.335a1.171,1.171,0,1,0,1.186,1.156,1.167,1.167,0,0,0-1.186-1.156"
                          transform="translate(-365.274 -98.852)"
                          fill="#529a81"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                {interviewData.tags.map((v, i) => {
                  return (
                    <a key={i} href="/" className="tagitem">
                      #{v}
                    </a>
                  );
                })}
              </div>
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
                <a href="/">
                  <PrevIcon />
                  <p>上一則</p>
                </a>
                <Link
                  to={`/site-data/social-observation/social-interview-data/`}
                >
                  回列表
                </Link>
                <NextIcon />
                <a href="/">
                  <p>下一則</p>
                  <NextIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
