import React from 'react';

import DateIcon from 'components/News/DateIcon';

const DateFilter = () => {
  return (
    <>
      <div className="tool-select">
        <p>篩選</p>
        <div className="date-box">
          <div className="inp-item">
            <input type="text" placeholder="2020-02-02" />
            <DateIcon />
          </div>
          <span>~</span>
          <div className="inp-item">
            <input type="text" placeholder="2020-02-02" />
            <DateIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateFilter;
