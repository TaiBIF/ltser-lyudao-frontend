import React from 'react';

import Breadcrumb from 'components/Breadcrumb';
import MainItem from 'components/Contact/MainItem';
import SubItem from 'components/Contact/SubItem';
import Banner from 'components/Banner';

import { contactList, contactTypeList } from 'data/contact';

import { BannerData } from 'types/common';

import contactBannerImg from 'image/contact_bn.png';

const Contact = () => {
  const bannerData: BannerData = {
    title: '聯絡我們',
    en: ['CONTACT'],
    maskImg: true,
    bgImg: contactBannerImg,
  };
  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            {contactList
              .filter((v) => v.type === 1)
              .map((v) => (
                <MainItem data={v} />
              ))}
            <div className="line-titlarea">
              <div className="peo-title">
                <div className="line1" />
                {contactTypeList.find((v) => v.id === 2)?.title}
                <div className="line2" />
              </div>
            </div>
            <ul className="team-list">
              {contactList
                .filter((v) => v.type === 2)
                .map((v) => (
                  <SubItem data={v} contact={false} />
                ))}
            </ul>
            <div className="line-titlarea">
              <div className="peo-title">
                <div className="line1" />
                聯絡方式
                <div className="line2" />
              </div>
            </div>
            <ul className="team-list">
              {contactList
                .filter((v) => v.type === 3)
                .map((v) => (
                  <SubItem data={v} contact={true} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
