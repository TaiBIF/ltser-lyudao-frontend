import React from 'react';

const Filter = () => {
  return (
    <>
      <div className="select-area c-map__filter">
        <h3 className="item-title">測站/樣區篩選</h3>
        <select name="year">
          <option value="">年份</option>
        </select>
        <select name="item">
          <option value="">觀測項目</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
