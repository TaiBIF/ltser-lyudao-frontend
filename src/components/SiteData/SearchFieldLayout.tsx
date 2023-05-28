import React from 'react';

import { Field, ErrorMessage } from 'formik';
import { FieldItem, ItemTypes } from 'types/utils';

interface SearchFieldLayoutProps {
  data: FieldItem;
}

const SearchFieldLayout = (props: SearchFieldLayoutProps) => {
  const { data } = props;
  const { id, type, title, label } = data;
  switch (type) {
    case 'text':
    case 'number':
      return (
        <li key={id}>
          <p>{label}</p>
          <Field type={type} id={title} name={title} />
          <ErrorMessage name={title} component="small" />
        </li>
      );
    default:
      return <></>;
  }
};

export default SearchFieldLayout;
