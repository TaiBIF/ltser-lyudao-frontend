import React, { useEffect, useState } from 'react';
import ArrowIcon from './ArrowIcon';
import { usePopulationContext } from 'context/SocialEconomyData/PopulationContext';
import _ from 'lodash';

const Select = () => {
  const { filter, setFilter, raw, data } = usePopulationContext();
  const [years, setYears] = useState<string[]>([]);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, [e.currentTarget.name]: e.currentTarget.value });
  };

  useEffect(() => {
    const yearList: string[] = _.uniq(
      raw.map((o: any) => String(o['資料時間'].split('Y')[0]) as string)
    );
    setYears(yearList);
  }, []);

  return (
    <>
      <div className="c-select c-form__set">
        <label htmlFor="site" className="c-select__label c-form__label">
          請選擇年份
        </label>
        <div className="c-select__wrapper">
          <select
            id="site"
            name="year"
            className="c-select__select"
            onChange={handleSelectChange}
            value={filter.year}
          >
            <option value="" disabled>
              請選擇
            </option>
            {years.map((v: string) => {
              return (
                <option key={v} value={v}>
                  {Number(v) + 1911} 年
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
