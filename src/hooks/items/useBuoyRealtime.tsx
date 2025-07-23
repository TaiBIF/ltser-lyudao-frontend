import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';

import { useSiteDataContext } from 'context/SiteDataContext';

const useBuoyRealtime = () => {
  const [records, setRecords] = useState<any>({});
  const [sites, setSites] = useState<string[] | null>(null);
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    annual: {
      airTemperature: 0,
      precipitation: 0,
    },
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[] | null>(null);
  const { filter } = useSiteDataContext();

  const URL = `buoy-realtime`;

  const { getDataSites, getDataDetail } = useSurveyMapData({
    url: URL,
    setSites,
    setDetail,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    year: filter.year,
    type: filter.type,
    url: URL,
    // defaultRaws: buoyRaws,
    setRaws,
    // defaultFields: buoyFields,
    setFields,
    // defaultSeries: buoySeries,
    setSeries,
    setRecords,
  });

  return {
    sites,
    detail,
    raws,
    fields,
    series,
    records,
    getDataSites,
    getDataDetail,
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useBuoyRealtime;
