import React from 'react';

import { Field, ErrorMessage } from 'formik';
import { RawFieldItem } from 'types/field';

interface SearchFieldLayoutProps {
  data: RawFieldItem;
}

const SearchFieldLayout = (props: SearchFieldLayoutProps) => {
  const { data } = props;
  const { id, type } = data;
  switch (type) {
    case 'text':
    case 'number':
    case 'date':
      return (
        <li key={id}>
          <p>{id}</p>
          <Field type={type} id={id} name={id} />
          <ErrorMessage name={id} component="small" />
        </li>
      );
    default:
      return <></>;
  }
};

export default SearchFieldLayout;
