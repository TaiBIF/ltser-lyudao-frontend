import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { LiteratureItem } from 'types/literature';

import { literatureColList } from 'data/dashboard';
import { literatureList } from 'data/literature';

import { useApi } from 'hooks/useApi';

const Content = () => {
  const PAGE: string = 'related-literature';
  const { loading, getApiData, handleActions } = useApi();
  const [literatureList, setLiteratureList] = useState<LiteratureItem[]>([]);

  const getContactList = async () => {
    const result = await getApiData({
      method: 'get',
      url: '/users/literatures/',
    });
    if (result?.status === 'success') {
      setLiteratureList([...result.response.data]);
    }
  };

  useEffect(() => {
    getContactList();
  }, []);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={literatureColList}
        data={literatureList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
