import React, { createContext, useContext, ReactNode, useState } from 'react';

import { FilterItem } from 'types/siteData';

interface SiteDataProviderProps {
  children: ReactNode;
}

const SiteDataContext = createContext<any>(null);
export const useSiteDataContext = () => useContext(SiteDataContext);

export const SiteDataProvider = ({ children }: SiteDataProviderProps) => {
  const [filter, setFilter] = useState<FilterItem>({
    site: 'A1',
  });
  const contextData = { filter, setFilter };

  return (
    <SiteDataContext.Provider value={contextData}>
      {children}
    </SiteDataContext.Provider>
  );
};
