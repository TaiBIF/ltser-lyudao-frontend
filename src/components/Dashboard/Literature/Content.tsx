import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { LiteratureItem } from 'types/literature';

import { literatureColList } from 'data/dashboard';
import { literatureList } from 'data/literature';

import { useApi } from 'hooks/useApi';

const Content = () => {
  const PAGE: string = 'related-literature';
  const [result, loading, getApiData, handleActions] = useApi();
  const [literatureList, setLiteratureList] = useState<LiteratureItem[]>([]);

  const getContactList = async () => {
    const result = await getApiData({
      method: 'get',
      url: '/users/literatures/',
    });
    // setLiteratureList([
    //   {
    //     id: 1,
    //     name: 'Kilkeary, R. (1975). The energy crisis and decision-making in the family. National Technical Information Service.',
    //     created_at: '2023-06-04',
    //     updated_at: '2023-06-04',
    //   },
    //   {
    //     id: 2,
    //     name: 'Kilkeary, R. (1975). The energy crisis and decision-making in the family. National Technical Information Service.',
    //     created_at: '2023-06-04',
    //     updated_at: '2023-06-04',
    //   },
    // ]);
    if (result) {
      setLiteratureList(result);
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
