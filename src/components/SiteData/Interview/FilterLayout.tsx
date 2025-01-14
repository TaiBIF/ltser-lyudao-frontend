import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { interviewTargetList, interviewTypeList } from 'data/siteData';
import { Field, useFormikContext } from 'formik';
import useRender from 'hooks/page/useRender';

const FilterLayout = ({
  isSubmitting,
  I18N_KEY_PREFIX,
  participantType,
  capIssueType,
  localIssueType,
  selectedKeyword,
}: {
  isSubmitting: boolean;
  I18N_KEY_PREFIX: string;
  participantType: { id: number; title: string }[];
  capIssueType: { id: number; title: string; value: string }[];
  localIssueType: { id: number; title: string }[];
  selectedKeyword: string;
}) => {
  const { t } = useTranslation();

  const { values, setFieldValue } = useFormikContext();

  // useEffect(() => {
  //   setFieldValue('keyword', selectedKeyword);
  // }, [selectedKeyword]);

  return (
    <>  
      <div className="item-set2">
        {/* <div className="input-item">
          <div className="title">
            {t(`${I18N_KEY_PREFIX}.keywordLabel`)}
            <div className="line" />
          </div>
          <Field
            type="text"
            name="keyword"
            placeholder={t(`${I18N_KEY_PREFIX}.keywordText`)}
          />
        </div> */}
        <div className="input-item">
          <div className="title">
            {t(`${I18N_KEY_PREFIX}.contentKeywordLabel`)}
            <div className="line" />
          </div>
          <Field
            type="text"
            name="content"
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
            {participantType.map((v) => (
              <option key={v.id} value={v.id}>
                {v.title}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div className="check-itembox">
        <div className="title">
          {t(`${I18N_KEY_PREFIX}.capIssueLabel`)}
          <div className="line" />
        </div>
        <div className="itembox">
          {capIssueType.map((v) => (
            <label key={v.id} className="check-item">
              {v.title}
              <Field
                type="checkbox"
                name="capTypes"
                value={v.id}
                checked={(values as Record<string, any>).capTypes.includes(
                  String(v.id)
                )}
              />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <div className="check-itembox">
        <div className="title">
          {t(`${I18N_KEY_PREFIX}.localIssueLabel`)}
          <div className="line" />
        </div>
        <div className="itembox">
          {localIssueType.map((v) => (
            <label key={v.id} className="check-item">
              {v.title}
              <Field
                type="checkbox"
                name="localTypes"
                value={v.id}
                checked={(values as Record<string, any>).localTypes.includes(
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
