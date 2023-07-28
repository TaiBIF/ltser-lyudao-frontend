import React, { Dispatch, SetStateAction, useState } from 'react';

import DateIcon from 'components/News/DateIcon';
import { NewsFilterItem } from 'types/news';

interface DateFilterProps {
  filter: NewsFilterItem;
  setFilter: Dispatch<SetStateAction<NewsFilterItem>>;
}

const DateFilter = (props: DateFilterProps) => {
  const { filter, setFilter } = props;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <>
      <div className="tool-select c-form">
        <p>篩選</p>
        <div className="date-box">
          <div className="inp-item c-form__set">
            <input
              type="date"
              name="startDate"
              className="c-form__date"
              onChange={handleInputChange}
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
            />
            <div className="c-form__icon">
              <DateIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateFilter;
