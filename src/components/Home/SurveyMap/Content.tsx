import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { EnterState } from 'types/home';

import MapContent from 'components/Home/SurveyMap/Map/Content';
import ChartContent from 'components/Home/SurveyMap/Chart/Content';
import DownloadPopup from 'components/Home/SurveyMap//Map/DownloadPopup';

import { useSurveyMapContext } from 'context/SurveyMapContext';

interface ContentProps {
  enter: EnterState;
  PAGE_NAME: string;
}

const Content = (props: ContentProps) => {
  const { enter, PAGE_NAME } = props;

  const COMPONENT_NAME = 'SurveyMap';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const { filter, setFilter } = useSurveyMapContext();

  useEffect(() => {
    setFilter({ ...filter, chart: false });
  }, [filter.id]);

  return (
    <>
      <section className={`s4-sumap ${enter.s4 ? 'vivi' : ''}`}>
        <div className="main-box">
          <h2 className="titles4">{t(`${I18N_KEY_PREFIX}.title`)}</h2>
          <MapContent I18N_KEY_PREFIX={I18N_KEY_PREFIX} />
        </div>
        {/*查看圖表才出現*/}
        {filter.chart && (
          <div className="chart-area" id="chart">
            <div className="main-box">
              <div className="chart-wbg" style={{ height: 'max-content' }}>
                <div className="ovf-mb">
                  <ChartContent I18N_KEY_PREFIX={I18N_KEY_PREFIX} />
                </div>
              </div>
            </div>
          </div>
        )}
        <DownloadPopup />
      </section>
    </>
  );
};

export default Content;
