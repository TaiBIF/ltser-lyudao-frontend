import { Link, useParams } from 'react-router-dom';

import Item from 'components/SiteData/Aside/Item';
import Arrow from 'components/SiteData/Aside/ArrowIcon';
import ArrowUpIcon from 'components/SiteData/Aside/ArrowUpIcon';

import { AsideItem } from 'types/siteData';
import { useEffect, useRef, useState } from 'react';
import { gsapSlideToggle } from 'utils/animation';

type ContentProps = {
  data: AsideItem[];
  page: string;
};

const Content = (props: ContentProps) => {
  const { data, page } = props;
  const { dataId } = useParams();
  const [active, setActive] = useState(false);
  const targetRef = useRef<HTMLUListElement>(null);

  const handleMobileClick = () => {
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
      <div className="left-mainmenu" style={{ overflow: 'visible' }}>
        <div className="btn-mb" onClick={handleMobileClick}>
          <p>觀測項目選擇</p>
          <ArrowUpIcon />
        </div>
        <ul className="level-1 c-aside" ref={targetRef}>
          {data.map((item) => {
            return item.list ? (
              <Item key={item.id} data={item} page={page} />
            ) : (
              <li key={`${item.id}`}>
                {/*本身就是連結的給item-box linkto*/}
                <Link
                  to={`/site-data/${page}/${item.link}`}
                  className={`item-box linkto c-aside__tab ${
                    dataId === item.link ? 'now ' : ''
                  }`}
                >
                  <p>{item.title}</p>
                  <Arrow />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Content;
