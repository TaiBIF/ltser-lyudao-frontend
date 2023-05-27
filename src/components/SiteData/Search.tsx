import React from 'react';

import { Form, Formik, FormikHelpers, FormikConfig } from 'formik';

import SearchFieldLayout from 'components/SiteData/SearchFieldLayout';

import { searchFieldList } from 'data/siteData';
import { EcoSearchItem } from 'types/siteData';
import { searchValidationSchema } from 'data/validationSchema';

import { ItemTypes } from 'types/utils';

const Search = () => {
  const initialValues: EcoSearchItem = {
    site: '',
    researcher: '',
    scientificName: '',
    cnName: '',
    number: 0,
  };

  const handleSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  const formikConfig: FormikConfig<ItemTypes> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: searchValidationSchema,
  };
  return (
    <>
      <div className="center-title">資料列表搜尋</div>
      <div className="input-box">
        <Formik {...formikConfig}>
          <Form>
            <ul className="set-li">
              {searchFieldList.map((v) => {
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
