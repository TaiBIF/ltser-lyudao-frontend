import { interviewTargetList, interviewTypeList } from 'data/siteData';
import { Field, useFormikContext } from 'formik';
import React from 'react';

const FilterLayout = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      <div className="item-set2">
        <div className="input-item">
          <div className="title">
            關鍵字
            <div className="line" />
          </div>
          <Field type="text" name="keyword" placeholder="請輸入關鍵字" />
        </div>
        <div className="input-item">
          <div className="title">
            受訪對象
            <div className="line" />
          </div>
          <Field as="select" name="target">
            <option value="">選擇受訪對象</option>
            {interviewTargetList.map((v) => (
              <option key={v.id} value={v.id}>
                {v.title}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div className="check-itembox">
        <div className="title">
          議題分類
          <div className="line" />
        </div>
        <div className="itembox">
          {interviewTypeList.map((v) => (
            <label key={v.id} className="check-item">
              {v.title}
              <Field
                type="checkbox"
                name="types"
                value={v.id}
                checked={(values as Record<string, any>).types.includes(
                  String(v.id)
                )}
              />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <div className="send-btnarea">
        <button className="clearall" type="reset">
          清除
        </button>
        <button className="searchall" type="submit">
          搜尋
        </button>
      </div>
    </>
  );
};

export default FilterLayout;
