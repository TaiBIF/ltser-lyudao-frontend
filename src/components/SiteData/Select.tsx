import React, { Dispatch, SetStateAction } from 'react';

import { FilterItem } from 'types/siteData';

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
      <div className="c-select">
        {/* <h3 className="c-select__title">{title}篩選</h3> */}
        <select name="site" onChange={handleSelectChange}>
          <option value="" disabled>
            請選擇{title}
          </option>
          {options.map((v: string) => {
            return <option value={v}>{v}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
