import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ArrowIcon from './Aside/ArrowIcon';

import { FilterItem } from 'types/siteData';

interface SelectProps {
  title: string;
  options: string[];
  filter: FilterItem;
  setFilter: Dispatch<SetStateAction<FilterItem>>;
}

const Select = (props: SelectProps) => {
  const { title, options, filter, setFilter } = props;
  const { search, pathname } = useLocation();
  const site = new URLSearchParams(search).get('site');

  useEffect(() => {
    if (site) {
      setFilter({ ...filter, site: site });
    } else {
      setFilter({ ...filter, site: options[0] });
    }
  }, [pathname]);

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
            value={filter.site}
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
