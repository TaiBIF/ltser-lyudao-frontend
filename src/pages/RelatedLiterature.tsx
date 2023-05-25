import React, { useState, useEffect } from 'react';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Pagination from 'components/Pagination';

import literatureBannerImg from 'image/literature_bn.png';

import { BannerData } from 'types/common';
import { literatureList } from 'data/literature';
import { LiteratureItem } from 'types/literature';

const RelatedLiterature = () => {
  const [filter, setFilter] = useState({
    keyword: '',
  });
  const [data, setData] = useState<LiteratureItem[]>([]);
  const bannerData: BannerData = {
    title: '相關文獻',
    en: ['Related', 'literature'],
    maskImg: true,
    bgImg: literatureBannerImg,
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, keyword: e.currentTarget.value });
  };

  useEffect(() => {
    const matchKeyword = literatureList.filter((v) =>
      v.name.includes(filter.keyword)
    );
    setData([...matchKeyword]);
  }, [filter.keyword]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="search-centerbox">
              <div className="searchbox">
                <input
                  type="text"
                  placeholder="關鍵字查詢"
                  value={filter.keyword}
                  onChange={handleSearchChange}
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.53"
                    height="21.53"
                    viewBox="0 0 21.53 21.53"
                  >
                    <g
                      id="Group_7726"
                      data-name="Group 7726"
                      transform="translate(-1619 -631)"
                    >
                      <g
                        id="Ellipse_2947"
                        data-name="Ellipse 2947"
                        transform="translate(1619 631)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeWidth={2}
                      >
                        <circle cx="8.512" cy="8.512" r="8.512" stroke="none" />
                        <circle cx="8.512" cy="8.512" r="7.512" fill="none" />
                      </g>
                      <line
                        id="Line_312"
                        data-name="Line 312"
                        x2="5.478"
                        y2="5.475"
                        transform="translate(1633.638 645.641)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeWidth={2}
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <ul className="literature-list">
              {data.map((v) => {
                const { id, name } = v;
                return <li key={id}>{name}</li>;
              })}
            </ul>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedLiterature;
