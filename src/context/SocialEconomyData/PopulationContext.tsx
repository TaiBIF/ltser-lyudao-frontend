import { villageAnnuallyPopulationList } from 'data/socialEconomyData/population';
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
  const [raw, setRaw] = useState<any[]>([...villageAnnuallyPopulationList]);
  const [data, setData] = useState<any[] | null>(null);

  const contextData = { filter, setFilter, raw, data, setData };

  return (
    <PopulationContext.Provider value={contextData}>
      {children}
    </PopulationContext.Provider>
  );
};
