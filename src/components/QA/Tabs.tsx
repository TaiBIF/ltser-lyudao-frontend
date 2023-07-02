import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { TypeItem } from 'types/utils';
import { QA_TYPE_API_URL } from 'data/api';
import { qaTypeList } from 'data/qa';
import useRender from 'hooks/page/useRender';

interface TabProps {
  active: number | string;
  setActive: Dispatch<SetStateAction<number | string>>;
}

const Tabs = (props: TabProps) => {
  const { active, setActive } = props;
  const { getList } = useRender();
  const [qaTypes, setQaTypes] = useState<TypeItem[]>([]);
  const [data, setData] = useState<TypeItem[]>([]);

  const isFetchingList = qaTypes.length === 0;

  const handleActiveTab = (id: number | string) => {
    setActive(id);
  };

  useEffect(() => {
    getList({
      url: QA_TYPE_API_URL,
      setList: setQaTypes,
      defaultList: qaTypeList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingList) {
      setData([{ id: 0, title: '全部' }, ...qaTypes]);
    }
  }, [qaTypes]);

  return (
    <>
      {!isFetchingList && (
        <div className="qa-tab">
          <ul>
            {/*現在位置加now*/}
            {data.map((v) => {
              const { id, title } = v;
              return (
                <li
                  key={id}
                  className={`${id === active ? 'now' : ''}`}
                  onClick={() => {
                    if (id !== undefined) {
                      handleActiveTab(id);
                    }
                  }}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Tabs;
