import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import PrevIcon from 'components/PrevIcon';
import NextIcon from 'components/NextIcon';

import { newsList } from 'data/news';
import useRender from 'hooks/page/useRender';
import { NEWS_API_URL } from 'data/api';
import { NewsItem } from 'types/news';
import { PaginationDataItem } from 'types/utils';

interface ActionBtnsProps {
  id: number;
  currentPage: number;
  paginationData: PaginationDataItem;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setPaginationData: Dispatch<SetStateAction<PaginationDataItem>>;
  I18N_KEY_PREFIX: string;
}

const ActionBtns = (props: ActionBtnsProps) => {
  const { id, currentPage, setPaginationData, I18N_KEY_PREFIX } = props;

  const { t } = useTranslation();

  const { getList } = useRender();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [ids, setIds] = useState<number[]>([]);
  const [currentIdIndex, setCurrentIdIndex] = useState<number>(0);

  const isFetchingList = news.length === 0;
  const isFetchingIds = ids.length === 0;

  const hasPrev = currentIdIndex - 1 >= 0;
  const hasNext = currentIdIndex + 1 <= ids.length;

  useEffect(() => {
    getList({
      url: NEWS_API_URL,
      setList: setNews,
      defaultList: newsList,
      params: {
        page: currentPage,
      },
      setPaginationData,
    });
  }, [id]);

  useEffect(() => {
    if (!isFetchingList) {
      const idList = news.map((v) => v.id);
      setIds([...(idList as number[])]);
    }
  }, [news]);

  useEffect(() => {
    if (!isFetchingIds) {
      const indexById = ids.findIndex((v) => v === id);
      setCurrentIdIndex(indexById);
    }
  }, [ids]);

  return (
    <>
      <div className="btn-area">
        {hasPrev && (
          <Link to={`/news/${ids[currentIdIndex - 1]}`}>
            <PrevIcon />
            <p>{t(`${I18N_KEY_PREFIX}.prevBtn`)}</p>
          </Link>
        )}
        <Link to={`/news`}>{t(`${I18N_KEY_PREFIX}.backBtn`)}</Link>
        {hasNext && (
          <Link to={`/news/${ids[currentIdIndex + 1]}`}>
            <p>{t(`${I18N_KEY_PREFIX}.nextBtn`)}</p>
            <NextIcon />
          </Link>
        )}
      </div>
    </>
  );
};

export default ActionBtns;
