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

  const [filter, setFilter] = useState<{
    keyword: string;
    category: string;
    relate: string;
    year: string;
  }>({
    keyword: '',
    category: '',
    relate: '',
    year: '',
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

  const categoryOptions = [
    { value: '', label: t(`${I18N_KEY_PREFIX}.allOption`) },
    {
      value: 'RESEARCH',
      label: t(`${I18N_KEY_PREFIX}.categories.RESEARCH`),
    },
    {
      value: 'JOURNAL',
      label: t(`${I18N_KEY_PREFIX}.categories.JOURNAL`),
    },
    {
      value: 'THESIS',
      label: t(`${I18N_KEY_PREFIX}.categories.THESIS`),
    },
    { value: 'BOOK', label: t(`${I18N_KEY_PREFIX}.categories.BOOK`) },
    { value: 'EIA', label: t(`${I18N_KEY_PREFIX}.categories.EIA`) },
  ];

  const relateOptions = [
    { value: '', label: t(`${I18N_KEY_PREFIX}.allOption`) },
    { value: 'NATURE', label: t(`${I18N_KEY_PREFIX}.relates.NATURE`) },
    { value: 'SOCIAL', label: t(`${I18N_KEY_PREFIX}.relates.SOCIAL`) },
    { value: 'HYDROLOGY', label: t(`${I18N_KEY_PREFIX}.relates.HYDROLOGY`) },
    { value: 'LITERATURE', label: t(`${I18N_KEY_PREFIX}.relates.LITERATURE`) },
    { value: 'ENERGY', label: t(`${I18N_KEY_PREFIX}.relates.ENERGY`) },
  ];

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1954 }, (_, idx) => {
    const year = String(currentYear - idx);
    return { value: year, label: year };
  });

  const fetchLiterature = (page = currentPage, nextFilter = filter) => {
    const params: Record<string, string | number> = { page };

    if (nextFilter.keyword) {
      params.keyword = nextFilter.keyword;
    }

    if (nextFilter.category) {
      params.category = nextFilter.category;
    }

    if (nextFilter.relate) {
      params.relate = nextFilter.relate;
    }

    if (nextFilter.year) {
      params.year = nextFilter.year;
    }

    getList({
      url: LITERATURE_API_URL,
      setList: setLiteratures,
      params,
      setPaginationData,
    });
  };

  const handleSearchClick = () => {
    setCurrentPage(1);
    fetchLiterature(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextFilter = { ...filter, category: e.currentTarget.value };
    setFilter(nextFilter);
    setCurrentPage(1);
    fetchLiterature(1, nextFilter);
  };

  const handleRelateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextFilter = { ...filter, relate: e.currentTarget.value };
    setFilter(nextFilter);
    setCurrentPage(1);
    fetchLiterature(1, nextFilter);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextFilter = { ...filter, year: e.currentTarget.value };
    setFilter(nextFilter);
    setCurrentPage(1);
    fetchLiterature(1, nextFilter);
  };

  useEffect(() => {
    fetchLiterature(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="literature-filter">
              <div className="filter-item">
                <div className="literature-title">
                  {t(`${I18N_KEY_PREFIX}.keywordLabel`)}
                </div>
                <div className="searchbox-inline">
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
              <div className="filter-item">
                <div className="literature-title">
                  {t(`${I18N_KEY_PREFIX}.yearLabel`)}
                </div>
                <select
                  id="literature-year"
                  value={filter.year}
                  onChange={handleYearChange}
                >
                  <option value="">{t(`${I18N_KEY_PREFIX}.allOption`)}</option>
                  {yearOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-item">
                <div className="literature-title">
                  {t(`${I18N_KEY_PREFIX}.categoryLabel`)}
                </div>
                <select
                  id="literature-category"
                  value={filter.category}
                  onChange={handleCategoryChange}
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-item">
                <div className="literature-title">
                  {t(`${I18N_KEY_PREFIX}.relateLabel`)}
                </div>

                <select
                  id="literature-relate"
                  value={filter.relate}
                  onChange={handleRelateChange}
                >
                  {relateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {!isFetchingList && (
              <ul className="literature-list">
                {literatures.map((v) => {
                  const {
                    id,
                    title,
                    category_display,
                    relate_display,
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
                          <span className="l-tag">{relate_display}</span>
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
