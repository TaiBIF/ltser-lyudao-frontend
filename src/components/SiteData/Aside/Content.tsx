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
  const [active, setActive] = useState<boolean>(false);
  const targetRef = useRef<HTMLUListElement>(null);

  const handleMobileClick = () => {
    setActive(!active);
  };


  return (
    <>
      <div className="left-mainmenu" style={{ overflow: 'visible' }}>
        <div className="btn-mb" onClick={handleMobileClick}>
          <p>觀測項目選擇</p>
          <ArrowUpIcon />
        </div>
        <ul className="level-1 c-aside u-slide-toggle" ref={targetRef}>
          {data.map((item) => {
            return item.list ? (
              <Item key={item.id} data={item} page={page} />
            ) : (
              <li key={`${item.id}`}>
                <Link
                  to={`/site-data/${page}/${item.link}`}
                  preventScrollReset={true}
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
