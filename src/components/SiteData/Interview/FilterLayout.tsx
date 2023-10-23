import React from 'react';
import { useTranslation } from 'react-i18next';

import { interviewTargetList, interviewTypeList } from 'data/siteData';
import { Field, useFormikContext } from 'formik';

const FilterLayout = ({
  isSubmitting,
  I18N_KEY_PREFIX,
}: {
  isSubmitting: boolean;
  I18N_KEY_PREFIX: string;
}) => {
  const { t } = useTranslation();

  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      <div className="item-set2">
        <div className="input-item">
          <div className="title">
            {t(`${I18N_KEY_PREFIX}.keywordLabel`)}
            <div className="line" />
          </div>
          <Field
            type="text"
            name="keyword"
            placeholder={t(`${I18N_KEY_PREFIX}.keywordText`)}
          />
        </div>
        <div className="input-item">
          <div className="title">
            {t(`${I18N_KEY_PREFIX}.targetLabel`)}
            <div className="line" />
          </div>
          <Field as="select" name="target">
            <option value="">
              {t(`${I18N_KEY_PREFIX}.targetDefaultOption`)}
            </option>
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
          {t(`${I18N_KEY_PREFIX}.typeLabel`)}
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
          {t(`${I18N_KEY_PREFIX}.clearBtn`)}
        </button>
        <button className="searchall" type="submit">
          {t(`${I18N_KEY_PREFIX}.submitBtn`)}
        </button>
      </div>
    </>
  );
};

export default FilterLayout;
