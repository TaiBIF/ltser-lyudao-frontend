import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Arrow from 'components/SiteData/Aside/ArrowIcon';

import { AsideItem } from 'types/siteData';

import { gsapSlideToggle } from 'utils/animation';

interface SubItemProps {
  parentId: number;
  data: AsideItem;
  setParentActive: Dispatch<SetStateAction<boolean>>;
  page: string;
  parentLink?: string;
}

const SubItem = (props: SubItemProps) => {
  const { parentId, data, setParentActive, page } = props;

  const [active, setActive] = useState(false);
  const targetRef = useRef<HTMLUListElement>(null);
  const { dataId } = useParams();

  const { pathname } = useLocation();
  const path = pathname.split('/').at(-1);

  const isActiveLink =
    ((dataId && dataId === data.link) || path === data.link) &&
    data.link !== '/';

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

  useEffect(() => {
    if (isActiveLink) {
      setParentActive(true);
    }
  }, [dataId]);

  return (
    <>
      {data.list ? (
        <>
          <li key={`${parentId}-${data.id}`}>
            {/*給item-box now 並展開level-3*/}
            <div className="item-box2" onClick={handleMenuClick}>
              <div className="paddborderb">
                <p>{data.title}</p>
                <Arrow />
              </div>
            </div>
            <ul className="level-3" ref={targetRef}>
              {data.list.map((finalItem) => {
                return (
                  <li key={`${parentId}-${data.id}-${finalItem.id}`}>
                    {finalItem.link && (
                      <Link to={finalItem.link} className="linkto">
                        - {finalItem.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        </>
      ) : (
        <li key={`${parentId}-${data.id}`}>
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
    </>
  );
};

export default SubItem;
