import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { SiteYearItem } from 'types/home';

import { generateSurveyMapItemList } from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';
import { SelectItem } from 'types/utils';

const Filter = ({
  I18N_KEY_PREFIX,
  dropdownOptions,
}: {
  I18N_KEY_PREFIX: string;
  dropdownOptions: SiteYearItem[];
}) => {
  const PREFIX = 'Filter';

  const { t } = useTranslation();

  const {
    list: surveyMapItemList,
    isFetchingList: isFetchingSurveyMapItemList,
  } = useRerenderTranslation({ generateList: generateSurveyMapItemList });

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
    dropdownOptions.forEach((site: SiteYearItem) => {
      site.years.forEach((v) => {
        if (!yearList.includes(v.year)) {
          yearList.push(v.year);
        }
      });
    });
    yearList.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    setYears([...yearList]);
  }, [dropdownOptions]);

  useEffect(() => {
    setFilter({ ...filter, item: '' });
    if (hasYear) {
      let yearItemList: string[] = [];
      dropdownOptions.forEach((site: SiteYearItem) => {
        site.years
          .find((v) => v.year === filter.year)
          ?.items.forEach((v) => {
            if (!yearItemList.includes(v)) {
              yearItemList.push(v);
            }
          });
      });
      if (!isFetchingSurveyMapItemList) {
        const matchItem = yearItemList
          .map((v) =>
            surveyMapItemList
              .filter((item: SelectItem) => item.plan === v)
              .map((v: SelectItem) => v.title)
          )
          .reduce((target, arr) => [...target, ...arr], []);

        const sortedMatchItem = matchItem.sort((a: string, b: string) =>
          a.localeCompare(b)
        );
        setItems([...sortedMatchItem]);
      }
    }
  }, [years, filter.year, surveyMapItemList, dropdownOptions]);

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
            {!isFetchingSurveyMapItemList &&
              !isFetchingItems &&
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
