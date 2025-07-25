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

import { generateHeaderMenuList } from 'data/common';
import { HEADER_ABOUT_API_URL } from 'data/api';
import { headerAboutData } from 'data/about';

import { useHeaderContext } from 'context/HeaderContext';
import { gsapSlideToggle } from 'utils/animation';
import useRender from 'hooks/page/useRender';
import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';

const Content = () => {
  const PAGE_NAME = 'common';
  const COMPONENT_NAME = `Header`;
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { list: menuList, isFetchingList: isFetchingMenuList } =
    useRerenderTranslation({ generateList: generateHeaderMenuList });

  const { pathname, hash, key } = useLocation();
  const { show, menu3Ref, mainMenuRef } = useHeaderContext();
  const { getHeaderDetail } = useRender();
  const { about, setAbout } = useHeaderContext();

  const [menu, setMenu] = useState<HeaderMenuItem[]>([]);

  const isFetchingAbout = Object.keys(about).length === 0;
  const isFetchingMenu = false;

  useEffect(() => {
    const target = mainMenuRef.current;
    if (target) {
      if (show.mobile) {
        target.style.display = 'block';
        gsapSlideToggle('calc(100vh - 60px)', target, show.mainMenu);
      } else {
        gsapSlideToggle('calc(100vh - 60px)', target, show.mainMenu);
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
    getHeaderDetail({
      url: HEADER_ABOUT_API_URL,
      setData: setAbout,
      defaultData: headerAboutData,
    });
  }, [pathname]);

  useEffect(() => {
    if (!isFetchingAbout && !isFetchingMenuList) {
      const originalMenu = menuList;
      Object.entries(about).forEach(([key, value]) => {
        const aboutItem = menuList
          .find((v: any) => v.link === 'about')
          ?.list?.find((v: any) => {
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
  }, [about, menuList]);

  return (
    <>
      <div className="header">
        <MobileCollapseBtn />
        <div className="flex-box">
          <LogoLink I18N_KEY_PREFIX={I18N_KEY_PREFIX} />
          <div
            className="main_menu"
            ref={mainMenuRef}
            style={{ display: show.mobile ? 'block' : 'flex' }}
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
              <LoginBtn I18N_KEY_PREFIX={I18N_KEY_PREFIX} />
            </div>
          </div>
        </div>
      </div>
      <LoginPopup />
    </>
  );
};

export default Content;
