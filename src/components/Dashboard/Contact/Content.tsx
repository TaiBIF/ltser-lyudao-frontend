import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { contactColList } from 'data/dashboard';
// import { contactList } from 'data/contact';

import { useApi } from 'hooks/useApi';
import { ContactItem } from 'types/contact';

const Content = () => {
  const PAGE: string = 'contact';
  const { loading, getApiData, handleActions } = useApi();
  const [contactList, setContactList] = useState<ContactItem[]>([]);

  const getContactList = async () => {
    setContactList([
      {
        id: 1,
        type: 'leader',
        name: '陳昭倫',
        unit: '中央研究院',
        content: '生物多樣性研究中心 研究員',
        contact: 'cacgate.sinica.edu.tw',
        image: '/media/images/contact1.jpeg',
      },
      {
        id: 2,
        type: 'executor',
        name: '鍾國芳',
        unit: '中央研究院',
        content: '生物多樣性研究中心 副研究員',
        contact: 'bochunggate.sinica.edu.tw',
        image: '/media/images/contact2.jpeg',
      },
    ]);
    // const result = await getApiData({
    //   method: 'get',
    //   url: '/users/contacts/',
    // });
    // if (result?.status === 'success') {
    //   setContactList([...result.response.data]);
    // }
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
