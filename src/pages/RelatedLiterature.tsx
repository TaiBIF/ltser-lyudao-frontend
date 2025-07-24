import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Pagination from 'components/Pagination/Content';
import SearchIcon from 'components/RelatedLiterature/SearchIcon';

import literatureBannerImg from 'image/literature_bn.png';

import { BannerData } from 'types/common';
import { LiteratureItem } from 'types/literature';

import { LITERATURE_API_URL } from 'data/api';

import useRender from 'hooks/page/useRender';
import usePage from 'hooks/utils/usePage';

const RelatedLiterature = () => {
  const PAGE_NAME = 'RelatedLiterature';
  const I18N_KEY_PREFIX = `${PAGE_NAME}`;

  const { t } = useTranslation();

  const [filter, setFilter] = useState({
    keyword: '',
  });
  const [literatures, setLiteratures] = useState<LiteratureItem[]>([]);
  const { getList } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const bannerData: BannerData = {
    title: '相關文獻',
    en: ['Related', 'literature'],
    maskImg: true,
    bgImg: literatureBannerImg,
  };

  const isFetchingList = literatures.length === 0;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, keyword: e.currentTarget.value });
  };

  const handleSearchClick = () => {
    getList({
      url: LITERATURE_API_URL,
      setList: setLiteratures,
      // defaultList: literatureList,
      params: { keyword: filter.keyword },
      setPaginationData,
    });
  };

  useEffect(() => {
    getList({
      url: LITERATURE_API_URL,
      setList: setLiteratures,
      // defaultList: literatureList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

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
                  placeholder={t(`${I18N_KEY_PREFIX}.keywordText`)}
                  value={filter.keyword}
                  onChange={handleSearchChange}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSearchClick();
                    }
                  }}
                />
                <button type="button" onClick={handleSearchClick}>
                  <SearchIcon />
                </button>
              </div>
            </div>
            {!isFetchingList && (
              <ul className="literature-list">
                {literatures.map((v) => {
                  const {
                    id,
                    title,
                    category_display,
                    url,
                    unit,
                    author,
                    year,
                  } = v;
                  return (
                    <li key={id}>
                      <div>
                        <div>
                          <span className="l-tag">{category_display}</span>
                        </div>

                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="l-url"
                          >
                            {title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                              />
                            </svg>
                          </a>
                        ) : (
                          <div>{title}</div>
                        )}
                      </div>
                      <div className="l-right-text">
                        {author}（{year}）
                      </div>
                      <div className="l-right-text">{unit}</div>
                    </li>
                  );
                })}
              </ul>
            )}
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

export default RelatedLiterature;
