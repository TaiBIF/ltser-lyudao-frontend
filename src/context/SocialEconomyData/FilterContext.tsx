import { createContext, useContext, useState } from 'react';

interface FilterContextType {
  selectedParticipantType: string | null;
  selectedCapIssueType: string[];
  selectedCapIssueTypeTitle: string[];
  selectedLocalIssueType: string[];
  selectedLocalIssueTypeTitle: string[];
  selectedKeyword: string;
  selectedContent: string;
  setFilters: (filters: Partial<FilterContextType>) => void;
  interviewIdList: string[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFiltersState] = useState<FilterContextType>({
    selectedParticipantType: null,
    selectedCapIssueType: [],
    selectedCapIssueTypeTitle: [],
    selectedLocalIssueType: [],
    selectedLocalIssueTypeTitle: [],
    selectedKeyword: '',
    selectedContent: '',
    setFilters: () => {},
    interviewIdList: [],
  });

  const setFilters = (newFilters: Partial<FilterContextType>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <FilterContext.Provider value={{ ...filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
