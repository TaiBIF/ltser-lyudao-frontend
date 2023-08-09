import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { Form, Formik, FormikHelpers, FormikConfig } from 'formik';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import SearchFieldLayout from 'components/SiteData/SearchFieldLayout';
import Placeholder from 'components/Placeholder';

import { ContextItem, PaginationDataItem } from 'types/utils';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { searchValidationSchema } from 'data/validationSchema';

import { useDataContext } from 'context/DataContext';
import { useSiteDataContext } from 'context/SiteDataContext';
import usePage from 'hooks/utils/usePage';

interface SearchProps {
  item: string;
  isDoneFetching: boolean;
  setPaginationData: Dispatch<SetStateAction<PaginationDataItem>>;
}

const Search = (props: SearchProps) => {
  const { item, isDoneFetching, setPaginationData } = props;
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
    const filterValue = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== '')
    );
    setQuery({ ...filterValue });
    contextData.getRaws({
      params: { ...filterValue, page: currentPage },
      setPaginationData,
    });
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
        {isDoneFetching ? (
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
        ) : (
          <>
            <Placeholder layout="line" />
            <Placeholder layout="line" />
            <Placeholder layout="line" />
          </>
        )}
      </div>
    </>
  );
};

export default Search;
