import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
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
import { useLangContext } from 'context/LangContext';
import { SelectItem, FilterItem } from 'types/siteData';

type SeriesItem = {
  name?: string;
  data: number[];
  type: string;
};

const Content = ({
  item,
  I18N_KEY_PREFIX,
  sites,
  chart_type,
  series,
  setFilter,
}: {
  item: string;
  I18N_KEY_PREFIX: string;
  sites: SelectItem[];
  chart_type: string;
  series?: [];
  setFilter: Dispatch<SetStateAction<FilterItem>>;
}) => {
  const { t } = useTranslation();
  const [xAxisList, setXAxisList] = useState<string[]>([]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [dateWindowTik, setDateWindowTik] = useState<string>();
  const [yAxisUnit, setYAxisUnit] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { filter } = useSiteDataContext();
  const { lang } = useLangContext();
  const { pathname } = useLocation();

  const isFetchingSeries = contextData.series === null;
  const hasNoSite = filter.site === '';
  const hasNoSeries =
    filter.site !== '' &&
    contextData.series !== null &&
    contextData.series.length === 0;

  useEffect(() => {
    if (!Array.isArray(sites) || sites.length === 0) return;

    const matchedSite = sites.find((s) => s.id === filter.site);
    const fallbackSite = String(sites[0].id);

    if (!matchedSite) {
      setFilter((prev) => ({
        ...prev,
        site: fallbackSite,
      }));
      return; // 處理非同步狀態更新同步依賴的問題
    }

    // 確定 filter.site 是在 sites 裡的才向後端 request
    if (contextData.series !== undefined) {
      setIsLoading(true);
      contextData.getSeries();
    }
  }, [
    filter.site,
    sites,
    pathname,
    filter.depth,
    filter.year,
    filter.type,
    lang,
  ]);

  useEffect(() => {
    if (!isFetchingSeries) {
      if (!hasNoSite && !hasNoSeries) {
        const key = 'time';
        const xAxis = contextData.series.map((v: SeriesItemTypes) => v[key]);
        setXAxisList([...xAxis]);

        const series = Object.entries(contextData.series[0])
          .map(([key]) => {
            if (key === 'time') {
              return null;
            } else if (key === 'airTemperature') {
              return {
                name: key,
                type: 'line',
                data: contextData.series.map((v: SeriesItemTypes) => v[key]),
              };
            } else if (key === 'coverage') {
              const categories = Object.keys(contextData.series[0].coverage);
              return categories.map((category) => ({
                name: category,
                type: 'bar',
                stack: 'total',
                data: contextData.series.map(
                  (item: any) => item.coverage[category] || 0
                ),
              }));
            } else {
              return {
                name: key,
                type: 'line',
                data: contextData.series.map((v: SeriesItemTypes) => v[key]),
                show: false,
              };
            }
          })
          .flat()
          .filter((v) => v !== null) as SeriesItem[];
        setSeriesList([...series]);
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
      setIsLoading(false);
    }
  }, [contextData.series]);

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
        formatter: (value: any) => value.replace(' ', '\n'),
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

  const lineBarOption = {
    ...commonOptions,
    dataZoom: null,
    grid: {
      left: 70,
      right: 50,
      top: 60,
      bottom: 80,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['降雨量', '月均溫'],
      bottom: '2.5%',
      left: 'center',
      align: 'right',
      type: 'scroll',
      orient: 'horizontal',
      itemGap: 20,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
        ],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '降雨量（mm）',
        min: 0,
        interval: 5000,
        axisLabel: {
          formatter: '{value}',
        },
      },
      {
        type: 'value',
        name: '月均溫（°C）',
        min: 0,
        interval: 5,
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],
    series: series,
  };

  const windRoseOption = {
    ...commonOptions,
    dataZoom: null,
    legend: {
      show: true,
      bottom: 6,
      left: 'center',
      orient: 'horizontal',
      type: 'scroll',
      itemGap: 50,
    },
    grid: {
      bottom: 80,
    },
    angleAxis: {
      type: 'category',
      data: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      startAngle: 111,
    },
    radiusAxis: {},
    polar: {
      center: ['50%', '45%'],
    },
    series: series,
  };

  return (
    <>
      {isLoading ? (
        <div>{t(`${I18N_KEY_PREFIX}.fetchingStateData`)}</div>
      ) : !hasNoSite && !hasNoSeries ? (
        chart_type === 'mix-line-bar' ? (
          <ReactECharts
            option={lineBarOption}
            notMerge={true}
            lazyUpdate={true}
            opts={{ renderer: 'canvas', height: chartsHeight.default }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        ) : chart_type === 'rose' ? (
          <ReactECharts
            option={windRoseOption}
            notMerge={true}
            lazyUpdate={true}
            opts={{ renderer: 'canvas', height: chartsHeight.default }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        ) : (
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
        )
      ) : (
        <div>{t(`${I18N_KEY_PREFIX}.graphEmptyStateText`)}</div>
      )}
    </>
  );
};

export default Content;
