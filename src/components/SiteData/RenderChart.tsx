import React, { Dispatch, SetStateAction } from 'react';
import EchartsChart from 'components/SiteData/EchartsChart/Content';
import { useTranslation } from 'react-i18next';
import { FilterItem } from 'types/siteData';

interface RenderChartProps {
  item: string;
  I18N_KEY_PREFIX: string;
  series: [];
  chart_type: 'line' | 'mix-line-bar' | 'rose';
  sites: any[];
  setFilter: Dispatch<SetStateAction<FilterItem>>;
}

const RenderChart: React.FC<RenderChartProps> = ({
  item,
  I18N_KEY_PREFIX,
  series,
  chart_type,
  sites,
  setFilter,
}) => {
  const { t } = useTranslation();

  if (
    (chart_type !== 'line' && (!series || series.length === 0)) ||
    !sites ||
    sites.length === 0
  ) {
    return <>{t(`${I18N_KEY_PREFIX}.seriesDataUnavailable`)}</>;
  }

  return (
    <EchartsChart
      item={item}
      I18N_KEY_PREFIX={I18N_KEY_PREFIX}
      sites={sites}
      series={series}
      chart_type={chart_type}
      setFilter={setFilter}
    />
  );
};

export default RenderChart;
