import React, { useState, useEffect } from 'react';

import { EnterState } from 'types/home';

import mapImg from 'image/map.jpg';
import chartImg from 'image/chart.jpg';
import Filter from 'components/Home/LeafletMap/Filter';
import MapContent from 'components/Home/LeafletMap/Content';
import ChartContent from 'components/Home/EchartsChart/Content';
import { useSurveyMapContext } from 'context/SurveyMapContext';

interface SurveyMapProps {
  enter: EnterState;
}

const SurveyMap = (props: SurveyMapProps) => {
  const { enter } = props;
  const { filter, setFilter } = useSurveyMapContext();

  useEffect(() => {
    setFilter({ ...filter, chart: false });
  }, [filter.id]);

  return (
    <>
      <section className={`s4-sumap ${enter.s4 ? 'vivi' : ''}`}>
        <div className="main-box">
          <h2 className="titles4">survey map</h2>
          <MapContent />
        </div>
        {/*查看圖表才出現*/}
        {filter.chart && (
          <div className="chart-area" id="chart">
            <div className="main-box">
              <div className="chart-wbg" style={{ height: 'max-content' }}>
                <div className="ovf-mb">
                  <ChartContent />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SurveyMap;
