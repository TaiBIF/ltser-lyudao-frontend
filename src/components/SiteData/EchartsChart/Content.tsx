import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import ReactECharts from 'echarts-for-react';

import { ContextItem } from 'types/utils';

import {
  commonOptions,
  chartsColor,
  chartsHeight,
} from 'helpers/customEcharts';

import { customYAxisUnit } from 'helpers/customYAxisUnit';

import { useDataContext } from 'context/DataContext';
import { useLocation } from 'react-router-dom';
import { SeriesItemTypes } from 'types/series';
import { useSiteDataContext } from 'context/SiteDataContext';
import Placeholder from 'components/Placeholder';
import { useLangContext } from 'context/LangContext';

type SeriesItem = {
  name?: string;
  data: number[];
  type: string;
  isHabitat: boolean;
};

const Content = ({
  item,
  isHabitat,
  I18N_KEY_PREFIX,
}: {
  item: string;
  isHabitat: boolean;
  I18N_KEY_PREFIX: string;
}) => {
  const { t } = useTranslation();

  const [xAxisList, setXAxisList] = useState<string[]>([]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [dateWindowTik, setDateWindowTik] = useState<string>();
  const [yAxisUnit, setYAxisUnit] = useState<string>();
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { pathname } = useLocation();
  const { filter } = useSiteDataContext();
  const { lang } = useLangContext();

  const isFetchingSeries = contextData.series === null;
  const hasNoSite = filter.site === '';

  const hasNoSeries =
    filter.site !== '' &&
    contextData.series !== null &&
    contextData.series.length === 0;

  useEffect(() => {
    if (contextData.series !== undefined && !hasNoSite) {
      contextData.getSeries();
    }
  }, [pathname, filter.site, lang]);

  useEffect(() => {
    if (!isFetchingSeries) {
      if (!hasNoSite) {
        if (!hasNoSeries) {
          let key: string;
          if (isHabitat) {
            key = 'locationID';
          } else {
            key = 'time';
          }
          const xAxis = contextData.series.map((v: SeriesItemTypes) => v[key]);
          setXAxisList([...xAxis]);
          const series = Object.entries(contextData.series[0])
            .map(([key]) => {
              switch (key) {
                case 'time':
                  return null;
                case 'airTemperature':
                  return {
                    name: key,
                    type: 'line',
                    data: contextData.series.map(
                      (v: SeriesItemTypes) => v[key]
                    ),
                  };
                default:
                  return {
                    name: key,
                    type: 'line',
                    data: contextData.series.map(
                      (v: SeriesItemTypes) => v[key]
                    ),
                    show: false,
                  };
              }
            })
            .filter((v) => v !== null) as SeriesItem[];
          setSeriesList([...series]);
        }
      }
      if (contextData.series && contextData.series.length > 0) {
        const lastTime = contextData.series.at(-1).time;
        if (lastTime) {
          const lastDate = new Date(lastTime);
          lastDate.setFullYear(lastDate.getFullYear() - 1);

          const formattedLastDate = `${lastDate.getFullYear()}-${String(
            lastDate.getMonth() + 1
          ).padStart(2, '0')}-${String(lastDate.getDate()).padStart(
            2,
            '0'
          )} ${String(lastDate.getHours()).padStart(2, '0')}:${String(
            lastDate.getMinutes()
          ).padStart(2, '0')}:${String(lastDate.getSeconds()).padStart(
            2,
            '0'
          )}`;

          setDateWindowTik(formattedLastDate);
        }
      }
      const yAxisConfig = customYAxisUnit[item] || [
        { yAxisName: '', unit: '' },
      ];
      setYAxisUnit(yAxisConfig[0]?.unit || '');
    }
  }, [contextData.series, filter.site]);

  const updatedDataZoom = commonOptions.dataZoom.map((zoom, index) => {
    if (index === 0) {
      return {
        ...zoom,
        startValue: dateWindowTik,
      };
    }
    return zoom;
  });

  const option = {
    ...commonOptions,
    color: chartsColor.legend.multiple,
    dataZoom: updatedDataZoom,
    grid: {
      top: '10%',
      width: '90%',
      left: '7.5%',
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
      axisLabel: {
        formatter: (value: any, index: number) => {
          return value.replace(' ', `\n`);
        },
      },
    },
    yAxis: {
      type: 'value',
      name: yAxisUnit,
    },
    series: seriesList,
    legend: {
      bottom: '12.5%',
      left: 'center',
      align: 'right',
      type: 'scroll',
      orient: 'horizontal',
      itemGap: 20,
    },
  };

  return (
    <>
      {!isFetchingSeries ? (
        !hasNoSite && !hasNoSeries ? (
          <ReactECharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            opts={{ renderer: 'canvas', height: chartsHeight.default }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        ) : (
          <div>{t(`${I18N_KEY_PREFIX}.graphEmptyStateText`)}</div>
        )
      ) : (
        <Placeholder text="" layout="block" />
      )}
    </>
  );
};

export default Content;
