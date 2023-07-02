import { Link } from 'react-router-dom';

import Item from 'components/SiteData/Aside/Item';
import Arrow from 'components/SiteData/Aside/ArrowIcon';
import ArrowUpIcon from 'components/SiteData/Aside/ArrowUpIcon';

import { AsideItem } from 'types/siteData';

type ContentProps = {
  data: AsideItem[];
  page: string;
};

const Content = (props: ContentProps) => {
  const { data, page } = props;

  return (
    <>
      <div className="left-mainmenu" style={{ overflow: 'visible' }}>
        <div className="btn-mb">
          <p>觀測項目選擇</p>
          <ArrowUpIcon />
        </div>
        <ul className="level-1">
          {data.map((item) => {
            return item.list ? (
              <Item key={item.id} data={item} page={page} />
            ) : (
              <li key={`${item.id}`}>
                {/*本身就是連結的給item-box linkto*/}
                <Link
                  to={`/site-data/${page}/${item.link}`}
                  className="item-box linkto"
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
