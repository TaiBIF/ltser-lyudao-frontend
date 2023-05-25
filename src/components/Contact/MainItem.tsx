import React from 'react';

import { ContactItem } from 'types/contact';

import peoIconImg from 'image/peoicon1.svg';
import { contactTypeList } from 'data/contact';

type MainItemProps = {
  data: ContactItem;
};

const MainItem = (props: MainItemProps) => {
  const { data } = props;
  const { type, name, unit, content, image } = data;
  return (
    <>
      <div className="main-peobox">
        <div className="centw">
          <div className="cirline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={190}
              height={190}
              viewBox="0 0 190 190"
            >
              <path
                id="Path_15852"
                data-name="Path 15852"
                d="M150,0A180,180,0,0,1,330,180"
                transform="translate(5 335) rotate(-90)"
                fill="none"
                stroke="#529a81"
                strokeLinecap="round"
                strokeWidth={10}
              />
            </svg>
          </div>
          <div className="picbox">
            <div className="peoimg">
              <img src={image} alt={name} />
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
