import React, { useEffect } from 'react';

import { Form, Formik, FormikHelpers, FormikConfig } from 'formik';
import qs from 'qs';

import SearchFieldLayout from 'components/SiteData/SearchFieldLayout';

import { ContextItem, ItemTypes } from 'types/utils';
import { RawFieldItem } from 'types/field';

import { searchValidationSchema } from 'data/validationSchema';

import { useDataContext } from 'context/DataContext';
import { RawItemTypes } from 'types/rawData';
import { useSiteDataContext } from 'context/SiteDataContext';
import { useLocation } from 'react-router-dom';
import usePage from 'hooks/utils/usePage';

const Search = ({ item }: { item: string }) => {
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const initialValues = Object.fromEntries(
    contextData.fields.map((v: RawFieldItem) => [v.id, ''])
  );
  const searchFieldList = contextData.fields;
  const { query, setQuery } = useSiteDataContext();
  const { pathname } = useLocation();
  const { currentPage } = usePage();

  const handleSubmit = (
    values: RawItemTypes,
    { setSubmitting }: FormikHelpers<RawItemTypes>
  ) => {
    setQuery({ ...values });
    contextData.getRaws({ params: { ...values, page: currentPage } });
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<RawItemTypes> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: searchValidationSchema,
  };

  useEffect(() => {
    setQuery({});
  }, [pathname]);

  return (
    <>
      <div className="center-title">資料列表搜尋</div>
      <div className="input-box">
        <Formik {...formikConfig}>
          <Form>
            <ul className="set-li">
              {searchFieldList.map((v: RawFieldItem) => {
                return <SearchFieldLayout key={v.id} data={v} />;
              })}
            </ul>
            <div className="send-btnarea">
              <button type="reset" className="clearall">
                清除
              </button>
              <button type="submit" className="searchall">
                搜尋
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Search;
