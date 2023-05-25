import AddTemplate from 'components/Dashboard/Template/Add';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';
import { LiteratureItem } from 'types/literature';

const Add = () => {
  const initialValues: LiteratureItem = {
    name: '',
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={literatureFieldList}
        validationSchema={literatureValidationSchema}
      />
    </>
  );
};

export default Add;
