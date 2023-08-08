import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { FieldItem, ItemTypes } from 'types/utils';
import { AboutItem } from 'types/about';

import { aboutAttachmentEditFieldList } from 'data/dashboard';
import { aboutAttachmentEditValidationSchema } from 'data/validationSchema';
import {
  ABOUT_API_URL,
  ABOUT_ATTACHMENT_API_URL,
  ABOUT_ATTACHMENT_PATH,
} from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<AboutItem>({
    id: 0,
    type: 0,
    aboutId: 0,
    name: '',
    content: '',
    image: '',
    file: '',
  });
  const { aboutAttachmentId } = useParams();
  const { getList, getDetail, handleEdit, handleDelete } = useDashboard();

  const [aboutList, setAboutList] = useState<AboutItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const ID = aboutAttachmentId ?? '';
  const URL = ABOUT_ATTACHMENT_API_URL;
  const REDIRECT_PATH = ABOUT_ATTACHMENT_PATH;
  const isFetchingAboutList = aboutList.length === 0;

  const handleEditSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleEdit({
      values,
      id: ID,
      url: URL,
      redirectPath: REDIRECT_PATH,
    });
    setSubmitting(false);
  };

  const handleDeleteClick = () => {
    handleDelete({
      id: ID,
      url: URL,
      redirectPath: REDIRECT_PATH,
    });
  };

  useEffect(() => {
    if (!isFetchingAboutList) {
      const aboutFieldList = aboutAttachmentEditFieldList.map((v) => {
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

  useEffect(() => {
    getDetail({
      id: ID,
      url: URL,
      setData: setInitialValues,
      redirectPath: REDIRECT_PATH,
    });
    getList({
      url: ABOUT_API_URL,
      setList: setAboutList,
    });
  }, []);

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        validationSchema={aboutAttachmentEditValidationSchema}
        fieldList={fieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
