import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ReactECharts from 'echarts-for-react';

import { ObservationItem } from 'types/utils';

import {
  commonOptions,
  chartsColor,
  chartsHeight,
} from 'helpers/customEcharts';

import { useSurveyMapContext } from 'context/SurveyMapContext';

import itemList from 'data/home/sites.json';
import {
  generateChartSeriesList,
  generateSurveyMapItemList,
} from 'data/home/content';
import { useTranslation } from 'react-i18next';
import { useLangContext } from 'context/LangContext';

type SeriesItem = {
  data: number[];
  type: string;
};

const Content = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const PREFIX = 'Chart';
  const { t } = useTranslation();

  const chartSeriesList = generateChartSeriesList();
  const surveyMapItemList = generateSurveyMapItemList();
  const seasonList: string[] = ['1-3', '4-6', '7-9', '10-12'];

  const [xAxisList, setXAxisList] = useState<string[]>([...seasonList]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const { filter, idData, allDetail, isFetchingAllDetail } =
    useSurveyMapContext();
  const navigate = useNavigate();

  const { lang } = useLangContext();

  const isEn = lang === 'en';

  const handleChartClick = (params: any) => {
    const matchItemByTitle = chartSeriesList.find(
      (v) => v.title === params.seriesName
    );
    if (matchItemByTitle) {
      navigate(
        `/site-data/${matchItemByTitle.type}-observation/${matchItemByTitle.plan}?site=${filter.id}`
      );
    }
  };

  const onEvents = {
    click: handleChartClick,
  };

  const option = {
    ...commonOptions,
    color: chartsColor.legend.multiple,
    title: {
      text: t(`${I18N_KEY_PREFIX}.${PREFIX}.title`, {
        siteName: idData[isEn ? 'locality' : 'verbatimLocality'],
      }),
    },
    dataZoom: [
      ...commonOptions.dataZoom,
      {
        start: 20,
        end: 80,
        zoomOnMouseWheel: false,
      },
    ],
    legend: {
      top: '30%',
      right: '2%',
      type: 'scroll',
      orient: 'vertical',
    },
    grid: {
      width: '78%',
      left: '5%',
      height: '60%',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: xAxisList,
      name: t(`${I18N_KEY_PREFIX}.${PREFIX}.xAsisUnitText`),
    },
    yAxis: {
      type: 'value',
    },
    series: seriesList,
  };

  const isFetchingItems = items.length === 0;

  useEffect(() => {
    const matchFilter = itemList
      .find((v) => v.site === filter.id)
      ?.years.find((v) => v.year === filter.year)?.items;
    if (matchFilter) {
      const matchItem = matchFilter
        .flatMap((item) => surveyMapItemList.filter((v) => v.plan === item))
        .map((v) => v.plan);
      setItems([...matchItem]);
    }
  }, [filter.id]);

  useEffect(() => {
    if (!isFetchingItems && !isFetchingAllDetail) {
      const formatPlan = (plan: string) =>
        plan.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
      const series = chartSeriesList
        .map((v: ObservationItem) => {
          const { id, plan, title, col, unit } = v;
          if (plan && items.includes(plan)) {
            return {
              type: 'line',
              data: allDetail[formatPlan(plan)].seasonal.map(
                (v: ObservationItem) => v[col]
              ),
              name: title,
            };
          } else {
            return null;
          }
        })
        .filter((v) => v !== null) as SeriesItem[];
      setSeriesList([...series]);
    }
  }, [items, allDetail]);

  return (
    <>
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        opts={{ renderer: 'canvas', height: chartsHeight.default }}
        style={{
          height: '100%',
          width: '100%',
        }}
        onEvents={onEvents}
      />
    </>
  );
};

export default Content;
