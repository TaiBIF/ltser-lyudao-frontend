import React, { useState, useEffect } from 'react';

import Breadcrumb from 'components/Breadcrumb';
import MainItem from 'components/Contact/MainItem';
import SubItem from 'components/Contact/SubItem';
import Banner from 'components/Banner';

import { contactTypeList } from 'data/contact';

import { BannerData } from 'types/common';
import { ContactItem } from 'types/contact';

import bannerImg from 'image/contact_bn.png';

import useDashboard from 'hooks/useDashboard';

import { CONTACT_API_URL } from 'data/api';

const Contact = () => {
  const { getList } = useDashboard();
  const [contactList, setContactList] = useState<ContactItem[]>([]);

  const bannerData: BannerData = {
    title: '聯絡我們',
    en: ['CONTACT'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const isFetchingList = contactList.length === 0;

  useEffect(() => {
    getList({
      url: CONTACT_API_URL,
      setList: setContactList,
    });
  }, []);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            {!isFetchingList &&
              contactList
                .filter((v) => v.type === 'leader')
                .map((v) => <MainItem data={v} />)}
            <div className="line-titlarea">
              <div className="peo-title">
                <div className="line1" />
                {contactTypeList.find((v) => v.id === 2)?.title}
                <div className="line2" />
              </div>
            </div>
            <ul className="team-list">
              {!isFetchingList &&
                contactList
                  .filter((v) => v.type === 'executor')
                  .map((v) => <SubItem data={v} contact={false} />)}
            </ul>
            <div className="line-titlarea">
              <div className="peo-title">
                <div className="line1" />
                聯絡方式
                <div className="line2" />
              </div>
            </div>
            <ul className="team-list">
              {!isFetchingList &&
                contactList
                  .filter((v) => v.type === 'others')
                  .map((v) => <SubItem data={v} contact={true} />)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
