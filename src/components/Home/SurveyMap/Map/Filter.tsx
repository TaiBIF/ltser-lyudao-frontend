import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { SiteYearItem } from 'types/home';

import { generateSurveyMapItemList } from 'data/home/content';
import itemList from 'data/home/items.json';

import { useSurveyMapContext } from 'context/SurveyMapContext';

const Filter = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const PREFIX = 'Filter';

  const { t } = useTranslation();

  const surveyMapItemList = generateSurveyMapItemList();

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
        <h3 className="item-title">
          {t(`${I18N_KEY_PREFIX}.${PREFIX}.siteLabel`)}
        </h3>
        <div className="selbox c-map__filter">
          <select name="year" value={filter.year} onChange={handleSelectChange}>
            <option value="" disabled>
              {t(`${I18N_KEY_PREFIX}.${PREFIX}.siteDefaultOption`)}
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
            <option value="">
              {t(`${I18N_KEY_PREFIX}.${PREFIX}.itemLabel`)}
            </option>
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
