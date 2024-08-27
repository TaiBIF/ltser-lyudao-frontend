import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DateIcon from 'components/News/DateIcon';
import { NewsFilterItem, NewsItem } from 'types/news';
import useRender from 'hooks/page/useRender';
import { NEWS_API_URL } from 'data/api';
import { PaginationDataItem } from 'types/utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  const { t, i18n } = useTranslation();
  const placeholderText = i18n.language === 'zh-tw' ? '年-月-日' : 'yyyy-mm-dd';

  const hasStartDate = filter.startDate !== '';
  const hasEndDate = filter.endDate !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleStartDateChange = (date: Date | null) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      startDate: date ? date.toISOString().split('T')[0] : '',
    }));
  };

  const handleEndDateChange = (date: Date | null) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      endDate: date ? date.toISOString().split('T')[0] : '',
    }));
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
            <DatePicker
              selected={filter.startDate ? new Date(filter.startDate) : null}
              onChange={handleStartDateChange}
              placeholderText={placeholderText}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              dateFormatCalendar="MMMM"
              yearDropdownItemNumber={30}
              scrollableYearDropdown
              className="c-form__date"
            />
            <div className="c-form__icon">
              <DateIcon />
            </div>
          </div>
          <span>～</span>
          <div className="inp-item c-form__set">
            <DatePicker
              selected={filter.endDate ? new Date(filter.endDate) : null}
              onChange={handleEndDateChange}
              placeholderText={placeholderText}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              dateFormatCalendar="MMMM"
              yearDropdownItemNumber={30}
              scrollableYearDropdown
              className="c-form__date"
            />
            <div className="c-form__icon">
              <DateIcon />
            </div>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          {t(`${I18N_KEY_PREFIX}.filterBtn`)}
        </button>
      </form>
    </>
  );
};

export default DateFilter;
