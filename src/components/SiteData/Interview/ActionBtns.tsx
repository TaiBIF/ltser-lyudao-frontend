import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import NextIcon from 'components/NextIcon';
import PrevIcon from 'components/PrevIcon';

import { interviewList } from 'data/siteData';
import { useNavigate } from 'react-router-dom';

const ActionBtns = () => {
  const { interviewId } = useParams();
  const id = Number(interviewId);

  const hasPrev = interviewId && id - 1 >= 1;
  const hasNext = interviewId && id + 1 <= interviewList.length;

  const navigate = useNavigate();

  return (
    <>
      {hasPrev && (
        <Link
          to={`/site-data/social-observation/social-interview-data/${id - 1}`}
        >
          <PrevIcon />
          <p>上一則</p>
        </Link>
      )}
      <a
        onClick={() =>
          navigate('/site-data/social-observation/social-interview-data')
        }
      >
        返回列表
      </a>
      {hasNext && (
        <Link
          to={`/site-data/social-observation/social-interview-data/${id + 1}`}
        >
          <p>下一則</p>
          <NextIcon />
        </Link>
      )}
    </>
  );
};

export default ActionBtns;
