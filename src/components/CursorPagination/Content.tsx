import React, { useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import NextIcon from 'components/Pagination/NextIcon';
import PrevIcon from 'components/Pagination/PrevIcon';

interface PaginationProps {
  scrollTargetRef?: React.RefObject<HTMLElement>;
  currentCursor?: string;
  setCurrentCursor?: Dispatch<SetStateAction<string>>;
  paginationData: {
    currentPage?: number;
    recordsPerPage?: number;
    totalPages?: number;
    totalRecords?: number;
    nextCursor?: string | null;
    prevCursor?: string | null;
  };
}

const Content = (props: PaginationProps) => {
  const { scrollTargetRef = null, paginationData, setCurrentCursor } = props;
  const { t } = useTranslation();
  const { nextCursor } = paginationData;
  const [cursorHistory, setCursorHistory] = useState<string[]>(['*']);

  const handlePage = (direction: string, cursor: string | null) => {
    if (cursor) {
      if (scrollTargetRef?.current) {
        scrollTargetRef.current.scrollIntoView({
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (direction === 'next') {
        setCurrentCursor!(cursor);
        setCursorHistory((prevHistory) => [...prevHistory, cursor]);
      } else {
        if (cursorHistory.length > 1) {
          setCurrentCursor!(cursorHistory[cursorHistory.length - 2]);
          setCursorHistory(cursorHistory.slice(0, -1));
        }
      }
    }
  };

  return (
    <div className="page-num">
      {cursorHistory.length > 1 && (
        <div
          className="back m-1"
          onClick={() =>
            handlePage('prev', cursorHistory[cursorHistory.length - 1])
          }
        >
          <PrevIcon />
          <p>{t('common.Pagination.prevBtn')}</p>
        </div>
      )}
      {nextCursor && (
        <div
          className="next m-1"
          onClick={() => handlePage('next', nextCursor)}
        >
          <p>{t('common.Pagination.nextBtn')}</p>
          <NextIcon />
        </div>
      )}
    </div>
  );
};

export default Content;
