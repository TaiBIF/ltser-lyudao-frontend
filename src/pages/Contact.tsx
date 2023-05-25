import React from 'react';

import Breadcrumb from 'components/Breadcrumb';
import MainItem from 'components/Contact/MainItem';
import SubItem from 'components/Contact/SubItem';
import { contactList, contactTypeList } from 'data/contact';

const Contact = () => {
  return (
    <>
      <div className="innbox">
        <div className="bn-area">
          <div className="bntitleboxarea">
            <div className="main-box">
              <div className="bntitle">
                <h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  >
                    <g
                      id="Ellipse_201"
                      data-name="Ellipse 201"
                      fill="none"
                      stroke="#e8d06a"
                      strokeWidth={4}
                    >
                      <circle cx={9} cy={9} r={9} stroke="none" />
                      <circle cx={9} cy={9} r={7} fill="none" />
                    </g>
                  </svg>
                  CONTACT
                </h2>
                <h3>聯絡我們</h3>
              </div>
            </div>
          </div>
          <div className="mask-area">
            <img src="image/maskgreen.png" alt="" />
          </div>
          {/*banner替換請用 background-image: url("");*/}
          <div
            className="pic-box"
            style={{ backgroundImage: 'url("image/contact_bn.png")' }}
          ></div>
        </div>
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
                  <SubItem data={v} />
                ))}
            </ul>
            <div className="line-titlarea">
              <div className="peo-title">
                <div className="line1" />
                {contactTypeList.find((v) => v.id === 3)?.title}
                <div className="line2" />
              </div>
            </div>
            <ul className="team-list">
              {contactList
                .filter((v) => v.type === 3)
                .map((v) => (
                  <SubItem data={v} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
