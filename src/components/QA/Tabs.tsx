import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { TypeItem } from 'types/utils';
import { FilterItem } from 'types/qa';

import { QA_TYPE_API_URL } from 'data/api';

import useRender from 'hooks/page/useRender';
import { useTranslation } from 'react-i18next';
import { useLangContext } from 'context/LangContext';

interface TabProps {
  filter: FilterItem;
  setFilter: Dispatch<SetStateAction<FilterItem>>;
  I18N_KEY_PREFIX: string;
}

const Tabs = (props: TabProps) => {
  const { filter, setFilter, I18N_KEY_PREFIX } = props;

  const { t } = useTranslation();
  const { lang } = useLangContext();

  const { getList } = useRender();
  const [qaTypes, setQaTypes] = useState<TypeItem[]>([]);
  const [data, setData] = useState<TypeItem[]>([]);

  const isFetchingList = qaTypes.length === 0;

  const handleTypeClick = (id: number | string) => {
    setFilter({ ...filter, type: id });
  };

  useEffect(() => {
    getList({
      url: QA_TYPE_API_URL,
      setList: setQaTypes,
    });
  }, [lang]);

  useEffect(() => {
    if (!isFetchingList) {
      setData([
        { id: 0, title: t(`${I18N_KEY_PREFIX}.allTabBtn`) },
        ...qaTypes,
      ]);
    }
  }, [qaTypes]);

  return (
    <>
      <div className="qa-tab">
        <ul>
          {/*現在位置加now*/}
          {!isFetchingList &&
            data.map((v) => {
              const { id, title } = v;
              return (
                <li
                  key={id}
                  className={`${id === filter.type ? 'now' : ''}`}
                  onClick={() => {
                    if (id !== undefined) {
                      handleTypeClick(id);
                    }
                  }}
                >
                  {title}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Tabs;
