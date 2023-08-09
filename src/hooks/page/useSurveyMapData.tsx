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
  setSites?: Dispatch<SetStateAction<string[]>>;
  allTimeRange?: TimeRangeItem[];
  setAllTimeRange?: Dispatch<SetStateAction<TimeRangeItem[]>>;
  setDetail?: Dispatch<SetStateAction<DetailItemTypes>>;
}

const useSurveyMapData = (props: useSurveyMapDataProps) => {
  const {
    url,
    defaultSites,
    defaultDetail,
    setSites,
    setDetail,
    setAllTimeRange,
  } = props;
  const { id, year } = useSurveyMapContext().filter;
  const { filter, setFilter } = useSiteDataContext();
  const { getSites, getAllTimeRange, getTimeRange, getDetail } = useSurveyMap();

  const getDataSites = () => {
    getSites({
      url,
      setList: setSites,
      filter,
      setFilter,
      defaultList: defaultSites?.sites || [],
    });
  };

  const getDataAllTimeRange = () => {
    getAllTimeRange({
      url,
      setList: setAllTimeRange,
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
    getDataAllTimeRange,
    getDataDetail,
  };
};

export default useSurveyMapData;
