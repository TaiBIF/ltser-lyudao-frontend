import React from 'react';

import { ContactItem } from 'types/contact';

import peoIconImg from 'image/peoicon2.svg';

type SubItemProps = {
  data: ContactItem;
  contact: boolean;
};

const SubItem = (props: SubItemProps) => {
  const { data, contact } = props;
  const { name, unit, content, image } = data;
  return (
    <>
      <li>
        <div className="wbox">
          <div className="picbox">
            <div className="peoimg">
              <img src={image} alt={name} />
            </div>
            <div className="iconbox">
              <img src={peoIconImg} alt="peoicon2" />
            </div>
          </div>
          <div className="txt-area">
            <div className="company">{unit}</div>
            <div className="job-unit">{content}</div>
            <h2 className="peo-name">{name}</h2>
            {contact && <p className="mailtxt">信箱：{data.contact}</p>}
          </div>
        </div>
      </li>
    </>
  );
};

export default SubItem;
