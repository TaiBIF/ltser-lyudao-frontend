import { useState } from 'react';

import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';
import { SeriesItemTypes } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { defaultSites, birdNetSoundDetail } from 'data/home/content';
import { countSeries } from 'data/series';
import { birdNetSoundFields } from 'data/field';

import { birdNetSoundRaws } from 'data/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';
import { useSiteDataContext } from 'context/SiteDataContext';

const useBirdNetSound = () => {
  const [sites, setSites] = useState<string[] | null>(null);
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [series, setSeries] = useState<SeriesItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `bird-net-sound`;

  const { getDataSites, getDataDetail } = useSurveyMapData({
    url: URL,
    // defaultSites,
    setSites,
    setDetail,
  });

  const { getDataRaws, getDataSeries, getDataFields } = useSiteData({
    id: filter.site,
    url: URL,
    // defaultRaws: birdNetSoundRaws,
    setRaws,
    setSeries,
    // defaultSeries: countSeries,
    // defaultFields: birdNetSoundFields,
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

export default useBirdNetSound;
