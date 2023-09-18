import React, { useState, useEffect } from 'react';

import { DateTime } from 'luxon';

import { SiteYearItem } from 'types/home';

import { surveyMapItemList } from 'data/home/content';
import itemList from 'data/home/items.json';

import { useSurveyMapContext } from 'context/SurveyMapContext';

const Filter = () => {
  const { filter, setFilter } = useSurveyMapContext();

  const [years, setYears] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);

  const isFetchingYears = years.length === 0;
  const hasYear = years.length !== 0;
  const isFetchingItems = items.length === 0;

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const target = e.target as HTMLSelectElement;
    setFilter({ ...filter, [target.name]: target.value });
  };

  useEffect(() => {
    setFilter({ ...filter, id: '' });
  }, [filter.year, filter.item]);

  useEffect(() => {
    let yearList: string[] = [];
    itemList.forEach((site: SiteYearItem) => {
      site.years.forEach((v) => {
        if (!yearList.includes(v.year)) {
          yearList.push(v.year);
        }
      });
    });
    setYears([...yearList]);
  }, []);

  useEffect(() => {
    setFilter({ ...filter, item: '' });
    if (hasYear) {
      let yearItemList: string[] = [];
      itemList.forEach((site: SiteYearItem) => {
        site.years
          .find((v) => v.year === filter.year)
          ?.items.forEach((v) => {
            if (!yearItemList.includes(v)) {
              yearItemList.push(v);
            }
          });
      });
      const matchItem = yearItemList
        .map((v) =>
          surveyMapItemList
            .filter((item) => item.plan === v)
            .map((v) => v.title)
        )
        .reduce((target, arr) => [...target, ...arr], []);
      setItems([...matchItem]);
    }
  }, [years, filter.year]);

  return (
    <>
      <div className="select-area">
        <h3 className="item-title">測站/樣區篩選</h3>
        <div className="selbox c-map__filter">
          <select name="year" value={filter.year} onChange={handleSelectChange}>
            <option value="" disabled>
              年份
            </option>
            {!isFetchingYears &&
              years.map((v) => {
                return (
                  <option key={v} value={v}>
                    {v}
                  </option>
                );
              })}
          </select>
          <select name="item" value={filter.item} onChange={handleSelectChange}>
            <option value="">觀測項目</option>
            {!isFetchingItems &&
              items.map((v) => {
                return (
                  <option key={v} value={v}>
                    {v}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
