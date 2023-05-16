import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';

import { contactColList, contactList } from 'data/dashboard';

const Content = () => {
  return (
    <>
      <TableTemplate page="contact" cols={contactColList} data={contactList} />
    </>
  );
};

export default Content;
