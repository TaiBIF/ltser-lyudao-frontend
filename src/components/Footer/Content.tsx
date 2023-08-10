import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from 'components/Footer/FacebookIcon';
import EmailIcon from 'components/Footer/EmailIcon';
import TelIcon from 'components/Footer/TelIcon';

import logowImg from 'image/logow.png';
import ftlogoImg8 from 'image/ftlogo8.png';

import { FooterSociIconItem } from 'types/common';
import { logoList, footerMenuList } from 'data/common';

const Content = () => {
  const sociIconList: FooterSociIconItem[] = [
    {
      id: 'facebook',
      img: <FacebookIcon />,
      link: '/',
    },
    {
      id: 'email',
      img: <EmailIcon />,
      link: '/',
    },
    {
      id: 'tel',
      img: <TelIcon />,
      link: '/',
    },
  ];

  return (
    <>
      <div className="footer">
        <div className="logo-areabox">
          {logoList.map((v) => {
            const { id, img, title, width } = v;
            return (
              <Link key={id} to="/">
                <img src={img} width={width} alt={title} />
              </Link>
            );
          })}
        </div>
        <div className="footer-topbox">
          <div className="main-box">
            <div className="logow">
              <img src={logowImg} alt="" />
            </div>
            <div className="soci-icon">
              {sociIconList.map((v) => {
                const { id, img, link } = v;
                return (
                  <Link key={id} to={link}>
                    {img}
                  </Link>
                );
              })}
            </div>
            <ul className="footer-menu">
              {footerMenuList.map((item) => {
                const { id, title, list } = item;
                return (
                  <li key={id}>
                    {title && <p className="btitle">{title}</p>}
                    {list?.map((v) => {
                      const { id, title, subtitle, link } = v;
                      return title ? (
                        <Link key={id} to={link} className="btitle">
                          {title}
                        </Link>
                      ) : (
                        <Link key={id} to={link} className="stitle">
                          {subtitle}
                        </Link>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
            <a href="/" className="taibif-box">
              <img src={ftlogoImg8} alt="" />
              <p>
                資料庫管理：
                <br />
                臺灣生物多樣性機構 TaiBIF
              </p>
            </a>
          </div>
        </div>
        <div className="footer-botbox">
          <div className="linkbox">
            <a href="/">隱私權政策</a>
            <div className="line"> | </div>
            <Link to="/terms">使用者條款</Link>
          </div>
          <h6>©2022 LTSER 長期社會生態核心觀測綠島站</h6>
        </div>
      </div>
    </>
  );
};

export default Content;
