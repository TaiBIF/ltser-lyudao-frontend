import { useState } from 'react';

import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';
import { SeriesItemTypes } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { defaultSites, zoobenthosDetail } from 'data/home/content';
import { countSeries } from 'data/series';
import { zoobenthosFields } from 'data/field';
import { zoobenthosRaws } from 'data/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';
import { useSiteDataContext } from 'context/SiteDataContext';

const useZoobenthos = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `zoobenthos`;

  const { getDataSites, getDataDetail } = useSurveyMapData({
    url: URL,
    // defaultSites,
    // defaultDetail: zoobenthosDetail,
    setSites,
    setDetail,
  });

  const { getDataRaws, getDataSeries, getDataFields } = useSiteData({
    id: filter.site,
    url: URL,
    // defaultRaws: zoobenthosRaws,
    setRaws,
    // defaultSeries: countSeries,
    setSeries,
    // defaultFields: zoobenthosFields,
    setFields,
  });

  return {
    sites,
    detail,
    raws,
    series,
    fields,
    getDataSites,
    getDataDetail,
    getDataRaws,
    getDataSeries,
    getDataFields,
  };
};

export default useZoobenthos;
