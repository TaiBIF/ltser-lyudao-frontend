import { useNavigate } from 'react-router-dom';

import { Form, Formik, FormikHelpers, FormikConfig } from 'formik';

import FieldLayout from 'components/Dashboard/FieldLayout';

import { ItemTypes } from 'types/utils';
import { FieldItem } from 'types/utils';

interface AddTemplateProps {
  initialValues: ItemTypes;
  fieldList: FieldItem[];
  validationSchema: any;
}

const Add = (props: AddTemplateProps) => {
  const { initialValues, fieldList, validationSchema } = props;
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-1);
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
    validationSchema: validationSchema,
  };

  return (
    <>
      <Formik {...formikConfig}>
        <Form>
          {fieldList.map((v) => {
            const { id } = v;
            return <FieldLayout key={id} data={v}></FieldLayout>;
          })}
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
        </Form>
      </Formik>
    </>
  );
};

export default Add;
