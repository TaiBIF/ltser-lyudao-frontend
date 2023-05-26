import React from 'react';

import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/FormLink/Item';

import { formLinkList } from 'data/formLink';
import Pagination from 'components/Pagination';

const FormLink = () => {
  return (
    <>
      <div className="innbox">
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <div className="line-titlarea">
              <div className="peo-title">
                <div className="line1" />
                常用表單與連結
                <div className="line2" />
              </div>
            </div>
            <ul className="link-list">
              {formLinkList.map((v) => {
                const { id } = v;
                return <Item key={id} data={v} />;
              })}
            </ul>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLink;
