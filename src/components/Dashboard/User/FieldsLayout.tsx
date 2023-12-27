import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

import FieldLayout from '../FieldLayout';
import Spinner from 'components/Spinner';

import { userFieldList } from 'data/dashboard';
import { useAuthContext } from 'context/AuthContext';

const FieldsLayout = ({
  shouldRerender,
  setShouldRerender,
}: {
  shouldRerender: boolean;
  setShouldRerender: any;
}) => {
  const { info, loading, getMemberInfo } = useAuthContext();

  const isFetchingInfo = info === null;

  const { setValues } = useFormikContext();

  useEffect(() => {
    if (!isFetchingInfo) {
      setValues({
        email: info.email,
        role: info.role,
        last_name: info.last_name,
        first_name: info.first_name,
      });
    }
  }, [info]);

  return (
    <>
      <div>
        {userFieldList.map((v) => {
          const { id } = v;
          return <FieldLayout key={id} data={v} />;
        })}
      </div>
      <div className="c-btns">
        <button
          type="submit"
          className="c-btns__btn e-btn e-btn--primary e-btn--wmax"
        >
          {!loading ? '儲存' : <Spinner layout="dashboard" />}
        </button>
      </div>
    </>
  );
};

export default FieldsLayout;
