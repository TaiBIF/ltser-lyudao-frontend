import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from './AddIcon';

type AddBtnProps = {
  page: string;
};

const AddBtn = (props: AddBtnProps) => {
  const { page } = props;
  return (
    <>
      <div className="d-flex mb-3">
        <Link
          className="e-btn e-btn--primary e-btn--wmax"
          to={`/dashboard/${page}/add`}
        >
          <AddIcon />
          新增
        </Link>
      </div>
    </>
  );
};

export default AddBtn;
