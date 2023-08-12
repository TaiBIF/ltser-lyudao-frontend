import React, { Dispatch, SetStateAction } from 'react';

import { FilterItem } from 'types/siteData';
import ArrowIcon from './Aside/ArrowIcon';

interface SelectProps {
  title: string;
  options: string[];
  filter: FilterItem;
  setFilter: Dispatch<SetStateAction<FilterItem>>;
}

const Select = (props: SelectProps) => {
  const { title, options, filter, setFilter } = props;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <>
      <div className="c-select c-form__set">
        {/* <h3 className="c-select__title">{title}篩選</h3> */}
        <label htmlFor="site" className="c-select__label c-form__label">
          請選擇觀測站
        </label>
        <div className="c-select__wrapper">
          <select
            id="site"
            name="site"
            className="c-select__select"
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              請選擇{title}
            </option>
            {options.map((v: string) => {
              return (
                <option key={v} value={v}>
                  {v}
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

export default Select;
