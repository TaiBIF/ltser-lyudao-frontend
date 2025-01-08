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
import { useLangContext } from 'context/LangContext';
import { SelectItem } from 'types/siteData';

type SeriesItem = {
  name?: string;
  data: number[];
  type: string;
};

const Content = ({
  item,
  I18N_KEY_PREFIX,
  sites
}: {
  item: string;
  I18N_KEY_PREFIX: string;
  sites: SelectItem[];
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
    if (contextData.series !== undefined && !hasNoSite) {
      setIsLoading(true); 

      // 因為觸發 state 改變時有時間跟順序差，在 filter.site 還沒改變前 API 就會發出去
      // 新增一個判斷式檢查 filter.site 是否存在當下的子計畫
      // 避免 API 參數錯誤導致渲染頁面的狀態也顯示錯誤
      const exsitingSite = sites.some((site) => site.id === filter.site);

      if (exsitingSite) {
        contextData.getSeries();
      } else {
        return
      }
    }
  }, [pathname, filter.site, filter.depth, lang]);

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
          ).padStart(2, '0')}:${String(lastDate.getSeconds()).padStart(2, '0')}`;
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

  return (
    <>
      {isLoading ? (
        <div>{t(`${I18N_KEY_PREFIX}.fetchingStateData`)}</div>
      ) : !hasNoSite && !hasNoSeries ? (
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
      )}
    </>
  );
};

export default Content;
