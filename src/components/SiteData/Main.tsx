import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useDataContext } from 'context/DataContext';
import { useSiteDataContext } from 'context/SiteDataContext';
import usePage from 'hooks/utils/usePage';
import { useLangContext } from 'context/LangContext';

import { ContextItem } from 'types/utils';

import Title from 'components/SiteData/Title';
import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import EchartsChart from 'components/SiteData/EchartsChart/Content';
import RenderSiteSelect from './RenderSiteSelect';
import RenderChart from './RenderChart';
import BuoyRealtimeChart from './BuoyRealtimeChart';

interface MainProps {
  paths: string[];
  item: string;
  pathname: string;
  PAGE_NAME: string;
  category: string;
}

const Main = (props: MainProps) => {
  const { paths, item, pathname, PAGE_NAME, category } = props;

  const I18N_KEY_PREFIX = `${PAGE_NAME}`;

  const { t } = useTranslation();

  const { lang } = useLangContext();

  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { filter, setFilter } = useSiteDataContext();
  const {
    currentPage,
    setCurrentPage,
    paginationData,
    setPaginationData,
    currentRecordsPerPage,
    setCurrentRecordsPerPage,
    currentCursor,
    setCurrentCursor,
  } = usePage();
  const isFetchingSites = contextData.sites === null;
  const hasNoSites = !isFetchingSites && contextData.sites.length === 0;
  const isFetchingFields = contextData.fields === null;
  const isFetchingRaws = contextData.raws === null;
  const isDoneFetching = !isFetchingFields && !isFetchingRaws;

  const currentYear = new Date().getFullYear();
  const startYear = 2023;

  const yearOption = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => {
      const year = startYear + index;
      return { id: year, title: `${year}年` };
    }
  );

  const buoyTypeOption = [
    { id: 'wind', title: '風玫瑰圖' },
    { id: 'current2.8', title: '海流玫瑰圖（深度 2.8 公尺）' },
    { id: 'current7.8', title: '海流玫瑰圖（深度 7.8 公尺）' },
    { id: 'current12.8', title: '海流玫瑰圖（深度 12.8 公尺）' },
    { id: 'current17.8', title: '海流玫瑰圖（深度 17.8 公尺）' },
    { id: 'current22.8', title: '海流玫瑰圖（深度 22.8 公尺）' },
    { id: 'current27.8', title: '海流玫瑰圖（深度 27.8 公尺）' },
    { id: 'current32.8', title: '海流玫瑰圖（深度 32.8 公尺）' },
    { id: 'current37.8', title: '海流玫瑰圖（深度 37.8 公尺）' },
    { id: 'current42.8', title: '海流玫瑰圖（深度 42.8 公尺）' },
    { id: 'current47.8', title: '海流玫瑰圖（深度 47.8 公尺）' },
  ];

  const weatherTypeOption = [{ id: 'weather-wind', title: '風玫瑰圖' }];

  useEffect(() => {
    contextData.getFields();
    if (hasNoSites) {
      return;
    } else {
      contextData.getSites();
    }
  }, [pathname, lang]);

  const renderMixedLinelView = (
    typeOption: any[],
    item: string,
    I18N_KEY_PREFIX: string,
    contextData: any,
    filter: any,
    setFilter: any
  ) => (
    <>
      <div className="u-section">
        <RenderSiteSelect
          titleKey="siteLabel1"
          options={contextData.sites}
          filter={filter}
          setFilter={setFilter}
          I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          selectValue="site"
        />
        <EchartsChart
          item={item}
          I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          sites={contextData.sites}
          chart_type="line"
          setFilter={setFilter}
        />
      </div>
      <div className="u-section-duo">
        <div className="u-section">
          <RenderSiteSelect
            titleKey="siteLabel4"
            options={yearOption}
            filter={filter}
            setFilter={setFilter}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
            selectValue="year"
          />
          <RenderChart
            item={item}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
            series={contextData.tempPrecipSeries}
            sites={contextData.sites}
            chart_type="mix-line-bar"
            setFilter={setFilter}
          />
        </div>
        <div className="u-section">
          <RenderSiteSelect
            titleKey="siteLabel5"
            options={typeOption}
            filter={filter}
            setFilter={setFilter}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
            selectValue="type"
          />
          <RenderChart
            item={item}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
            series={contextData.roseSeries}
            sites={contextData.sites}
            chart_type="rose"
            setFilter={setFilter}
          />
        </div>
      </div>
    </>
  );

  const renderBuoyHistoricalView = () =>
    renderMixedLinelView(
      buoyTypeOption,
      item,
      I18N_KEY_PREFIX,
      contextData,
      filter,
      setFilter
    );

  const renderWeatherHistoricalView = () =>
    renderMixedLinelView(
      weatherTypeOption,
      item,
      I18N_KEY_PREFIX,
      contextData,
      filter,
      setFilter
    );

  const renderBuoyRealtimeView = () => (
    <div className="u-section">
      <RenderSiteSelect
        titleKey="siteLabel1"
        options={contextData.sites}
        filter={filter}
        setFilter={setFilter}
        I18N_KEY_PREFIX={I18N_KEY_PREFIX}
        selectValue="site"
      />
      <BuoyRealtimeChart
        I18N_KEY_PREFIX={I18N_KEY_PREFIX}
        sites={contextData.sites}
        setFilter={setFilter}
      />
    </div>
  );

  const renderDefaultView = () => (
    <div className="u-section">
      <RenderSiteSelect
        titleKey="siteLabel1"
        options={contextData.sites}
        filter={filter}
        setFilter={setFilter}
        I18N_KEY_PREFIX={I18N_KEY_PREFIX}
        selectValue="site"
      />
      <RenderChart
        item={item}
        I18N_KEY_PREFIX={I18N_KEY_PREFIX}
        series={contextData.roseSeries}
        sites={contextData.sites}
        chart_type="line"
        setFilter={setFilter}
      />
    </div>
  );

  const renderViewsMap: Record<string, () => JSX.Element> = {
    'buoy-historical': renderBuoyHistoricalView,
    'buoy-realtime': renderBuoyRealtimeView,
    weather: renderWeatherHistoricalView,
  };

  const renderSelectedView = renderViewsMap[item] ?? renderDefaultView;

  return (
    <div className="right-infbox">
      <Title
        paths={paths}
        url={contextData.depositarUrl}
        PAGE_NAME={PAGE_NAME}
        category={category}
      />
      {category !== 'third-party' && renderSelectedView()}
      <div className="data-searchbox">
        {item !== 'buoy-realtime' ? (
          <Search
            item={item}
            isDoneFetching={isDoneFetching}
            setPaginationData={setPaginationData}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          />
        ) : (
          <></>
        )}
        <Result
          item={item}
          isDoneFetching={isDoneFetching}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginationData={paginationData}
          setPaginationData={setPaginationData}
          currentRecordsPerPage={currentRecordsPerPage}
          setCurrentRecordsPerPage={setCurrentRecordsPerPage}
          currentCursor={currentCursor}
          setCurrentCursor={setCurrentCursor}
          category={category}
          I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default Main;
