import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled } from '@mui/system';

import {
  Field,
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  useFormikContext,
} from 'formik';
import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';
import Title from 'components/SiteData/Title';
import bannerImg from 'image/social_bn.png';
import { BannerData } from 'types/common';
import useRender from 'hooks/page/useRender';
import { InterviewItem } from 'types/siteData';
import FilterLayout from 'components/SiteData/Interview/FilterLayout';
import Pagination from 'components/Pagination/Content';
import usePage from 'hooks/utils/usePage';
import { useFilterContext } from 'context/SocialEconomyData/FilterContext';

interface ParticipantType {
  id: number;
  title: string;
}

interface IssueType {
  id: number;
  title: string;
  value: string;
}

const Content = () => {
  const {
    selectedParticipantType,
    selectedCapIssueType,
    selectedLocalIssueType,
    selectedKeyword,
    selectedContent,
    setFilters,
  } = useFilterContext();
  const { getSocialObservationContent } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  const location = useLocation();
  const { pathname } = location;
  const paths = pathname.split('/');
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const sociListRef = useRef(null);

  const PAGE_NAME = 'SiteData';
  const COMPONENT_NAME = 'Economy';
  const PREFIX = 'Interview';

  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}.${PREFIX}`;

  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const initialValues = {
    keyword: '',
    content: '',
    types: [],
    target: '',
    capTypes: [],
    localTypes: [],
  };

  const [interviews, setInterviews] = useState<InterviewItem[]>([]);
  const [participantType, setParticipantType] = useState<ParticipantType[]>([]);
  const [capIssueType, setCapIssueType] = useState<IssueType[]>([]);
  const [localIssueType, setLocalIssueType] = useState<IssueType[]>([]);

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    const selectedParticipant = participantType.find(
      (type) => values.target === type.title
    );
    const selectedCapIssue = values.capTypes.map(
      (type: string) =>
        capIssueType.find((issue) => type === issue.title)?.value
    );
    const selectedLocalIssue = values.localTypes.map(
      (type: string) =>
        localIssueType.find((issue) => type === issue.title)?.title
    );

    setFilters({
      selectedParticipantType: selectedParticipant?.title || null,
      selectedCapIssueType: selectedCapIssue,
      selectedLocalIssueType: selectedLocalIssue,
      selectedKeyword: values.keyword,
      selectedContent: values.content,
    });
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
  };

  const CustomTooltip = styled(
    ({ className, ...props }: TooltipProps & { className?: string }) => (
      <Tooltip {...props} arrow classes={{ popper: className }} />
    )
  )(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: 'rgba(32, 61, 51, 0.8)',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(32, 61, 51, 0.8)',
      color: '#fff',
      fontSize: '14px',
      padding: '5px 10px',
      borderRadius: '5px',
    },
  }));

  useEffect(() => {
    const participantTypeParam = selectedParticipantType
      ? `&participantType=${selectedParticipantType}`
      : '';

    const capIssueTypeParam = selectedCapIssueType
      ? `&capIssueType=${selectedCapIssueType}`
      : '';

    const localIssueTypeParam = selectedCapIssueType
      ? `&localIssueType=${selectedLocalIssueType}`
      : '';

    const keywordParam = selectedKeyword ? `&keyword=${selectedKeyword}` : '';

    const contentParam = selectedContent ? `&content=${selectedContent}` : '';

    getSocialObservationContent({
      url: `social_observation/social_interview?page=${currentPage}${participantTypeParam}${capIssueTypeParam}${localIssueTypeParam}${contentParam}${keywordParam}`,
      setList: (responseData: { [key: string]: any }) => {
        setInterviews(responseData.data);
        setParticipantType(responseData.participant_types_result);
        setCapIssueType(responseData.cap_issues_result);
        setLocalIssueType(responseData.local_issues_result);
        setPaginationData(responseData.pagination);
      },
    });
  }, [
    currentPage,
    selectedParticipantType,
    selectedCapIssueType,
    selectedLocalIssueType,
    selectedKeyword,
    selectedContent,
  ]);

  useEffect(() => {
    if (mainBoxRef.current) {
      mainBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname]);

  const handleKeywordClick = (keyword: string) => {
    setFilters({
      selectedKeyword: keyword,
    });
  };

  const handleLocalIssueBtnClick = (issue: string) => {
    setFilters({
      selectedLocalIssueType: [issue],
      selectedLocalIssueTypeTitle: [issue],
    });
  };

  const handleCapIssueBtnClick = (issue: string, title: string) => {
    setFilters({
      selectedCapIssueType: [issue],
      selectedCapIssueTypeTitle: [title],
    });
  };

  const handleParticipantBtnClick = (participant: string) => {
    setFilters({
      selectedParticipantType: participant,
    });
  };

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb ref={mainBoxRef} />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <Title
              paths={paths}
              url="https://data.depositar.io/zh_Hant_TW/dataset/ltser-lyudao-issue"
              PAGE_NAME={PAGE_NAME}
            />
            <div className="chose-itembox">
              <Formik {...formikConfig}>
                {({ isSubmitting }) => (
                  <Form>
                    <FilterLayout
                      isSubmitting={isSubmitting}
                      I18N_KEY_PREFIX={I18N_KEY_PREFIX}
                      participantType={participantType}
                      capIssueType={capIssueType}
                      localIssueType={localIssueType}
                      scrollTargetRef={sociListRef}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <ul className="soci-list" ref={sociListRef}>
              {interviews.map((v) => {
                const {
                  id,
                  time,
                  dataID,
                  tag,
                  cap_issue_detail,
                  local_issue,
                  participant_type,
                  short_text,
                } = v;
                const renderedParticipantType = (
                  <span
                    className="issue-label"
                    onClick={() => handleParticipantBtnClick(participant_type)}
                  >
                    {participant_type}
                  </span>
                );
                const renderedLocalIssue = local_issue
                  .split(';')
                  .map((issue, index, array) => (
                    <span className="issue-btn" key={index}>
                      <span
                        className="issue-label"
                        onClick={() => handleLocalIssueBtnClick(issue)}
                      >
                        {issue}
                      </span>
                      {index < array.length - 1 && '｜'}
                    </span>
                  ));
                const renderedCapIssue = cap_issue_detail.map(
                  (issue, index, array) => (
                    <span className="issue-btn" key={index}>
                      <span
                        className="issue-label"
                        onClick={() =>
                          handleCapIssueBtnClick(
                            issue.raw_issue,
                            issue.mapped_issue
                          )
                        }
                      >
                        {issue.mapped_issue}
                      </span>
                      {index < array.length - 1 && '｜'}
                    </span>
                  )
                );
                return (
                  <CustomTooltip key={id} title={short_text} followCursor>
                    <li key={id} style={{ width: '100%' }}>
                      <Link
                        to={`/site-data/social-observation/social-interview-data/${id}`}
                        className="titlebox"
                      >
                        {dataID}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                          />
                        </svg>
                      </Link>
                      <div className="datebox">
                        {time}
                        <div className="line" />
                      </div>
                      <div className="mb-1">
                        <small className="d-block text-muted interview-sub-title">
                          受訪對象：{renderedParticipantType}
                        </small>
                        <small className="d-block text-muted interview-sub-title">
                          CAP議題：{renderedCapIssue}
                        </small>
                        <small className="d-block text-muted interview-sub-title">
                          在地議題：{renderedLocalIssue}
                        </small>
                      </div>
                      <div className="tag-box">
                        {tag.map((t, i) => {
                          return (
                            <a
                              key={i}
                              className="tagitem"
                              onClick={() => handleKeywordClick(t)}
                            >
                              #{t}
                            </a>
                          );
                        })}
                      </div>
                    </li>
                  </CustomTooltip>
                );
              })}
            </ul>
            <Pagination
              scrollTargetRef={mainBoxRef}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginationData={paginationData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
