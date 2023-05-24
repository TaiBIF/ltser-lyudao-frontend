import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Power1 } from 'gsap';

import useWindowDimensions from 'hooks/useWindowDimensions';

import logoImg from 'image/logo.png';

import { menuList } from 'data/common';

type ActiveState = {
  menu3: boolean;
  mainMenu: boolean;
  mobile: boolean;
};

const Header = () => {
  const { width } = useWindowDimensions();

  const m3titleRef = useRef<HTMLDivElement>(null);
  const menu3Ref = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<ActiveState>({
    menu3: false,
    mainMenu: false,
    mobile: false,
  });

  const isMobile = width && width < 1279;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const key = target.getAttribute('data-toggle') as keyof ActiveState;
    setActive({ ...active, [key]: !active[key] });
  };

  const handleMouseLeave = () => {
    setActive({ ...active, menu3: false });
  };

  const gsapSlideToggle = (
    height: string,
    target: HTMLElement,
    state: boolean
  ) => {
    gsap.set(target, {
      duration: 0.3,
      display: state ? 'none' : 'block',
      height: state ? 0 : height,
      ease: Power1.easeOut,
    });
    gsap.to(target, {
      duration: 0.3,
      display: state ? 'block' : 'none',
      height: state ? height : 0,
      ease: Power1.easeOut,
    });
  };

  useEffect(() => {
    if (menu3Ref.current) {
      gsapSlideToggle('6rem', menu3Ref.current, active.menu3);
    }
  }, [active.menu3]);

  useEffect(() => {
    if (mainMenuRef.current) {
      if (active.mobile) {
        gsapSlideToggle('auto', mainMenuRef.current, active.mainMenu);
      } else {
        gsap.killTweensOf(mainMenuRef.current);
      }
    }
  }, [active.mobile, active.mainMenu]);

  useEffect(() => {
    if (isMobile) {
      setActive({ ...active, mobile: true });
    } else {
      setActive({ ...active, mobile: false });
    }
  }, [width]);

  return (
    <>
      <div className="header">
        <div
          className="mb-hambruger"
          onClick={handleClick}
          data-toggle="mainMenu"
        >
          <svg
            className={`ham hamRotate ham4 ${
              active.mobile && active.mainMenu ? 'active' : ''
            }`}
            viewBox="0 0 100 100"
            width="60"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
        <div className="flex-box">
          <a href="/" className="logo">
            <img src={logoImg} alt="長期社會生態核心觀測-綠島站" />
            <div className="logo-txt">
              <span>LTSER LYUDAO</span>
              <h1>長期社會生態核心觀測-綠島站</h1>
            </div>
          </a>
          <div
            className="main_menu"
            ref={mainMenuRef}
            style={{ display: active.mobile ? '' : 'flex' }}
          >
            <ul>
              {menuList.map((item) => {
                const { title, type, list, link } = item;
                const isSec = type === 'sec';
                return list ? (
                  <li key={item.id} className={isSec ? 'secmenu' : ''}>
                    {isSec ? (
                      <>
                        <p className="big_title">
                          {title}
                          <span></span>
                        </p>
                        <div className="menu_2" onMouseLeave={handleMouseLeave}>
                          <div className="w_bg">
                            {item.list &&
                              item.list.map((subItem) => {
                                const { title, link, list } = subItem;
                                return list ? (
                                  <div
                                    key={`${item.id}-${subItem.id}`}
                                    className="m3titlebox"
                                  >
                                    <div
                                      className={`m3title ${
                                        active.menu3 ? 'now' : ''
                                      }`}
                                      ref={m3titleRef}
                                      onClick={handleClick}
                                      data-toggle="menu3"
                                    >
                                      {title}
                                    </div>
                                    <div className="menu_3" ref={menu3Ref}>
                                      {subItem.list &&
                                        subItem.list.map((finalItem) => {
                                          const { id, title, link } = finalItem;
                                          return (
                                            <Link
                                              key={`${item.id}-${subItem.id}-${finalItem.id}`}
                                              to={`/${link}`}
                                            >
                                              {title}
                                            </Link>
                                          );
                                        })}
                                    </div>
                                  </div>
                                ) : (
                                  <Link
                                    key={`${item.id}-${subItem.id}`}
                                    to={link}
                                  >
                                    {title}
                                  </Link>
                                );
                              })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link to={`/${item.link}`} className="big_title">
                          {title}
                          <span></span>
                        </Link>
                        <div className="menu_mega">
                          <div className="w_bg">
                            <div className="main-1240">
                              {item.list &&
                                item.list.map((subItem) => {
                                  const { id, title } = subItem;
                                  return (
                                    <div key={id} className="item-set1">
                                      <div className="titlebox">
                                        {title}
                                        <div className="mark"></div>
                                      </div>
                                      <div className="itembox">
                                        {subItem.list &&
                                          subItem.list.map((finalItem) => {
                                            const { id, title, link } =
                                              finalItem;
                                            return (
                                              <Link
                                                key={id}
                                                to={`/${item.link}/${subItem.link}/${link}`}
                                              >
                                                {title}
                                              </Link>
                                            );
                                          })}
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                ) : (
                  <li key={item.id}>
                    <Link to={`/${link}`} className="big_title">
                      {title}
                      <span></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="header-iconbox">
              <div className="lang">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.501"
                  height="28.505"
                  viewBox="0 0 28.501 28.505"
                >
                  <path
                    id="headericon-earth"
                    d="M14.875,28h-1.75a1.151,1.151,0,0,0-.182-.044A13.492,13.492,0,0,1,6.33,25.7,13.829,13.829,0,0,1,.215,16.415C.12,15.907.07,15.391,0,14.879v-1.75c.041-.333.074-.668.123-1a13.749,13.749,0,0,1,5.348-9.2A13.529,13.529,0,0,1,16.272.2a13.542,13.542,0,0,1,8.9,5.4,13.6,13.6,0,0,1,2.695,10.266,13.516,13.516,0,0,1-3.434,7.446,13.777,13.777,0,0,1-8,4.47c-.517.093-1.042.146-1.563.218M7.527,2.62a3.14,3.14,0,0,0,2.144.318c.29-.075.589-.118.881-.186a3,3,0,0,1,3.009.622,1.967,1.967,0,0,0,.787.348c.3.093.627.114.932.2a1.175,1.175,0,0,1,.912,1.127,4.666,4.666,0,0,1-.264,1.88,1.2,1.2,0,0,1-.953.844c-.161.032-.318.078-.48.106a8.267,8.267,0,0,0-2.592.979,1.591,1.591,0,0,0-.886,1.086,1.516,1.516,0,0,1-1.3,1.261c-.479.109-.967.175-1.447.276-.413.086-.47.187-.271.56.222.417.507.8.726,1.219a.945.945,0,0,0,1.108.506,5.756,5.756,0,0,1,1.624-.041,10.578,10.578,0,0,1,3.3,1.172,7.982,7.982,0,0,1,1.281.874,1.74,1.74,0,0,1,.632,1.733,4.9,4.9,0,0,1-.867,2.157c-.4.533-.827,1.041-1.239,1.563a3.574,3.574,0,0,0-.781,1.806,6.237,6.237,0,0,1-.12.7,3.594,3.594,0,0,1-.935,1.907,1.015,1.015,0,0,1-1.53-.036,2.6,2.6,0,0,1-.569-.887,22.666,22.666,0,0,1-.669-2.441A4.31,4.31,0,0,0,8.054,19.06a1.792,1.792,0,0,1-.824-1.276,14.709,14.709,0,0,1-.208-1.813,2.384,2.384,0,0,0-.9-1.8,5.789,5.789,0,0,0-.748-.5A8.441,8.441,0,0,1,2.7,11.3c-.382-.54-.7-1.122-1.041-1.668A13.082,13.082,0,0,0,23.567,22.921L23.32,22.9a1.188,1.188,0,0,1-1.195-1.612,8.677,8.677,0,0,0,.172-1.839,13.015,13.015,0,0,0-.05-1.555,12.4,12.4,0,0,0-.206-1.453.723.723,0,0,0-.7-.594c-.344-.029-.69-.037-1.036-.054a3.222,3.222,0,0,1-2.153-.706,2.128,2.128,0,0,1-.5-3.032c.175-.3.361-.59.533-.89a.744.744,0,0,0,.09-.626.692.692,0,0,1,.034-.424,1.727,1.727,0,0,1,.9-.981,1.009,1.009,0,0,1,.6-.079,14.3,14.3,0,0,0,3.449.293.649.649,0,0,0,.618-.756c-.009-.291-.23-.446-.639-.428-.273.013-.544.058-.817.07-.745.034-1.49.07-2.236.084a.669.669,0,0,1-.716-.553,5.935,5.935,0,0,1-.2-1.2,2.149,2.149,0,0,1,1.293-2.131c.428-.2.871-.366,1.307-.546.094-.039.19-.073.3-.116A13.015,13.015,0,0,0,7.527,2.62M9.45,14.675A1.39,1.39,0,0,1,8.151,14a17.307,17.307,0,0,1-1.007-1.747,1.289,1.289,0,0,1-.1-.713c.078-.6.547-.8,1.056-.915s1-.184,1.5-.286a.675.675,0,0,0,.568-.582A2.251,2.251,0,0,1,11.2,8.274a8.609,8.609,0,0,1,2.753-1.161c.257-.058.518-.1.775-.16a.585.585,0,0,0,.465-.482c.061-.294.122-.589.167-.885.09-.593-.08-.848-.678-.913a3.525,3.525,0,0,1-2.041-.888,1.265,1.265,0,0,0-1.046-.3,10.555,10.555,0,0,0-1.264.213,4.249,4.249,0,0,1-2.96-.186A3.054,3.054,0,0,0,6.727,3.3a.511.511,0,0,0-.365.05,12.889,12.889,0,0,0-4.13,4.864.464.464,0,0,0-.023.327,7.985,7.985,0,0,0,3.6,4.374,7.591,7.591,0,0,1,.758.487,3.047,3.047,0,0,1,1.283,2.081c.058.423.054.854.079,1.282a2.144,2.144,0,0,0,1.055,1.912,2.994,2.994,0,0,1,1.342,1.739c.244.769.418,1.561.608,2.347a6.33,6.33,0,0,0,.724,2.047c.237.363.447.38.638,0a5.236,5.236,0,0,0,.54-1.471,5.365,5.365,0,0,1,1.132-2.764c.207-.243.408-.49.612-.735a4.879,4.879,0,0,0,1.069-1.793c.305-1.108.32-1.335-.721-2.032a11.291,11.291,0,0,0-3.287-1.369,3.054,3.054,0,0,0-1.269-.067c-.306.042-.615.066-.923.1M27.127,14.1A13.273,13.273,0,0,0,26.3,9.44,13.1,13.1,0,0,0,23.15,4.61c-.07-.069-.2-.166-.259-.142-.719.279-1.436.563-2.139.879a1.02,1.02,0,0,0-.563.937,2.516,2.516,0,0,0,.007.572c.113.706-.02.655.74.612s1.543-.133,2.316-.173a1.358,1.358,0,0,1,1.454.918,1.841,1.841,0,0,1-.684,1.862.883.883,0,0,1-.359.111,13.853,13.853,0,0,1-3.885-.242c-.24-.049-.67.262-.619.491a1.975,1.975,0,0,1-.4,1.486c-.18.306-.37.607-.531.922a.951.951,0,0,0-.048.9,1.852,1.852,0,0,0,1.3,1.075,13.919,13.919,0,0,0,1.576.123,1.755,1.755,0,0,1,1.514.667,2.576,2.576,0,0,1,.435,1.1,14.923,14.923,0,0,1-.048,4.942c-.047.192,0,.289.186.347a1.74,1.74,0,0,0,1.686-.583,13.007,13.007,0,0,0,2.3-7.308"
                    transform="translate(0.25 0.253)"
                    fill="#529a81"
                    stroke="#529a81"
                    strokeWidth="0.5"
                  />
                </svg>
                <p>選擇語系</p>
                <div className="menu_2">
                  <div className="w_bg">
                    <Link to="/">English</Link>
                    <Link to="/">繁體中文</Link>
                  </div>
                </div>
              </div>
              <Link to="/" className="contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.776"
                  height="20.149"
                  viewBox="0 0 28.776 20.149"
                >
                  <g
                    id="headericon-mail"
                    transform="translate(-14.274 -18.588)"
                  >
                    <path
                      id="Path_23"
                      data-name="Path 23"
                      d="M53.717,38.52H30.279a2.672,2.672,0,0,0-2.669,2.669V56a2.676,2.676,0,0,0,2.669,2.669H53.717A2.676,2.676,0,0,0,56.386,56V41.189A2.672,2.672,0,0,0,53.717,38.52Zm1.235,17.818L47.627,49.5,55,43.756C54.981,56.721,55.049,55.982,54.952,56.338ZM42,52.138,29,42V41.19a1.286,1.286,0,0,1,1.285-1.285H53.716A1.286,1.286,0,0,1,55,41.19V42Zm-13-8.382L36.369,49.5l-7.325,6.834c-.1-.356-.029.374-.05-12.582Zm1.084,13.51,7.4-6.9,4.1,3.195a.693.693,0,0,0,.851,0l4.1-3.195,7.4,6.9c-.191.03-23.676.027-23.84,0Z"
                      transform="translate(-13.336 -19.932)"
                      fill="#529a81"
                    />
                  </g>
                </svg>
                <p>聯絡我們</p>
              </Link>
              <div className="loginbox">
                <div className="formb">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.06"
                    height="24.43"
                    viewBox="0 0 21.06 24.43"
                  >
                    <g id="headericon-peo" transform="translate(-1821 -28)">
                      <g
                        id="Ellipse_1"
                        className="cc"
                        data-name="Ellipse 1"
                        transform="translate(1826 28)"
                        fill="none"
                        stroke="#529a81"
                        strokeWidth="1.5"
                      >
                        <circle cx="5" cy="5" r="5" stroke="none" />
                        <circle cx="5" cy="5" r="4.25" fill="none" />
                      </g>
                      <g
                        id="Path_30"
                        data-name="Path 30"
                        transform="translate(1821 39.914)"
                        fill="none"
                      >
                        <path
                          d="M10.53,0c5.815,0,10.53,4.312,10.53,9.632s-4.714,1.649-10.53,1.649S0,14.952,0,9.632,4.714,0,10.53,0Z"
                          stroke="none"
                        />
                        <path
                          className="dd"
                          d="M 10.52978515625 1.499995231628418 C 5.550745010375977 1.499995231628418 1.499994277954102 5.148055076599121 1.499994277954102 9.632135391235352 C 1.499994277954102 10.64191436767578 1.701105117797852 10.9030647277832 1.724044799804688 10.92951488494873 C 1.753955841064453 10.96402549743652 1.913105010986328 11.0153751373291 2.228935241699219 11.0153751373291 C 2.893974304199219 11.0153751373291 3.839385986328125 10.80522537231445 4.934085845947266 10.56188488006592 C 6.49831485748291 10.21416473388672 8.445065498352051 9.781425476074219 10.52978515625 9.781425476074219 C 12.61476516723633 9.781425476074219 14.56150531768799 10.21418476104736 16.12574577331543 10.56190490722656 C 17.2203254699707 10.80523490905762 18.16563415527344 11.0153751373291 18.83063507080078 11.0153751373291 C 19.14627456665039 11.0153751373291 19.3054256439209 10.96394538879395 19.33539581298828 10.92938423156738 C 19.35834503173828 10.90291500091553 19.5595645904541 10.64165496826172 19.5595645904541 9.632135391235352 C 19.5595645904541 5.148055076599121 15.50882530212402 1.499995231628418 10.52978515625 1.499995231628418 M 10.52978515625 -4.76837158203125e-06 C 16.3452262878418 -4.76837158203125e-06 21.0595645904541 4.312455177307129 21.0595645904541 9.632135391235352 C 21.0595645904541 14.95180511474609 16.3452262878418 11.28142547607422 10.52978515625 11.28142547607422 C 4.714344024658203 11.2814245223999 -7.62939453125e-06 14.95180320739746 -5.7220458984375e-06 9.632135391235352 C -5.7220458984375e-06 4.312455177307129 4.714345932006836 -4.76837158203125e-06 10.52978515625 -4.76837158203125e-06 Z"
                          stroke="none"
                          fill="#529a81"
                        />
                      </g>
                    </g>
                  </svg>
                  <p>登入</p>
                </div>
                <div className="menu_2">
                  <div className="w_bg">
                    <Link to="/dashboard/contact">後台</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
