import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  generateEcoAsideList,
  generateEconomyFishingAsideList,
  generateEnvAsideList,
  generateEcoThirdPartyAsideList,
} from 'data/siteData';

const Title = ({
  paths,
  url,
  PAGE_NAME,
  category,
}: {
  paths: string[];
  url: string;
  PAGE_NAME: string;
  category?: string;
}) => {
  const I18N_KEY_PREFIX = PAGE_NAME;

  const { t } = useTranslation();

  const ecoAsideList = generateEcoAsideList();
  const envAsideList = generateEnvAsideList();
  const economyFishingAsideList = generateEconomyFishingAsideList();
  const ecoThirdPartyAsideList = generateEcoThirdPartyAsideList();

  let asideList;
  let title;
  const observation = paths[2].split('-')[0];
  const item = paths[paths.length - 1];

  switch (observation) {
    case 'ecological':
      if (category === 'third-party') {
        asideList = ecoThirdPartyAsideList;
      } else {
        asideList = ecoAsideList;
      }
      break;
    case 'social':
      asideList = economyFishingAsideList;
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
          {t(`${I18N_KEY_PREFIX}.viewMetadataBtn`)}
        </a>
      </div>
    </>
  );
};

export default Title;
