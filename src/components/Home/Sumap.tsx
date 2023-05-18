import React, { useState } from 'react';

import { EnterState } from 'types/home';

import mapImg from 'image/map.jpg';
import chartImg from 'image/chart.jpg';
import Filter from 'components/Home/LeafletMap/Filter';
import Content from 'components/Home/LeafletMap/Content';

interface SumapProps {
  enter: EnterState;
}

type ActiveState = {
  year: string;
  item: string;
};

const Sumap = (props: SumapProps) => {
  const { enter } = props;
  const [active, setActive] = useState<ActiveState>({
    year: '',
    item: '',
  });
  return (
    <>
      <section className={`s4-sumap ${enter.s4 ? 'vivi' : ''}`}>
        <div className="main-box">
          <h2 className="titles4">survey map</h2>
          <Content />
        </div>
        {/*查看圖表才出現*/}
        <div className="chart-area">
          <div className="main-box">
            <div className="chart-wbg">
              <div className="ovf-mb">
                <img src={chartImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sumap;
