import {
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
    year: '97',
  });
  const [villageRaw, setVillageRaw] = useState<any[]>([
    ...villageAnnuallyPopulationList,
  ]);
  const [townshipRaw, setTownshipRaw] = useState<any[]>([
    ...townshipAnnuallyPopulationList,
  ]);
  const [villageYearChartData, setVillageYearChartData] = useState<
    any[] | null
  >(null);

  const [annuallyData, setAnnuallyData] = useState<any[] | null>(null);

  const contextData = {
    filter,
    setFilter,
    villageRaw,
    townshipRaw,
    villageYearChartData,
    setVillageYearChartData,
    annuallyData,
    setAnnuallyData,
  };

  return (
    <PopulationContext.Provider value={contextData}>
      {children}
    </PopulationContext.Provider>
  );
};
