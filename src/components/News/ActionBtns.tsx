import React from 'react';
import { Link } from 'react-router-dom';
import PrevIcon from 'components/PrevIcon';
import NextIcon from 'components/NextIcon';

import { newsList } from 'data/news';

interface ActionBtnsProps {
  id: number;
}

const ActionBtns = (props: ActionBtnsProps) => {
  const { id } = props;
  const formatPrevId = id === 0 ? newsList.length : id - 1;
  const formatNextId = id === newsList.length ? 1 : id + 1;
  return (
    <>
      <div className="btn-area">
        <Link to={`/news/${formatPrevId}`}>
          <PrevIcon />
          <p>上一則</p>
        </Link>
        <Link to={`/news`}>回列表</Link>
        <Link to={`/news/${formatNextId}`}>
          <p>下一則</p>
          <NextIcon />
        </Link>
      </div>
    </>
  );
};

export default ActionBtns;
