import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NewsItem } from 'types/news';

import { TypeItem } from 'types/utils';

const Item = ({ data, typeList }: { data: NewsItem; typeList: TypeItem[] }) => {
  const { id, type, title, content, newsDate } = data;
  const [types, setTypes] = useState<any[]>([]);

  const isFetchingTypeList = typeList.length === 0;

  useEffect(() => {
    if (!isFetchingTypeList) {
      const matchType = type.map((item) => typeList.find((v) => v.id === item));
      setTypes([...matchType]);
    }
  }, [typeList]);

  return (
    <>
      <li>
        <Link to={`/news/${id}`}>
          <div className="cat-date">
            {types.map((v, i) => {
              return (
                v && (
                  <div key={i} className="category e-tag" data-color={v.id}>
                    {v.title}
                  </div>
                )
              );
            })}
            <div className="date">{newsDate}</div>
          </div>
          <h3>{title}</h3>
          <p>{content}</p>
        </Link>
      </li>
    </>
  );
};

export default Item;
