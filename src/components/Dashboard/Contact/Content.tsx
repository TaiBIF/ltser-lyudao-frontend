import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { ContactItem } from 'types/contact';

import { contactColList } from 'data/dashboard';
import { CONTACT_API_URL, CONTACT_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Content = () => {
  const PAGE: string = CONTACT_PATH;
  const [contactList, setContactList] = useState<ContactItem[]>([]);
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: CONTACT_API_URL,
      setList: setContactList,
    });
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
