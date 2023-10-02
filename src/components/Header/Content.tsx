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

import { HeaderMenuItem } from 'types/common';

import { menuList } from 'data/common';
import { HEADER_ABOUT_API_URL } from 'data/api';
import { headerAboutData } from 'data/about';

import { useHeaderContext } from 'context/HeaderContext';
import { gsapSlideToggle } from 'utils/animation';
import useRender from 'hooks/page/useRender';
import LogoutBtn from './LogoutBtn';
import { useAuthContext } from 'context/AuthContext';

const Content = () => {
  const { pathname, hash, key } = useLocation();
  const { show, menu3Ref, mainMenuRef } = useHeaderContext();
  const { getDetail } = useRender();
  const { about, setAbout } = useHeaderContext();
  const { auth } = useAuthContext();

  const [menu, setMenu] = useState<HeaderMenuItem[]>([]);

  const isFetchingAbout = Object.keys(about).length === 0;
  const isFetchingMenu = false;

  useEffect(() => {
    const target = menu3Ref.current;
    if (target) {
      target.style.display = 'block';
      gsapSlideToggle('9rem', target, show.menu3);
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
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  useEffect(() => {
    getDetail({
      url: HEADER_ABOUT_API_URL,
      setData: setAbout,
      defaultData: headerAboutData,
      redirectPath: '/',
    });
  }, [pathname]);

  useEffect(() => {
    if (!isFetchingAbout) {
      const originalMenu = menuList;
      Object.entries(about).forEach(([key, value]) => {
        const aboutItem = originalMenu
          .find((v) => v.link === 'about')
          ?.list?.find((v) => {
            const formatLink = `${v.link?.split('-')[0]}${v.link
              ?.split('-')[1]
              .slice(0, 1)
              .toUpperCase()}${v.link?.split('-')[1].slice(1)}`;
            return formatLink === key;
          });
        if (aboutItem) {
          aboutItem.list = about[key];
        }
      });
      setMenu([...originalMenu]);
    }
  }, [about]);

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
              {!isFetchingMenu &&
                menu.map((item) => {
                  const isSec = item.type === 'sec';
                  return item.list ? (
                    <li key={`${item.id}`} className={isSec ? 'secmenu' : ''}>
                      {isSec ? (
                        <SecMenu data={item} />
                      ) : (
                        <MegaMenu data={item} />
                      )}
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
