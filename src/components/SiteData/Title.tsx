import React from 'react';
import { ecoAsideList, economyAsideList, envAsideList } from 'data/siteData';

const Title = ({ paths, url }: { paths: string[]; url: string }) => {
  let asideList;
  let title;
  const observation = paths[paths.length - 2].split('-')[0];
  const item = paths[paths.length - 1];

  switch (observation) {
    case 'ecological':
      asideList = ecoAsideList;
      break;
    case 'social':
      asideList = economyAsideList;
      break;
    case 'environmental':
    default:
      asideList = envAsideList;
      break;
  }

  title = asideList
    .map((v) => v.list)
    .flat()
    .find((v) => v?.link === item)?.title
    ? asideList
        .map((v) => v.list)
        .flat()
        .find((v) => v?.link === item)?.title
    : asideList.find((v) => v?.link === item)?.title;

  return (
    <>
      <div className="infbox-title">
        <div className="titlearea">
          <h2>
            {title}
            <div className="mark-cir">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
              >
                <g
                  id="Ellipse_2931"
                  data-name="Ellipse 2931"
                  fill="none"
                  stroke="#e8d06a"
                  strokeWidth={4}
                >
                  <circle cx={9} cy={9} r={9} stroke="none" />
                  <circle cx={9} cy={9} r={7} fill="none" />
                </g>
              </svg>
            </div>
          </h2>
          <div className="line" />
        </div>
        <a href={url} className="meta" target="_blank" rel="noreferrer">
          查看資料集與研究方法
        </a>
      </div>
    </>
  );
};

export default Title;
