import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import { SiteObservationItem } from 'types/utils';

import { useSurveyMapContext } from 'context/SurveyMapContext';

import itemList from 'data/home/items.json';
import { generateSurveyMapItemList } from 'data/home/content';

interface TooltipLayoutProps {
  data: Dictionary<number | string>;
}

const TooltipLayout = (props: TooltipLayoutProps) => {
  const { data } = props;

  const surveyMapItemList = generateSurveyMapItemList();

  const { filter } = useSurveyMapContext();

  const [items, setItems] = useState<SiteObservationItem[]>([]);

  useEffect(() => {
    const matchFilter = itemList
      .find((v) => v.site === data.locationID)
      ?.years.find((v) => v.year === filter.year)?.items;
    if (matchFilter) {
      const matchItem = matchFilter
        .map((item) => {
          return surveyMapItemList.filter((v) => v.plan === item);
        })
        .flat();
      setItems([...matchItem]);
    }
  }, []);

  return (
    <>
      <div>{data.verbatimLocality}</div>
      <div>2022-01-01 - 2023-06-27</div>
      <div>
        {items.map((v) => {
          return <div key={v.id}>{v.title}</div>;
        })}
      </div>
    </>
  );
};

export default TooltipLayout;
