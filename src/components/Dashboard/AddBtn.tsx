import React from 'react';
import { Link } from 'react-router-dom';

type AddBtnProps = {
  page: string;
};

const AddBtn = (props: AddBtnProps) => {
  const { page } = props;
  return (
    <>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary" to={`/dashboard/${page}/add`}>
          新增
        </Link>
      </div>
    </>
  );
};

export default AddBtn;
