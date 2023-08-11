import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { AboutItem, HeaderAboutSubItem } from 'types/about';

import { aboutAttachmentColList } from 'data/dashboard';
import { ABOUT_ATTACHMENT_API_URL, ABOUT_ATTACHMENT_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';
import { ColItem, TypeItem } from 'types/utils';
import { useHeaderContext } from 'context/HeaderContext';

const Content = () => {
  const PAGE: string = ABOUT_ATTACHMENT_PATH;

  const [attachmentList, setAttachmentList] = useState<AboutItem[] | null>(
    null
  );
  const [colList, setColList] = useState<ColItem[]>([]);
  const [aboutList, setAboutList] = useState<HeaderAboutSubItem[]>([]);

  const { getList, handleRelate } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  const { about } = useHeaderContext();

  const isFetchingAboutList = aboutList.length === 0;

  useEffect(() => {
    getList({
      url: ABOUT_ATTACHMENT_API_URL,
      setList: setAttachmentList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  useEffect(() => {
    const abouts: HeaderAboutSubItem[] = Object.entries(about).flatMap(
      ([key, value]) => value as HeaderAboutSubItem
    );
    setAboutList([...abouts]);
  }, []);

  useEffect(() => {
    if (!isFetchingAboutList) {
      const aboutColList = aboutAttachmentColList.map((v) => {
        if (v.id === 'aboutId') {
          return {
            ...v,
            relate: aboutList,
          };
        }
        return v;
      });
      setColList([...aboutColList]);
    }
  }, [aboutList]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={colList}
        data={attachmentList}
        renderAction={() => <AddBtn page={PAGE} />}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
