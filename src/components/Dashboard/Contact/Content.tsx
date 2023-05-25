import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';

import { contactColList } from 'data/dashboard';
import { contactList } from 'data/contact';

const Content = () => {
  return (
    <>
      <TableTemplate page="contact" cols={contactColList} data={contactList} />
    </>
  );
};

export default Content;
