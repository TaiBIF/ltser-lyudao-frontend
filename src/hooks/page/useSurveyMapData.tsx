import { Dispatch, SetStateAction } from 'react';

import { TimeRangeItem, SiteItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';

import { defaultTimeRange } from 'data/home/content';

import useSurveyMap from 'hooks/api/useSurveyMapApi';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useSiteDataContext } from 'context/SiteDataContext';

interface useSurveyMapDataProps {
  url: string;
  defaultSites?: SiteItem;
  defaultDetail?: DetailItemTypes;
  setSites?: Dispatch<SetStateAction<string[] | null>>;
  allTimeRange?: TimeRangeItem[];
  setAllTimeRange?: Dispatch<SetStateAction<TimeRangeItem[]>>;
  setDetail?: Dispatch<SetStateAction<DetailItemTypes>>;
}

const useSurveyMapData = (props: useSurveyMapDataProps) => {
  const { url, defaultSites, defaultDetail, setSites, setDetail } = props;
  const { id, year } = useSurveyMapContext().filter;
  const { filter, setFilter } = useSiteDataContext();
  const { getSites, getTimeRange, getDetail } = useSurveyMap();

  const getDataSites = () => {
    getSites({
      url,
      setList: setSites,
      filter,
      setFilter,
      defaultList: defaultSites?.sites || [],
    });
  };

  const getDataDetail = () => {
    getDetail({
      id,
      year,
      url,
      setData: setDetail,
      defaultData: defaultDetail,
    });
  };

  return {
    getDataSites,
    getDataDetail,
  };
};

export default useSurveyMapData;
