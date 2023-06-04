import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Formik, FormikHelpers, FormikConfig } from 'formik';

import FieldLayout from 'components/Dashboard/FieldLayout';

import { ItemTypes } from 'types/utils';
import { FieldItem } from 'types/utils';

interface EditTemplateProps {
  param?: string;
  initialValues: ItemTypes;
  setInitialValues: any;
  validationSchema: any;
  fieldList: FieldItem[];
  targetItem: ItemTypes;
  handleSubmit: (
    values: ItemTypes,
    formikHelpers: FormikHelpers<ItemTypes>
  ) => void;
  handleDeleteClick: () => void;
}

const EditTemplate = (props: EditTemplateProps) => {
  const {
    initialValues,
    setInitialValues,
    fieldList,
    targetItem,
    validationSchema,
    handleSubmit,
    handleDeleteClick,
  } = props;
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-1);
  };

  const formikConfig: FormikConfig<ItemTypes> = {
    initialValues,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validationSchema: validationSchema,
  };

  useEffect(() => {
    if (targetItem) {
      setInitialValues({ ...targetItem });
    }
  }, [targetItem]);

  return (
    <>
      <Formik {...formikConfig}>
        {() => (
          <Form>
            {fieldList.map((v) => {
              const { id } = v;
              return <FieldLayout key={id} data={v} />;
            })}
            <div className="d-flex justify-content-between">
              <div>
                <button type="submit" className="btn btn-primary me-2">
                  儲存
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelClick}
                >
                  取消
                </button>
              </div>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteClick}
              >
                刪除
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditTemplate;
