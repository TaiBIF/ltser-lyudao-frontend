import React, { useState, useEffect, useRef } from 'react';

import Arrow from 'components/SiteData/Aside/Arrow';

import { AsideItem } from 'types/siteData';

import { gsapSlideToggle } from 'utils/animation';

interface SubItemProps {
  parentId: number;
  data: AsideItem;
}

const SubItem = (props: SubItemProps) => {
  const { parentId, data } = props;
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
      <li key={`${parentId}-${data.id}`}>
        {data.list ? (
          <>
            {/*給item-box now 並展開level-3*/}
            <div className="item-box2" onClick={handleClick}>
              <div className="paddborderb">
                <p>{data.title}</p>
                <Arrow />
              </div>
            </div>
            <ul className="level-3" ref={targetRef}>
              {data.list.map((finalItem) => {
                return (
                  <li key={`${parentId}-${data.id}-${finalItem.id}`}>
                    <a href={finalItem.link} className="linkto">
                      - {finalItem.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <li>
            <a href={data.link} className="item-box2 linkto">
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

export default SubItem;
