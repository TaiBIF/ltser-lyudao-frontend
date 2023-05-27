import React, { useState, useEffect, useRef } from 'react';

import Arrow from 'components/SiteData/Aside/Arrow';
import SubItem from 'components/SiteData/Aside/SubItem';

import { AsideItem } from 'types/siteData';

import { gsapSlideToggle } from 'utils/animation';

interface ItemProps {
  data: AsideItem;
}

const Item = (props: ItemProps) => {
  const { data } = props;
  const [active, setActive] = useState(false);
  const targetRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
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
              onClick={handleClick}
            >
              <p>{data.title}</p>
              <Arrow />
            </div>
            <ul className="level-2" ref={targetRef}>
              {data.list.map((subItem) => {
                return (
                  <SubItem key={subItem.id} parentId={data.id} data={subItem} />
                );
              })}
            </ul>
          </>
        ) : (
          <li key={`${data.id}`}>
            <a href="/" className="item-box2 linkto">
              <div className="paddborderb">
                <p>{data.title}</p>
                <Arrow />
              </div>
            </a>
          </li>
        )}
      </li>
    </>
  );
};

export default Item;
