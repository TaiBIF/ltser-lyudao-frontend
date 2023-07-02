import React, { useState, useEffect } from 'react';

import Breadcrumb from 'components/Breadcrumb';
import MainItem from 'components/Contact/MainItem';
import SubItem from 'components/Contact/SubItem';
import Banner from 'components/Banner';

import { contactList, contactTypeList } from 'data/contact';

import { BannerData } from 'types/common';
import { ContactItem } from 'types/contact';

import bannerImg from 'image/contact_bn.png';

import useRender from 'hooks/page/useRender';

import { CONTACT_API_URL } from 'data/api';

const Contact = () => {
  const { getList } = useRender();
  const [contacts, setContacts] = useState<ContactItem[]>([]);

  const bannerData: BannerData = {
    title: '聯絡我們',
    en: ['CONTACT'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const SECTION_1_ID = 'leader';
  const SECTION_2_ID = 'executor';
  const SECTION_3_ID = 'other';

  const isFetchingList = contacts.length === 0;

  const isNoType = (id: number | string) => {
    if (!isFetchingList) {
      if (contacts.filter((v) => v.type === id).length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    getList({
      url: CONTACT_API_URL,
      setList: setContacts,
      defaultList: contactList,
    });
  }, []);

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox gray-bg">
          {!isFetchingList && (
            <div className="main-box">
              {contacts
                .filter((v) => v.type === SECTION_1_ID)
                .map((v, i) => (
                  <MainItem key={i} data={v} />
                ))}
              {!isNoType(SECTION_2_ID) && (
                <>
                  <div className="line-titlarea">
                    <div className="peo-title">
                      <div className="line1" />
                      {
                        contactTypeList.find((v) => v.id === SECTION_2_ID)
                          ?.title
                      }
                      <div className="line2" />
                    </div>
                  </div>
                  <ul className="team-list">
                    {contacts
                      .filter((v) => v.type === SECTION_2_ID)
                      .map((v, i) => (
                        <SubItem key={i} data={v} contact={false} />
                      ))}
                  </ul>
                </>
              )}
              {!isNoType(SECTION_3_ID) && (
                <>
                  <div className="line-titlarea">
                    <div className="peo-title">
                      <div className="line1" />
                      聯絡方式
                      <div className="line2" />
                    </div>
                  </div>
                  <ul className="team-list">
                    {contacts
                      .filter((v) => v.type === SECTION_3_ID)
                      .map((v, i) => (
                        <SubItem key={i} data={v} contact={true} />
                      ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
