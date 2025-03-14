import {
  populationPyramidList,
  townshipAnnuallyPopulationList,
  villageAnnuallyPopulationList,
} from 'data/socialEconomyData/population';
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { FilterItem } from 'types/socialEconomyData';

interface PopulationProviderProps {
  children: ReactNode;
}

const PopulationContext = createContext<any>(null);
export const usePopulationContext = () => useContext(PopulationContext);

export const PopulationProvider = ({ children }: PopulationProviderProps) => {
  const [filter, setFilter] = useState<FilterItem>({
    areaMapYear: '97',
    pyramidChartYear: '97',
  });
  const [villageYearChartData, setVillageYearChartData] = useState<
    any[] | null
  >(null);

  const contextData = {
    filter,
    setFilter,
    villageYearChartData,
    setVillageYearChartData,
  };

  return (
    <PopulationContext.Provider value={contextData}>
      {children}
    </PopulationContext.Provider>
  );
};
