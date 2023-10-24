import React from 'react';

import { useTranslation } from 'react-i18next';

import MainDeco from 'components/Contact/Deco';

import peoIconImg from 'image/peoicon1.svg';

import { ContactItem } from 'types/contact';
import { generateContactTypeList } from 'data/contact';
import { BE_URL } from 'utils/config';

type MainItemProps = {
  data: ContactItem;
};

const MainItem = (props: MainItemProps) => {
  const { data } = props;
  const { type, name, unit, content, image } = data;

  const contactTypeList = generateContactTypeList();

  return (
    <>
      <div className="main-peobox">
        <div className="centw">
          <div className="cirline">
            <MainDeco />
          </div>
          <div className="picbox">
            <div className="peoimg">
              <img
                src={
                  typeof image === 'string' ? `${BE_URL}${image}` : undefined
                }
                alt={name}
              />
            </div>
            <div className="iconbox">
              <img src={peoIconImg} alt="" />
            </div>
          </div>
          <div className="txt-area">
            <div className="pj-title">
              <div className="linemb" />
              {contactTypeList.find((v) => v.id === type)?.title}
              <div className="line" />
            </div>
            <div className="company">{unit}</div>
            <div className="job-unit">{content}</div>
            <h2 className="peo-name">{name}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainItem;
