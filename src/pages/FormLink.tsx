import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/FormLink/Item';
import Pagination from 'components/Pagination/Content';

import { FormLinkItem } from 'types/formLink';

import { formLinkList } from 'data/formLink';
import { FORM_LINK_API_URL } from 'data/api';

import useRender from 'hooks/page/useRender';
import usePage from 'hooks/utils/usePage';

const FormLink = () => {
  const PAGE_NAME = 'FormLink';
  const I18N_KEY_PREFIX = `${PAGE_NAME}`;

  const { t } = useTranslation();

  const [formLinks, setFormLinks] = useState<FormLinkItem[]>([]);
  const { getList } = useRender();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const isFetchingList = formLinks.length === 0;

  useEffect(() => {
    getList({
      url: FORM_LINK_API_URL,
      setList: setFormLinks,
      defaultList: formLinkList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <div className="innbox">
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <div className="line-titlarea">
              <div className="peo-title">
                <div className="line1" />
                {t(`${I18N_KEY_PREFIX}.title`)}
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
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginationData={paginationData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLink;
