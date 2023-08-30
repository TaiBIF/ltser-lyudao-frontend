import React, { useEffect, useState } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { FieldItem, ItemTypes } from 'types/utils';
import { AboutItem, HeaderAboutSubItem } from 'types/about';

import { aboutAttachmentAddFieldList } from 'data/dashboard';
import { aboutAttachmentAddValidationSchema } from 'data/validationSchema';
import { ABOUT_ATTACHMENT_API_URL, ABOUT_ATTACHMENT_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import { useHeaderContext } from 'context/HeaderContext';

const Add = () => {
  const initialValues: AboutItem = {
    type: 0,
    aboutId: 0,
    name: '',
    content: '',
    file: '',
    image: '',
  };

  const [aboutList, setAboutList] = useState<HeaderAboutSubItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const { loading, handleAdd } = useDashboard();
  const { about } = useHeaderContext();

  const isFetchingAboutList = aboutList.length === 0;

  useEffect(() => {
    const abouts: HeaderAboutSubItem[] = Object.entries(about).flatMap(
      ([key, value]) => value as HeaderAboutSubItem
    );
    setAboutList([...abouts]);
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
    console.log(values);

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
        loading={loading}
      />
    </>
  );
};

export default Add;
