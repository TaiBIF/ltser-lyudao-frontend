import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import { downloadRecordColList } from 'data/dashboard';
import { DOWNLOAD_RECORD_API_URL } from 'data/api';
import { DownloadItem } from 'types/dashboard';
import usePage from 'hooks/utils/usePage';
import useDashboard from 'hooks/page/useDashboard';

const DownloadRecord = () => {
  const PAGE: string = 'download';

  const [downloadList, setDownloadList] = useState<DownloadItem[]>([]);

  const { getList } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  useEffect(() => {
    getList({
      url: DOWNLOAD_RECORD_API_URL,
      setList: setDownloadList,
      params: { page: currentPage },
      setPaginationData,
      withHeaders: true,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={downloadRecordColList}
        data={downloadList}
        renderAction={() => null}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default DownloadRecord;
