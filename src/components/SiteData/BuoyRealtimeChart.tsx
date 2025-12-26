import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useDataContext } from 'context/DataContext';
import { useSiteDataContext } from 'context/SiteDataContext';
import { useLangContext } from 'context/LangContext';
import { useLocation } from 'react-router-dom';
import { ContextItem } from 'types/utils';
import { SelectItem, FilterItem } from 'types/siteData';

const BuoyRealtimeChart = ({
  I18N_KEY_PREFIX,
  sites,
  setFilter,
}: {
  I18N_KEY_PREFIX: string;
  sites: SelectItem[];
  setFilter: Dispatch<SetStateAction<FilterItem>>;
}) => {
  const contextData = useDataContext().find(
    (v: ContextItem) => v.id === 'buoy-realtime'
  );

  const { filter } = useSiteDataContext();
  const { lang } = useLangContext();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  // 判斷是否需要取資料
  const isFetchingSeries =
    !contextData?.records || Object.keys(contextData.records).length === 0;
  const hasNoSite = filter.site === '';
  const hasRecords =
    contextData?.records && Object.keys(contextData.records).length > 0;

  // 執行 getSeries
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
  }, [pathname, filter.site, filter.year, filter.type, lang, sites]);

  // 處理資料更新完成後的狀態
  useEffect(() => {
    if (!isFetchingSeries && hasRecords) {
      setData(contextData.records);
      setIsLoading(false);
    }
  }, [contextData?.records]);

  // render 條件與錯誤處理
  if (isLoading) {
    return <div>{t(`${I18N_KEY_PREFIX}.fetchingStateData`)}</div>;
  }

  if (!hasRecords) {
    return <div>{t(`${I18N_KEY_PREFIX}.graphEmptyStateText`)}</div>;
  }

  return (
    <div className="buoy-realtime">
      <div className="__time">
        資料時間：{data['Air Temperature']?.timestamp ?? '—'}
      </div>

      <div className="__container">
        <span className="__title __title_1">海上氣象</span>
        <div className="row align-items-center __content">
          <div className="col-md-4 text-center __item">
            <div className="__highlight-value">
              {data['Air Temperature']?.value ?? '—'}
            </div>
            <div className="__unit">氣溫 °C</div>
          </div>
          <div className="col-md-4 text-center __stack_column">
            <div className="__stack-item">
              <div className="__highlight-value">
                {data['Corrected Wind Speed']?.value ?? '—'}
              </div>
              <div className="__unit">風速 m/s</div>
            </div>
            <div className="__stack-item">
              <div className="__highlight-value">
                {data['Beaufort Scale']?.value ?? '—'}
              </div>
              <div className="__unit">蒲福風級</div>
            </div>
          </div>
          <div className="col-md-4 text-center __stack">
            <div className="__stack-item">
              <div className="__value">
                {data['Precipitation Total']?.value ?? '—'}
              </div>
              <div className="__unit">累積降雨量 mm</div>
            </div>
            <div className="__stack-item">
              <div className="__value">
                {data['Corrected Wind Direction']?.value ?? '—'}
              </div>
              <div className="__unit">風向</div>
            </div>
            <div className="__stack-item">
              <div className="__value">
                {data['Barometric Pressure']?.value ?? '—'}
              </div>
              <div className="__unit">氣壓 hPa</div>
            </div>
            <div className="__stack-item">
              <div className="__value">
                {data['Relative Humidity']?.value ?? '—'}
              </div>
              <div className="__unit">相對濕度 %</div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="__container">
        <span className="__title __title_2">海下環境</span>
        <div className="row align-items-center __content">
          <div className="col-md-4 text-center __item">
            <div className="__highlight-value">
              {data['EXO Temperature']?.value ?? '—'}
            </div>
            <div className="__unit">海溫 °C</div>
          </div>

          <div className="col-md-4 text-center __stack">
            <div className="__stack-item">
              <div className="__value">{data['ODO']?.value ?? '—'}</div>
              <div className="__unit">溶解氧 mg/L</div>
            </div>
            <div className="__stack-item">
              <div className="__value">{data['pH']?.value ?? '—'}</div>
              <div className="__unit">pH</div>
            </div>
          </div>

          <div className="col-md-4 text-center __stack">
            <div className="__stack-item">
              <div className="__value">{data['Sp Cond']?.value ?? '—'}</div>
              <div className="__unit">導電度 mS/cm</div>
            </div>
            <div className="__stack-item">
              <div className="__value">{data['Salinity']?.value ?? '—'}</div>
              <div className="__unit">鹽度 PPT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuoyRealtimeChart;
