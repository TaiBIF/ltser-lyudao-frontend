import React, { createContext, useContext, ReactNode, useState } from 'react';

import { FilterItem } from 'types/siteData';

interface SiteDataProviderProps {
  children: ReactNode;
}

const SiteDataContext = createContext<any>(null);
export const useSiteDataContext = () => useContext(SiteDataContext);

export const SiteDataProvider = ({ children }: SiteDataProviderProps) => {
  const [filter, setFilter] = useState<FilterItem>({
    site: '',
    depth: '',
  });
  const [query, setQuery] = useState<any>({});
  const contextData = { filter, setFilter, query, setQuery };

  return (
    <SiteDataContext.Provider value={contextData}>
      {children}
    </SiteDataContext.Provider>
  );
};
