import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';

import { useSiteDataContext } from 'context/SiteDataContext';

const useBuoy = () => {
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
  const [roseSeries, setRoseSeries] = useState<any[]>([]);
  const [tempPrecipSeries, setTempPrecipSeries] = useState<any[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `buoy-historical`;

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
    setRoseSeries,
    setTempPrecipSeries,
  });

  return {
    sites,
    detail,
    raws,
    fields,
    series,
    roseSeries,
    tempPrecipSeries,
    getDataSites,
    getDataDetail,
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useBuoy;
