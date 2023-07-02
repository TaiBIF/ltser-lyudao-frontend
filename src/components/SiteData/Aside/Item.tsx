import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import Arrow from 'components/SiteData/Aside/ArrowIcon';
import SubItem from 'components/SiteData/Aside/SubItem';

import { AsideItem } from 'types/siteData';

import { gsapSlideToggle } from 'utils/animation';

interface ItemProps {
  data: AsideItem;
  page: string;
}

const Item = (props: ItemProps) => {
  const { data, page } = props;
  const [active, setActive] = useState(false);
  const targetRef = useRef<HTMLUListElement>(null);
  const { dataId } = useParams();

  const isActiveLink = dataId === data.link;

  const handleMenuClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      target.style.display = 'block';
      if (active) {
        gsapSlideToggle('auto', target, true);
      } else {
        gsapSlideToggle('auto', target, false);
      }
    }
  }, [active]);

  return (
    <>
      <li key={`${data.id}`}>
        {data.list ? (
          <>
            {/*給item-box now 並展開level-2*/}
            <div
              className={`item-box ${active ? 'now' : ''}`}
              onClick={handleMenuClick}
            >
              <p>{data.title}</p>
              <Arrow />
            </div>
            <ul className="level-2" ref={targetRef}>
              {data.list.map((subItem) => {
                return (
                  <SubItem
                    key={subItem.id}
                    parentId={data.id}
                    data={subItem}
                    setParentActive={setActive}
                    page={page}
                  />
                );
              })}
            </ul>
          </>
        ) : (
          <li key={`${data.id}`}>
            <Link
              to={`/site-data/${page}/${data.link}`}
              className={`item-box2 linkto ${isActiveLink ? 'now' : ''}`}
            >
              <div className="paddborderb">
                <p>{data.title}</p>
                <Arrow />
              </div>
            </Link>
          </li>
        )}
      </li>
    </>
  );
};

export default Item;
