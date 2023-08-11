import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { FieldItem, ItemTypes } from 'types/utils';
import { AboutItem, HeaderAboutSubItem } from 'types/about';

import { aboutAttachmentEditFieldList } from 'data/dashboard';
import { aboutAttachmentEditValidationSchema } from 'data/validationSchema';
import { ABOUT_ATTACHMENT_API_URL, ABOUT_ATTACHMENT_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import { useHeaderContext } from 'context/HeaderContext';

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
  const { loading, getDetail, handleEdit, handleDelete } = useDashboard();

  const [aboutList, setAboutList] = useState<HeaderAboutSubItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);
  const { about } = useHeaderContext();

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
    const abouts: HeaderAboutSubItem[] = Object.entries(about).flatMap(
      ([key, value]) => value as HeaderAboutSubItem
    );
    setAboutList([...abouts]);
  }, []);

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        validationSchema={aboutAttachmentEditValidationSchema}
        fieldList={fieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
        loading={loading}
      />
    </>
  );
};

export default Edit;
