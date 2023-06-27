import Arrow from 'components/SiteData/Aside/ArrowIcon';
import Item from 'components/SiteData/Aside/Item';

import { AsideItem } from 'types/siteData';

type ContentProps = {
  data: AsideItem[];
};

const Content = (props: ContentProps) => {
  const { data } = props;

  return (
    <>
      <div className="left-mainmenu">
        <div className="btn-mb">
          <p>觀測項目選擇</p>
          <svg
            className="arrup"
            xmlns="http://www.w3.org/2000/svg"
            width="18.121"
            height="10.121"
            viewBox="0 0 18.121 10.121"
          >
            <g
              id="Group_691"
              data-name="Group 691"
              transform="translate(-499.439 -647.439)"
            >
              <line
                id="Line_36"
                data-name="Line 36"
                y1={8}
                x2={8}
                transform="translate(500.5 648.5)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <line
                id="Line_37"
                data-name="Line 37"
                x1={8}
                y1={8}
                transform="translate(508.5 648.5)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>
        <ul className="level-1">
          {data.map((item) => {
            return item.list ? (
              <Item key={item.id} data={item} />
            ) : (
              <li key={`${item.id}`}>
                {/*本身就是連結的給item-box linkto*/}
                <a
                  href={`/site-data/ecological-observation/${item.link}`}
                  className="item-box linkto"
                >
                  <p>{item.title}</p>
                  <Arrow />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Content;
