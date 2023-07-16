import React, { useState, useEffect } from 'react';

import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/FormLink/Item';
import Pagination from 'components/Pagination';

import { formLinkList } from 'data/formLink';
import { FORM_LINK_API_URL } from 'data/api';

import useRender from 'hooks/page/useRender';
import usePage from 'hooks/utils/usePage';

const FormLink = () => {
  const [formLinks, setFormLinks] = useState([]);
  const { getList } = useRender();
  const { pathname, page, pageData, setPageData } = usePage();

  const isFetchingList = formLinks.length === 0;

  useEffect(() => {
    getList({
      url: FORM_LINK_API_URL,
      setList: setFormLinks,
      defaultList: formLinkList,
      params: { page },
      setPageData,
    });
  }, [pathname, page]);

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
              {!isFetchingList &&
                formLinks.map((v) => {
                  const { id } = v;
                  return <Item key={id} data={v} />;
                })}
            </ul>
            <Pagination page={page} pageData={pageData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLink;
