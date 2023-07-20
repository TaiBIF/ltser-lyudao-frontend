import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import { downloadColList } from 'data/dashboard';
import { DOWNLOAD_API_URL } from 'data/api';
import { DownloadItem } from 'types/dashboard';
import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';

const Download = () => {
  const PAGE: string = 'download';

  const [downloadList, setDownloadList] = useState<DownloadItem[]>([]);

  const { getList } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  useEffect(() => {
    getList({
      url: DOWNLOAD_API_URL,
      setList: setDownloadList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={downloadColList}
        data={downloadList}
        renderAction={() => null}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Download;
