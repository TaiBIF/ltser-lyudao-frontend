import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NewsItem } from 'types/news';

import { newsTypeList } from 'data/news';
import { TypeItem } from 'types/utils';

interface NewsListItemProps {
  data: NewsItem;
}

const NewsListItem = (props: NewsListItemProps) => {
  const { data } = props;
  const { id, type, title, content, modified } = data;
  const [typeData, setTypeData] = useState<TypeItem>({
    id: '',
    title: '',
    colorClass: '',
  });

  useEffect(() => {
    const matchType = newsTypeList.find((v) => v.id === type);
    if (matchType) {
      setTypeData({ ...matchType });
    }
  }, []);

  return (
    <>
      <li>
        <Link to={`/news/${id}`}>
          <div className="cat-date">
            <div className={`category ${typeData.colorClass}`}>
              {typeData.title}
            </div>
            <div className="date">{modified}</div>
          </div>
          <h3>{title}</h3>
          <p>{content}</p>
        </Link>
      </li>
    </>
  );
};

export default NewsListItem;
