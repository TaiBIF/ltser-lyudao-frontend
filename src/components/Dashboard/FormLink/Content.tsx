import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';

import { formLinkColList } from 'data/dashboard';
import { formLinkList } from 'data/formLink';

const Content = () => {
  return (
    <>
      <TableTemplate
        page="form-link"
        cols={formLinkColList}
        data={formLinkList}
      />
    </>
  );
};

export default Content;
