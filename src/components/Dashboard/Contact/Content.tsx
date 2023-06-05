import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { contactColList } from 'data/dashboard';
// import { contactList } from 'data/contact';

import { useApi } from 'hooks/useApi';
import { ContactItem } from 'types/contact';

const Content = () => {
  const PAGE: string = 'contact';
  const [result, loading, getApiData, handleActions] = useApi();
  const [contactList, setContactList] = useState<ContactItem[]>([]);

  const getContactList = async () => {
    const result = await getApiData({
      method: 'get',
      url: '/users/contacts/',
    });
    if (result) {
      setContactList([...result.data]);
    }
  };

  useEffect(() => {
    getContactList();
  }, []);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={contactColList}
        data={contactList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
