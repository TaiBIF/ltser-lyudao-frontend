import { Dispatch, SetStateAction } from 'react';
import useSurveyMap from 'hooks/useSurveyMapApi';

import { TimeRangeItem, DetailItem, SiteItem } from 'types/home';
import { defaultTimeRange } from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';

interface useSurveyMapDataProps {
  url: string;
  defaultSites: SiteItem;
  defaultDetail: DetailItem;
  defaultIdTimeRange: TimeRangeItem;
  setSites: Dispatch<SetStateAction<string[]>>;
  allTimeRange: TimeRangeItem[];
  setAllTimeRange: Dispatch<SetStateAction<TimeRangeItem[]>>;
  setIdTimeRange: Dispatch<SetStateAction<TimeRangeItem>>;
  setDetail: Dispatch<SetStateAction<DetailItem>>;
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
  const { filter } = useSurveyMapContext();
  const { id, year } = filter;
  const { getSites, getAllTimeRange, getTimeRange, getDetail } = useSurveyMap();

  const isFetchingAllTimeRange = allTimeRange.length === 0;

  const getDataSites = () => {
    getSites({
      url,
      setList: setSites,
      defaultList: defaultSites.sites,
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
      ? allTimeRange.find((v) => v.site === hoverId)
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
