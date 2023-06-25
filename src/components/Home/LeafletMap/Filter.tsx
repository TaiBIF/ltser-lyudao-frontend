import React, { useState, useEffect } from 'react';

import { DateTime } from 'luxon';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import useWeather from 'hooks/useWeather';

const Filter = () => {
  const { filter, setFilter } = useSurveyMapContext();
  const { idTimeRange, getDataIdTimeRange } = useWeather();

  const [yearRange, setYearRange] = useState<string[]>([]);
  const [itemList, setItemList] = useState<string[]>(['airTemperature']);

  const hasId = filter.id !== '';
  const isFetchingTimeRange = idTimeRange.site === '';
  const isFetchingYearRange = yearRange.length === 0;

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const target = e.target as HTMLSelectElement;
    setFilter({ ...filter, [target.name]: target.value });
  };

  const handleYearRange = () => {
    let start = DateTime.fromISO(idTimeRange.start).year;
    const end = DateTime.fromISO(idTimeRange.end).year;
    const years = [];
    while (start <= end) {
      years.push(String(start));
      start++;
    }
    setYearRange([...years]);
  };

  useEffect(() => {
    if (hasId) {
      getDataIdTimeRange();
    }
  }, [filter.id]);

  useEffect(() => {
    if (!isFetchingTimeRange) {
      handleYearRange();
    }
  }, [idTimeRange]);

  return (
    <>
      <div className="select-area c-map__filter">
        <h3 className="item-title">測站/樣區篩選</h3>
        <select name="year" value={filter.year} onChange={handleSelectChange}>
          <option value="" disabled>
            年份
          </option>
          {!isFetchingYearRange &&
            yearRange.map((v) => {
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              );
            })}
        </select>
        <select name="item" value={filter.item} onChange={handleSelectChange}>
          <option value="" disabled>
            觀測項目
          </option>
          {itemList.map((v) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Filter;
