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
  setSelectedKeyword,
  selectedKeyword,
  scrollTargetRef,
  selectedLocalIssueTypeTitle,
  selectedCapIssueTypeTitle,
  selectedParticipantType,
}: {
  isSubmitting: boolean;
  I18N_KEY_PREFIX: string;
  participantType: { id: number; title: string }[];
  capIssueType: { id: number; title: string; value: string }[];
  localIssueType: { id: number; title: string }[];
  setSelectedKeyword: (keyword: string) => void;
  selectedKeyword: string;
  scrollTargetRef?: any;
  selectedLocalIssueTypeTitle: string[];
  selectedCapIssueTypeTitle: string[];
  selectedParticipantType: string | null;
}) => {
  const { t } = useTranslation();

  const { values, setFieldValue } = useFormikContext();

  const handlePageScroll = () => {
    const navbar = document.querySelector('.header') as HTMLElement;
    const navbarHeight = navbar ? navbar.offsetHeight + 20 : 0;

    if (scrollTargetRef.current) {
      const elementRect = scrollTargetRef.current.getBoundingClientRect();
      const absolutePosition = window.scrollY + elementRect.top;
      const offsetPosition = absolutePosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const clearKeyword = () => {
    setSelectedKeyword('');
  };

  useEffect(() => {
    // 點擊議題列表中的關鍵字後，呈現到搜尋內文的搜索框中
    setFieldValue('content', selectedKeyword);
  }, [selectedKeyword]);

  useEffect(() => {
    // 點擊議題列表中的在地議題後，打勾搜索框中對應的選項
    setFieldValue('localTypes', selectedLocalIssueTypeTitle);
  }, [selectedLocalIssueTypeTitle]);

  useEffect(() => {
    // 點擊議題列表中的 CAP 議題後，打勾搜索框中對應的選項
    setFieldValue('capTypes', selectedCapIssueTypeTitle);
  }, [selectedCapIssueTypeTitle]);

  useEffect(() => {
    // 點擊議題列表中的受訪對象後，打勾搜索框中對應的選項
    if (selectedParticipantType) {
      setFieldValue('target', String(selectedParticipantType));
    }
  }, [selectedParticipantType]);

  return (
    <>
      <div className="item-set2">
        <div className="interview-input-item">
          <div className="title">
            {t(`${I18N_KEY_PREFIX}.contentKeywordLabel`)}
          </div>
          <Field
            type="text"
            name="content"
            placeholder={t(`${I18N_KEY_PREFIX}.keywordText`)}
          />
        </div>
        <div className="interview-input-item">
          <div className="title">{t(`${I18N_KEY_PREFIX}.targetLabel`)}</div>
          <Field as="select" name="target">
            <option value="">
              {t(`${I18N_KEY_PREFIX}.targetDefaultOption`)}
            </option>
            {participantType.map((v) => (
              <option key={v.id} value={v.title}>
                {v.title}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div className="interview-check-itembox">
        <div className="title">{t(`${I18N_KEY_PREFIX}.capIssueLabel`)}</div>
        <div className="title-comment">
          Comparative Agenda Project
          的主題，適合研究者使用，以進行跨國的比較研究
        </div>
        <div className="itembox">
          {capIssueType.map((v) => (
            <label key={v.id} className="check-item">
              {v.title}
              <Field
                type="checkbox"
                name="capTypes"
                value={v.title}
                checked={(values as Record<string, any>).capTypes.includes(
                  String(v.title)
                )}
              />
              <div className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <div className="interview-local-issue-check-itembox">
        <div className="title">{t(`${I18N_KEY_PREFIX}.localIssueLabel`)}</div>
        <div className="title-comment">
          針對綠島特有的在地細項議題，適合關注當地發展的民眾與單位使用
        </div>
        <div className="itembox">
          {localIssueType.map((v) => (
            <label key={v.id} className="check-item">
              {v.title}
              <Field
                type="checkbox"
                name="localTypes"
                value={v.title}
                checked={(values as Record<string, any>).localTypes.includes(
                  String(v.title)
                )}
              />
              <div className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <div className="send-btnarea">
        <button className="clearall" type="reset" onClick={clearKeyword}>
          {t(`${I18N_KEY_PREFIX}.clearBtn`)}
        </button>
        <button className="searchall" type="submit" onClick={handlePageScroll}>
          {t(`${I18N_KEY_PREFIX}.submitBtn`)}
        </button>
      </div>
    </>
  );
};

export default FilterLayout;
