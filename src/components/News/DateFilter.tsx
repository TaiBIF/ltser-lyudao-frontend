import React, { useState } from 'react';
import { Formik, Form, Field, FormikConfig, ErrorMessage } from 'formik';

import DateIcon from 'components/News/DateIcon';

import { DateFilterItem } from 'types/news';

const DateFilter = () => {
  const initialValues = {
    startDate: null,
    endDate: null,
  };

  const handleSubmit = () => {};

  const formikConfig: FormikConfig<DateFilterItem> = {
    initialValues,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  };
  return (
    <>
      <Formik {...formikConfig}>
        {() => (
          <Form>
            <div className="tool-select c-form">
              <p>篩選</p>
              <div className="date-box">
                <div className="inp-item c-form__set">
                  <Field
                    type="date"
                    name="startDate"
                    className="c-form__date"
                  />
                  <div className="c-form__icon">
                    <DateIcon />
                  </div>
                </div>
                <span>~</span>
                <div className="inp-item c-form__set">
                  <Field type="date" name="endDate" className="c-form__date" />
                  <div className="c-form__icon">
                    <DateIcon />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DateFilter;
