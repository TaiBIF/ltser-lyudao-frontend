import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

const useRerenderTranslation = ({ generateList }: { generateList: any }) => {
  const { t, i18n } = useTranslation();

  const [list, setList] = useState<any | null>(null);
  const isFetchingList = list === null;

  useEffect(() => {
    setList([...generateList()]);
  }, []);

  useEffect(() => {
    const updateList = () => {
      setList([...generateList()]);
    };
    i18n.on('languageChanged', updateList);
    return () => {
      i18n.off('languageChanged', updateList);
    };
  }, [i18n, t]);

  return {
    list,
    isFetchingList,
  };
};

export default useRerenderTranslation;
