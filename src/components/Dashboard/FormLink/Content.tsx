import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { formLinkColList } from 'data/dashboard';
import { formLinkList } from 'data/formLink';

import useDashboard from 'hooks/page/useDashboard';
import { FORM_LINK_API_URL } from 'data/api';
import { FormLinkItem } from 'types/formLink';
import usePage from 'hooks/utils/usePage';

const Content = () => {
  const PAGE: string = 'form-link';

  const [formLinkList, setFormLinkList] = useState<FormLinkItem[] | null>(null);

  const { getList } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  useEffect(() => {
    getList({
      url: FORM_LINK_API_URL,
      setList: setFormLinkList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={formLinkColList}
        data={formLinkList}
        renderAction={() => <AddBtn page={PAGE} />}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
