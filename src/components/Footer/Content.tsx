import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import FacebookIcon from 'components/Footer/FacebookIcon';
import EmailIcon from 'components/Footer/EmailIcon';
import TelIcon from 'components/Footer/TelIcon';

import logowImg from 'image/logow.png';
import ftlogoImg8 from 'image/ftlogo8.png';

import { FooterSociIconItem } from 'types/common';

import { footerLogoList, generateFooterMenuList } from 'data/common';

import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';

const Content = () => {
  const PAGE_NAME = 'common';
  const COMPONENT_NAME = `Footer`;
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;
  const { t } = useTranslation();

  const { list: menuList, isFetchingList: isFetchingMenuList } =
    useRerenderTranslation({ generateList: generateFooterMenuList });

  const sociIconList: FooterSociIconItem[] = [
    {
      id: 'facebook',
      img: <FacebookIcon />,
      link: 'https://www.facebook.com/profile.php?id=100085888727555',
    },
    {
      id: 'email',
      img: <EmailIcon />,
      link: 'mailto:ltsertwlyudao@gmail.com',
    },
    {
      id: 'tel',
      img: <TelIcon />,
      link: 'tel:+88689671679',
    },
  ];

  return (
    <>
      <div className="footer">
        <div className="logo-areabox">
          {footerLogoList.map((v) => {
            const { id, img, title, width } = v;
            return (
              <div key={id}>
                <img src={img} width={width} alt={title} />
              </div>
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
                  <a key={id} href={link}>
                    {img}
                  </a>
                );
              })}
            </div>
            <ul className="footer-menu">
              {!isFetchingMenuList &&
                menuList.map((item: any) => {
                  const { id, title, list } = item;
                  return (
                    <li key={id}>
                      {title && <p className="btitle">{title}</p>}
                      {list?.map((v: any) => {
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
            <div className="taibif-box">
              <img src={ftlogoImg8} alt="" />
              <p>
                {t(`${I18N_KEY_PREFIX}.dbLogoText1`)}
                <br />
                {t(`${I18N_KEY_PREFIX}.dbLogoText2`)}
              </p>
            </div>
          </div>
        </div>
        <div className="footer-botbox">
          <div className="linkbox">
            <a href="/privacy-policy">
              {t(`${I18N_KEY_PREFIX}.privacyPolicyLink`)}
            </a>
            <div className="line"> | </div>
            <Link to="/terms">{t(`${I18N_KEY_PREFIX}.termsLink`)}</Link>
          </div>
          <h6>{t(`${I18N_KEY_PREFIX}.copyRightText`)}</h6>
        </div>
      </div>
    </>
  );
};

export default Content;
