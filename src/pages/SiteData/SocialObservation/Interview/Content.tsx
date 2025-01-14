import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import {
  interviewTypeList,
  interviewTargetList,
} from 'data/siteData';
import { InterviewItem } from 'types/siteData';
import FilterLayout from 'components/SiteData/Interview/FilterLayout';
import Pagination from 'components/Pagination/Content';
import usePage from 'hooks/utils/usePage';

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
    currentPage,
    setCurrentPage,
    paginationData,
    setPaginationData,
  } = usePage();
  const location = useLocation();
  const { pathname } = location;
  const paths = pathname.split('/');
  const mainBoxRef = useRef<HTMLDivElement>(null);

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
  const [participantType, setParticipantType] = useState<ParticipantType[]>([])
  const [selectedParticipantType, setSelectedParticipantType] = useState<string | null>(null);
  const [capIssueType, setCapIssueType] = useState<IssueType[]>([])
  const [localIssueType, setLocalIssueType] = useState<IssueType[]>([])
  const [selectedCapIssueType, setSelectedCapIssueType] = useState<[] | null>([]);
  const [selectedLocalIssueType, setSelectedLocalIssueType] = useState<[] | null>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string>('');
  const [selectedContent, setSelectedContent] = useState<string>('');
  const { getSocialObservationContent } = useRender();

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    const selectedParticipant = participantType.find(
      (type) => Number(values.target) === type.id
    );
    const selectedCapIssue = values.capTypes.map((type: string) => capIssueType.find((issue) => Number(type) === issue.id)?.value)
    const selectedLocalIssue = values.localTypes.map((type: string) => localIssueType.find((issue) => Number(type) === issue.id)?.title)
  
    setSelectedParticipantType(selectedParticipant?.title || null);
    setSelectedCapIssueType(selectedCapIssue || null);
    setSelectedLocalIssueType(selectedLocalIssue || null);
    // setSelectedKeyword(values.keyword);
    setSelectedContent(values.content);
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
  };

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

    // const keywordParam = selectedKeyword
    // ? `&keyword=${selectedKeyword}`
    // : '';

    const contentParam = selectedContent
    ? `&content=${selectedContent}`
    : '';
  
    getSocialObservationContent({
      url: `social_observation/social_interview?page=${currentPage}${participantTypeParam}${capIssueTypeParam}${localIssueTypeParam}${contentParam}`,
      setList: (responseData: { [key: string]: any }) => {
        setInterviews(responseData.data);
        setParticipantType(responseData.participant_types_result);
        setCapIssueType(responseData.cap_issues_result);
        setLocalIssueType(responseData.local_issues_result);
        setPaginationData(responseData.pagination);
      },
    });
  }, [currentPage, selectedParticipantType, selectedCapIssueType, selectedLocalIssueType, selectedKeyword, selectedContent]);

  useEffect(() => {
    if (mainBoxRef.current) {
      mainBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname]);

  // const handleKeywordClick = (keyword:string) => {
  //   setSelectedKeyword(keyword);
  // };

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb ref={mainBoxRef}/>
        <div className="contentbox gray-bg">
          <div className="main-box">
            <Title
            paths={paths}
            url='https://data.depositar.io/zh_Hant_TW/dataset/ltser-lyudao-issue'
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
                      selectedKeyword={selectedKeyword}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <ul className="soci-list">
              {interviews.map((v) => {
                const { id, time, dataID, tag, CAP_issue, local_issue, participant_type } = v;
                return (
                  <li key={id} style={{ width: '100%' }}>
                    <div className="datebox">
                      {time}
                      <div className="line" />
                    </div>
                    <div className="mb-1">
                      <small className="d-block text-muted">
                        受訪對象: {participant_type}
                      </small>
                      <small className="d-block text-muted">
                        CAP議題: {CAP_issue}
                      </small>
                      <small className="d-block text-muted">
                        在地議題: {local_issue}
                      </small>
                    </div>
                    <Link
                      to={`/site-data/social-observation/social-interview-data/${id}`}
                      className="titlebox"
                    >
                      {dataID}
                    </Link>
                    <div className="tag-box">
                      {tag.map((t, i) => {
                        return (
                          <a key={i} className="tagitem" 
                            // onClick={() => handleKeywordClick(t)}
                          >
                            #{t}
                          </a>
                        );
                      })}
                    </div>
                  </li>
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
