import React, { useEffect, useState } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { FieldItem, ItemTypes } from 'types/utils';
import { AboutItem } from 'types/about';

import { aboutAttachmentAddFieldList } from 'data/dashboard';
import { aboutAttachmentAddValidationSchema } from 'data/validationSchema';
import {
  ABOUT_API_URL,
  ABOUT_ATTACHMENT_API_URL,
  ABOUT_ATTACHMENT_PATH,
} from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Add = () => {
  const initialValues: AboutItem = {
    type: 0,
    aboutId: 0,
    name: '',
    content: '',
    file: '',
    image: '',
  };

  const [aboutList, setAboutList] = useState<AboutItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const { getList, handleAdd } = useDashboard();

  const isFetchingAboutList = aboutList.length === 0;

  useEffect(() => {
    getList({
      url: ABOUT_API_URL,
      setList: setAboutList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingAboutList) {
      const aboutFieldList = aboutAttachmentAddFieldList.map((v) => {
        if (v.title === 'aboutId') {
          return {
            ...v,
            options: aboutList,
          };
        }
        return v;
      });
      setFieldList([...aboutFieldList]);
    }
  }, [aboutList]);

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: ABOUT_ATTACHMENT_API_URL,
      redirectPath: ABOUT_ATTACHMENT_PATH,
      placeholder: true,
    });
    setSubmitting(false);
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={fieldList}
        validationSchema={aboutAttachmentAddValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
