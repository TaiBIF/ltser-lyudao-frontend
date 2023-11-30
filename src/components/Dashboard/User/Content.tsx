import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';

import { UserItem } from 'types/user';

import { userColList } from 'data/dashboard';
import { USER_API_URL } from 'data/api';
// import { defaultUserList } from 'data/user';

import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';

const Content = () => {
  const PAGE: string = 'user';
  const [userList, setUserList] = useState<UserItem[]>([]);
  const { getList } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  useEffect(() => {
    getList({
      url: USER_API_URL,
      setList: setUserList,
      params: { page: currentPage },
      setPaginationData,
      // defaultList: defaultUserList,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={userColList}
        data={userList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
