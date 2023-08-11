import { useNavigate } from 'react-router-dom';

import { Form, Formik, FormikHelpers, FormikConfig } from 'formik';

import FieldLayout from 'components/Dashboard/FieldLayout';

import { ItemTypes } from 'types/utils';
import { FieldItem } from 'types/utils';
import Spinner from 'components/Spinner';

interface AddTemplateProps {
  initialValues: ItemTypes;
  fieldList: FieldItem[];
  validationSchema: any;
  handleSubmit: (
    values: ItemTypes,
    formikHelpers: FormikHelpers<ItemTypes>
  ) => void;
  loading: boolean;
}

const Add = (props: AddTemplateProps) => {
  const { initialValues, fieldList, validationSchema, handleSubmit, loading } =
    props;
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-1);
  };

  const formikConfig: FormikConfig<ItemTypes> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  };

  return (
    <>
      <Formik {...formikConfig}>
        <Form className="d-flex flex-column justify-content-between h-100">
          <div>
            {fieldList.map((v) => {
              const { id } = v;
              return <FieldLayout key={id} data={v}></FieldLayout>;
            })}
          </div>
          <div className="c-btns">
            <button
              type="submit"
              className="c-btns__btn e-btn e-btn--primary e-btn--wmax"
            >
              {!loading ? '儲存' : <Spinner layout="dashboard" />}
            </button>
            <button
              type="button"
              className="c-btns__btn e-btn e-btn--muted e-btn--wmax"
              onClick={handleCancelClick}
            >
              取消
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Add;
