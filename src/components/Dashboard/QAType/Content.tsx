import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { TypeItem } from 'types/utils';

import { typeColList } from 'data/dashboard';

import useDashboard from 'hooks/page/useDashboard';
import { QA_TYPE_API_URL } from 'data/api';

const Content = () => {
  const PAGE: string = 'qa-type';
  const [qaTypeList, setQaTypeList] = useState<TypeItem[] | null>(null);
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: QA_TYPE_API_URL,
      setList: setQaTypeList,
    });
  }, []);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={typeColList}
        data={qaTypeList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
