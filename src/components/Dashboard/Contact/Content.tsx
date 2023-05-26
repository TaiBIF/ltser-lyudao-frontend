import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { contactColList } from 'data/dashboard';
import { contactList } from 'data/contact';

const Content = () => {
  const PAGE: string = 'contact';
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
