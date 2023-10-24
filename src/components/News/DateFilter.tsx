import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DateIcon from 'components/News/DateIcon';
import { NewsFilterItem, NewsItem } from 'types/news';
import useRender from 'hooks/page/useRender';
import { NEWS_API_URL } from 'data/api';
import { PaginationDataItem } from 'types/utils';

interface DateFilterProps {
  filter: NewsFilterItem;
  setFilter: Dispatch<SetStateAction<NewsFilterItem>>;
  setNews: Dispatch<SetStateAction<NewsItem[]>>;
  currentPage: number;
  setPaginationData: Dispatch<SetStateAction<PaginationDataItem>>;
  isAllType: boolean;
  I18N_KEY_PREFIX: string;
}

const DateFilter = (props: DateFilterProps) => {
  const {
    filter,
    setFilter,
    setNews,
    currentPage,
    setPaginationData,
    isAllType,
    I18N_KEY_PREFIX,
  } = props;

  const { t } = useTranslation();

  const hasStartDate = filter.startDate !== '';
  const hasEndDate = filter.endDate !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.currentTarget.name]: e.currentTarget.value });
  };

  const { getList } = useRender();

  const handleDateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getList({
      url: NEWS_API_URL,
      setList: setNews,
      params: {
        page: currentPage,
        // tag: !isAllType ? filter.type : null,
        startDate: hasStartDate ? filter.startDate : null,
        endDate: hasEndDate ? filter.endDate : null,
      },
      setPaginationData,
    });
  };

  return (
    <>
      <form className="tool-select c-form" onSubmit={handleDateSubmit}>
        <div className="date-box">
          <div className="inp-item c-form__set">
            <input
              type="date"
              name="startDate"
              className="c-form__date"
              onChange={handleInputChange}
              value={filter.startDate}
            />
            <div className="c-form__icon">
              <DateIcon />
            </div>
          </div>
          <span>~</span>
          <div className="inp-item c-form__set">
            <input
              type="date"
              name="endDate"
              className="c-form__date"
              onChange={handleInputChange}
              value={filter.endDate}
            />
            <div className="c-form__icon">
              <DateIcon />
            </div>
          </div>
        </div>
        <button type="submit">{t(`${I18N_KEY_PREFIX}.filterBtn`)}</button>
      </form>
    </>
  );
};

export default DateFilter;
