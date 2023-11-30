import React, { Dispatch, SetStateAction } from 'react';
import { PaginationDataItem } from 'types/utils';
import ArrowIcon from './Aside/ArrowIcon';

const RecordSelect = ({
  paginationData,
  currentRecordsPerPage,
  setCurrentRecordsPerPage,
}: {
  paginationData: PaginationDataItem;
  currentRecordsPerPage: number;
  setCurrentRecordsPerPage: Dispatch<SetStateAction<number>>;
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentRecordsPerPage(Number(e.currentTarget.value));
  };
  return (
    <>
      <div className="c-select c-select--light c-form__set c-form__set--row">
        <label htmlFor="site" className="c-select__label c-form__label mb-0">
          一頁
        </label>
        <div className="c-select__wrapper">
          <select
            id="site"
            name="site"
            className="c-select__select"
            onChange={handleSelectChange}
            value={currentRecordsPerPage}
          >
            <option value="" disabled>
              請選擇筆數
            </option>
            {[10, 30, 50, 100].map((v: number) => {
              return (
                <option key={v} value={v}>
                  {v} 筆
                </option>
              );
            })}
          </select>
          <label htmlFor="site" className="c-select__arrow">
            <ArrowIcon />
          </label>
        </div>
      </div>
    </>
  );
};

export default RecordSelect;
