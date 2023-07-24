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
  defaultIdTimeRange?: TimeRangeItem;
  setSites?: Dispatch<SetStateAction<string[]>>;
  allTimeRange?: TimeRangeItem[];
  setAllTimeRange?: Dispatch<SetStateAction<TimeRangeItem[]>>;
  setIdTimeRange?: Dispatch<SetStateAction<TimeRangeItem>>;
  setDetail?: Dispatch<SetStateAction<DetailItemTypes>>;
}

const useSurveyMapData = (props: useSurveyMapDataProps) => {
  const {
    url,
    defaultSites,
    defaultDetail,
    defaultIdTimeRange,
    setSites,
    allTimeRange,
    setAllTimeRange,
    setIdTimeRange,
    setDetail,
  } = props;
  const { id, year } = useSurveyMapContext().filter;
  const { setFilter } = useSiteDataContext();
  const { getSites, getAllTimeRange, getTimeRange, getDetail } = useSurveyMap();

  const isFetchingAllTimeRange = allTimeRange?.length === 0;

  const getDataSites = () => {
    getSites({
      url,
      setList: setSites,
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

  const getDataHoverTimeRange = (hoverId: string) =>
    !isFetchingAllTimeRange
      ? allTimeRange?.find((v) => v.site === hoverId)
      : { ...defaultTimeRange };

  const getDataIdTimeRange = () => {
    getTimeRange({
      id,
      url,
      setData: setIdTimeRange,
      defaultData: defaultIdTimeRange,
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
    getDataHoverTimeRange,
    getDataIdTimeRange,
    getDataDetail,
  };
};

export default useSurveyMapData;
