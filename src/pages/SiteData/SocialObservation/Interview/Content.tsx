import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

import bannerImg from 'image/social_bn.png';

import { BannerData } from 'types/common';

import {
  interviewList,
  interviewTypeList,
  interviewTargetList,
} from 'data/siteData';
import { InterviewItem } from 'types/siteData';
import FilterLayout from 'components/SiteData/Interview/FilterLayout';

const Content = () => {
  const bannerData: BannerData = {
    title: '社會觀測',
    en: ['social', 'observation'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const initialValues = {
    keyword: '',
    types: [],
    target: '',
  };

  const [interviews, setInterviews] = useState<InterviewItem[]>([]);

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    const matchFilter = interviewList.filter((v) => {
      const matchKeyword = v.title.includes(values.keyword);
      const matchTarget =
        values.target === '' || String(v.target) === values.target;
      const matchTypes =
        values.types.length === 0 || values.types.includes(String(v.type));
      return matchKeyword && matchTarget && matchTypes;
    });
    setInterviews(matchFilter);
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
  };

  useEffect(() => {
    setInterviews([...interviewList]);
  }, []);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <div className="chose-itembox">
              <Formik {...formikConfig}>
                {({ isSubmitting }) => (
                  <Form>
                    <FilterLayout isSubmitting={isSubmitting} />
                  </Form>
                )}
              </Formik>
            </div>
            <ul className="soci-list">
              {interviews.map((v) => {
                const { id, year, target, type, title, tags } = v;
                const matchType = interviewTypeList.find(
                  (v) => v.id === type
                )?.title;
                const matchTarget = interviewTargetList.find(
                  (v) => v.id === target
                )?.title;
                return (
                  <li key={id} style={{ width: '100%' }}>
                    <div className="datebox">
                      {year}
                      <div className="line" />
                    </div>
                    <div className="mb-1">
                      <small className="d-block text-muted">
                        受訪對象: {matchTarget}
                      </small>
                      <small className="d-block text-muted">
                        議題分類: {matchType}
                      </small>
                    </div>
                    <Link
                      to={`/site-data/social-observation/social-interview-data/${id}`}
                      className="titlebox"
                    >
                      {title}
                    </Link>
                    <div className="tag-box">
                      {tags.map((tag, i) => {
                        return (
                          <a key={i} role="button" className="tagitem">
                            #{tag}
                          </a>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
