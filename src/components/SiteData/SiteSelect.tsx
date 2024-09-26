import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import ArrowIcon from './Aside/ArrowIcon';

import { FilterItem, SelectItem } from 'types/siteData';

interface SiteSelectProps {
  title: string;
  options: SelectItem[];
  filter: FilterItem;
  setFilter: Dispatch<SetStateAction<FilterItem>>;
  I18N_KEY_PREFIX: string;
}

const SiteSelect = (props: SiteSelectProps) => {
  const { title, options, filter, setFilter, I18N_KEY_PREFIX } = props;

  const { t } = useTranslation();

  const { search, pathname } = useLocation();
  const site = new URLSearchParams(search).get('site');

  useEffect(() => {
    if (site) {
      setFilter({ ...filter, site: site, depth: '20 m' });
    } else {
      setFilter({ ...filter, site: String(options[0].id), depth: '20 m' });
    }
  }, [pathname]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <>
      <div className="c-select c-form__set c-select__flex-container">
        <div>
          <label htmlFor="site" className="c-select__label c-form__label">
            {t(`${I18N_KEY_PREFIX}.siteLabel2`, { title })}
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
                {t(`${I18N_KEY_PREFIX}.siteDefaultOption`, { title })}
              </option>
              {options.map((v: SelectItem) => {
                return (
                  <option key={v.id} value={v.id}>
                    {v.title}
                  </option>
                );
              })}
            </select>
            <label htmlFor="site" className="c-select__arrow">
              <ArrowIcon />
            </label>
          </div>
        </div>
        {pathname === '/site-data/ecological-observation/ocean-sound-index' && (
          <div>
            <label htmlFor="site" className="c-select__label c-form__label">
              {t(`${I18N_KEY_PREFIX}.siteLabel3`)}
            </label>
            <div className="c-select__wrapper">
              <select
                className="c-select__select c-select__depth"
                id="depth"
                name="depth"
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  {t(`${I18N_KEY_PREFIX}.siteLabel3`)}
                </option>
                <option value="20 m">20m</option>
                <option value="40 m">40m</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SiteSelect;
