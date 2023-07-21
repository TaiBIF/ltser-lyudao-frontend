import React from 'react';
import { Link } from 'react-router-dom';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Pagination from 'components/Pagination';

import bannerImg from 'image/social_bn.png';

import { BannerData } from 'types/common';

import { interviewList } from 'data/siteData';

import usePage from 'hooks/utils/usePage';

const Content = () => {
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <div className="chose-itembox">
              <div className="item-set2">
                <div className="input-item">
                  <div className="title">
                    關鍵字
                    <div className="line" />
                  </div>
                  <input type="text" placeholder="請輸入關鍵字" />
                </div>
                <div className="input-item">
                  <div className="title">
                    選擇類別
                    <div className="line" />
                  </div>
                  <select>
                    <option>請選擇</option>
                  </select>
                </div>
              </div>
              <div className="check-itembox">
                <div className="title">
                  可勾選的項目
                  <div className="line" />
                </div>
                <div className="itembox">
                  <label className="check-item">
                    項目一
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="check-item">
                    項目一
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="check-item">
                    項目一
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="check-item">
                    項目一
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="send-btnarea">
                <button className="clearall">清除</button>
                <button className="searchall">搜尋</button>
              </div>
            </div>
            <ul className="soci-list">
              {interviewList.map((v) => {
                const { id, date, title, tags } = v;
                return (
                  <li key={id}>
                    <div className="datebox">
                      {date}
                      <div className="line" />
                    </div>
                    <Link
                      to={`/site-data/social-observation/social-interview-data/${id}`}
                      className="titlebox"
                    >
                      {title}
                    </Link>
                    <div className="tag-box">
                      {tags.map((tag) => {
                        return (
                          <a href="/" className="tagitem">
                            #{tag}
                          </a>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginationData={paginationData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
