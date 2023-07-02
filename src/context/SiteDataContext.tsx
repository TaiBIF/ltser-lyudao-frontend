import React, { createContext, useContext, ReactNode, useState } from 'react';

interface SiteDataProviderProps {
  children: ReactNode;
}

const SiteDataContext = createContext<any>(null);
export const useSiteDataContext = () => useContext(SiteDataContext);

export const SiteDataProvider = ({ children }: SiteDataProviderProps) => {
  const contextData = {};

  return (
    <SiteDataContext.Provider value={contextData}>
      {children}
    </SiteDataContext.Provider>
  );
};
