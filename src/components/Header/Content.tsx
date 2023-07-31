import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import LanguageBtn from 'components/Header/LanguageBtn';
import ContactLink from 'components/Header/ContactLink';
import LoginBtn from 'components/Header/LoginBtn';
import LogoLink from 'components/Header/LogoLink';
import LoginPopup from 'components/Header/LoginPopup/Content';
import MobileCollapseBtn from 'components/Header/MobileCollapseBtn';
import SecMenu from 'components/Header/SecMenu';
import MegaMenu from 'components/Header/MegaMenu';
import Item from 'components/Header/Item';

import { menuList } from 'data/common';

import { useHeaderContext } from 'context/HeaderContext';

import { gsapSlideToggle } from 'utils/animation';

const Content = () => {
  const { pathname, hash, key } = useLocation();
  const { show, menu3Ref, mainMenuRef } = useHeaderContext();

  useEffect(() => {
    const target = menu3Ref.current;
    if (target) {
      target.style.display = 'block';
      gsapSlideToggle('6rem', target, show.menu3);
    }
  }, [show.menu3]);

  useEffect(() => {
    const target = mainMenuRef.current;
    if (target) {
      if (show.mobile) {
        target.style.display = 'block';
        gsapSlideToggle('auto', target, show.mainMenu);
      } else {
        gsap.killTweensOf(target);
      }
    }
  }, [show.mobile, show.mainMenu]);

  useEffect(() => {
    if (hash === '') {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <div className="header">
        <MobileCollapseBtn />
        <div className="flex-box">
          <LogoLink />
          <div
            className="main_menu"
            ref={mainMenuRef}
            style={{ display: show.mobile ? '' : 'flex' }}
          >
            <ul>
              {menuList.map((item) => {
                const isSec = item.type === 'sec';
                return item.list ? (
                  <li key={`${item.id}`} className={isSec ? 'secmenu' : ''}>
                    {isSec ? <SecMenu data={item} /> : <MegaMenu data={item} />}
                  </li>
                ) : (
                  <Item key={`${item.id}`} data={item} />
                );
              })}
            </ul>
            <div className="header-iconbox">
              <LanguageBtn />
              <ContactLink />
              <LoginBtn />
            </div>
          </div>
        </div>
      </div>
      <LoginPopup />
    </>
  );
};

export default Content;
