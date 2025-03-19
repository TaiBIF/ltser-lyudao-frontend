import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Field, useFormikContext } from 'formik';
import { useFilterContext } from 'context/SocialEconomyData/FilterContext';

interface FormValues {
  content: string;
  target: string;
  capTypes: string[];
  localTypes: string[];
}

const FilterLayout = ({
  isSubmitting,
  I18N_KEY_PREFIX,
  participantType,
  capIssueType,
  localIssueType,

  scrollTargetRef,
}: {
  isSubmitting: boolean;
  I18N_KEY_PREFIX: string;
  participantType: { id: number; title: string }[];
  capIssueType: { id: number; title: string; value: string }[];
  localIssueType: { id: number; title: string }[];
  scrollTargetRef?: any;
}) => {
  const { t } = useTranslation();

  const { values, setFieldValue } = useFormikContext<FormValues>();

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

  const {
    selectedParticipantType,
    selectedCapIssueTypeTitle,
    selectedLocalIssueTypeTitle,
    selectedKeyword,
    setFilters,
  } = useFilterContext();

  const clearAll = () => {
    // 移除所有篩選條件
    setFilters({
      selectedParticipantType: null,
      selectedCapIssueType: [],
      selectedCapIssueTypeTitle: [],
      selectedLocalIssueType: [],
      selectedLocalIssueTypeTitle: [],
      selectedKeyword: '',
      selectedContent: '',
    });
  };

  const syncFormikToFilters = () => {
    // 同步當前的手動選擇的篩選條件
    setFilters({
      selectedKeyword: values.content,
      selectedParticipantType: values.target || null,
      selectedCapIssueTypeTitle: values.capTypes || [],
      selectedLocalIssueTypeTitle: values.localTypes || [],
    });
  };

  useEffect(() => {
    // 點擊議題列表中的關鍵字後，呈現到搜尋內文的搜索框中
    setFieldValue('content', selectedKeyword);
  }, [selectedKeyword, setFieldValue]);

  useEffect(() => {
    // 點擊議題列表中的在地議題後，打勾搜索框中對應的選項
    setFieldValue('localTypes', selectedLocalIssueTypeTitle);
  }, [selectedLocalIssueTypeTitle, setFieldValue]);

  useEffect(() => {
    // 點擊議題列表中的 CAP 議題後，打勾搜索框中對應的選項
    setFieldValue('capTypes', selectedCapIssueTypeTitle);
  }, [selectedCapIssueTypeTitle, setFieldValue]);

  useEffect(() => {
    // 點擊議題列表中的受訪對象後，打勾搜索框中對應的選項
    if (selectedParticipantType) {
      setFieldValue('target', String(selectedParticipantType));
    }
  }, [selectedParticipantType, setFieldValue]);

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
        <button className="clearall" type="reset" onClick={clearAll}>
          {t(`${I18N_KEY_PREFIX}.clearBtn`)}
        </button>
        <button
          className="searchall"
          type="submit"
          onClick={() => {
            syncFormikToFilters();
            handlePageScroll();
          }}
        >
          {t(`${I18N_KEY_PREFIX}.submitBtn`)}
        </button>
      </div>
    </>
  );
};

export default FilterLayout;
