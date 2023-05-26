import React from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import { downloadColList, downloadList } from 'data/dashboard';

const Download = () => {
  const PAGE: string = 'download';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={downloadColList}
        data={downloadList}
        renderAction={() => null}
      />
    </>
  );
};

export default Download;
