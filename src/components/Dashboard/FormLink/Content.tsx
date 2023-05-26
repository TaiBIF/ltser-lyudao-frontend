import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { formLinkColList } from 'data/dashboard';
import { formLinkList } from 'data/formLink';

const Content = () => {
  const PAGE: string = 'form-link';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={formLinkColList}
        data={formLinkList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
