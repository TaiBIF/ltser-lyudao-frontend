import React from 'react';
import { Link } from 'react-router-dom';

import ftlogoImg1 from 'image/ftlogo1.png';
import ftlogoImg2 from 'image/ftlogo2.png';
import ftlogoImg3 from 'image/ftlogo3.png';
import ftlogoImg4 from 'image/ftlogo4.png';
import ftlogoImg5 from 'image/ftlogo5.png';
import ftlogoImg6 from 'image/ftlogo6.png';
import ftlogoImg7 from 'image/ftlogo7.png';
import ftlogoImg8 from 'image/ftlogo8.png';
import logowImg from 'image/logow.png';

type Props = {};

const Footer = (props: Props) => {
  type Logo = {
    id: string;
    img: string;
    title: string;
    width?: string;
    link: string;
  };
  type SociIcon = {
    id: string;
    img: JSX.Element;
    link: string;
  };
  type MenuItem = {
    id: string;
    title?: string;
    subtitle?: string;
    link: string;
  };
  type MenuList = {
    id: string;
    title?: string;
    list: MenuItem[];
  };

  const logoList: Logo[] = [
    {
      id: '1',
      img: ftlogoImg1,
      title: '',
      width: '348px',
      link: '/',
    },
    {
      id: '2',
      img: ftlogoImg2,
      title: '',
      link: '/',
    },
    {
      id: '3',
      img: ftlogoImg3,
      title: '',
      link: '/',
    },
    {
      id: '4',
      img: ftlogoImg4,
      title: '',
      link: '/',
    },
    {
      id: '5',
      img: ftlogoImg5,
      title: '',
      link: '/',
    },
    {
      id: '6',
      img: ftlogoImg6,
      title: '',
      link: '/',
    },
    {
      id: '7',
      img: ftlogoImg7,
      title: '',
      width: '100px',
      link: '/',
    },
  ];
  const sociIconList: SociIcon[] = [
    {
      id: '1',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.045"
          height="25.141"
          viewBox="0 0 13.045 25.141"
        >
          <path
            id="Path_10143"
            data-name="Path 10143"
            d="M126.492,104.845V93.392h3.86l.579-4.484h-4.44V86.055c0-1.3.359-2.176,2.215-2.176h2.353v-4a31.63,31.63,0,0,0-3.448-.177c-3.413,0-5.751,2.082-5.751,5.908v3.3h-3.846V93.4h3.846v11.448Z"
            transform="translate(-118.015 -79.704)"
            fill="#fff"
          />
        </svg>
      ),
      link: '/',
    },
    {
      id: '2',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28.776"
          height="20.149"
          viewBox="0 0 28.776 20.149"
        >
          <g id="email" transform="translate(-14.274 -18.588)">
            <path
              id="Path_23"
              data-name="Path 23"
              d="M53.717,38.52H30.279a2.672,2.672,0,0,0-2.669,2.669V56a2.676,2.676,0,0,0,2.669,2.669H53.717A2.676,2.676,0,0,0,56.386,56V41.189A2.672,2.672,0,0,0,53.717,38.52Zm1.235,17.818L47.627,49.5,55,43.756C54.981,56.721,55.049,55.982,54.952,56.338ZM42,52.138,29,42V41.19a1.286,1.286,0,0,1,1.285-1.285H53.716A1.286,1.286,0,0,1,55,41.19V42Zm-13-8.382L36.369,49.5l-7.325,6.834c-.1-.356-.029.374-.05-12.582Zm1.084,13.51,7.4-6.9,4.1,3.195a.693.693,0,0,0,.851,0l4.1-3.195,7.4,6.9c-.191.03-23.676.027-23.84,0Z"
              transform="translate(-13.336 -19.932)"
              fill="#fff"
            />
          </g>
        </svg>
      ),
      link: '/',
    },
    {
      id: '3',
      img: (
        <svg
          id="Group_251"
          data-name="Group 251"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="24.064"
          height="24.155"
          viewBox="0 0 24.064 24.155"
        >
          <defs>
            <clipPath id="clipPath">
              <rect
                id="Rectangle_147"
                data-name="Rectangle 147"
                width="24.064"
                height="24.155"
                fill="#fff"
              />
            </clipPath>
          </defs>
          <g id="Group_250" data-name="Group 250" clipPath="url(#clipPath)">
            <path
              id="Path_10144"
              data-name="Path 10144"
              d="M5.143,0A3.577,3.577,0,0,1,7,1.177c.932.957,1.9,1.883,2.807,2.862a2.2,2.2,0,0,1,.009,3.095C9.228,7.781,8.6,8.383,7.974,9a.274.274,0,0,0-.075.377,13.931,13.931,0,0,0,2.493,3.442,17.2,17.2,0,0,0,3.321,2.811c.337.215.7.39,1.045.592a.194.194,0,0,0,.281-.046c.523-.533,1.039-1.075,1.588-1.58a3.758,3.758,0,0,1,.99-.7,2.156,2.156,0,0,1,2.512.513c1.039,1.006,2.045,2.046,3.077,3.06a2.384,2.384,0,0,1,.167,3.509c-.731.789-1.477,1.57-2.273,2.291a3.861,3.861,0,0,1-3.039.873,13.475,13.475,0,0,1-4.936-1.543,24.622,24.622,0,0,1-6.271-4.429,24.415,24.415,0,0,1-6.3-9.522A9.091,9.091,0,0,1,0,5.431,3.874,3.874,0,0,1,1.1,2.725Q2.054,1.745,3.031.788A2.95,2.95,0,0,1,4.53,0ZM18.477,22.939a2.6,2.6,0,0,0,1.95-.687q1.058-1.025,2.056-2.111a1.1,1.1,0,0,0-.014-1.646c-1.063-1.094-2.145-2.169-3.234-3.237a1.04,1.04,0,0,0-1.419-.08,2.9,2.9,0,0,0-.353.311c-.586.582-1.167,1.168-1.753,1.749a1,1,0,0,1-1.289.2c-.349-.179-.7-.356-1.036-.559a18.212,18.212,0,0,1-3.91-3.238A14.654,14.654,0,0,1,6.7,9.714,1.083,1.083,0,0,1,6.991,8.24c.572-.551,1.141-1.1,1.7-1.67a1.176,1.176,0,0,0,0-1.936Q7.233,3.155,5.753,1.7a1.823,1.823,0,0,0-.511-.37,1.186,1.186,0,0,0-1.4.38C3.254,2.288,2.656,2.859,2.1,3.467a3.608,3.608,0,0,0-.668,1.01A4.036,4.036,0,0,0,1.355,6.89a14.677,14.677,0,0,0,1.673,4.333A24.781,24.781,0,0,0,14.753,22.007a10.021,10.021,0,0,0,3.723.932"
              transform="translate(0)"
              fill="#fff"
            />
          </g>
        </svg>
      ),
      link: '/',
    },
  ];
  const menuList: MenuList[] = [
    {
      id: '1',
      title: '關於LTSER_綠島',
      list: [
        {
          id: '1',
          subtitle: '生態觀測',
          link: '/',
        },
        {
          id: '2',
          subtitle: '環境觀測',
          link: '/',
        },
        {
          id: '3',
          subtitle: '社會觀測',
          link: '/',
        },
      ],
    },
    {
      id: '2',
      title: '觀測站資料',
      list: [
        {
          id: '1',
          subtitle: '生態觀測',
          link: '/',
        },
        {
          id: '2',
          subtitle: '環境觀測',
          link: '/',
        },
        {
          id: '3',
          subtitle: '社會觀測',
          link: '/',
        },
      ],
    },
    {
      id: '3',
      list: [
        {
          id: '1',
          title: '最新消息',
          link: '/',
        },
        {
          id: '2',
          title: '相關文獻',
          link: '/',
        },
        {
          id: '3',
          title: '常見Q&A',
          link: '/',
        },
      ],
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
              {menuList.map((item) => {
                const { id, title, list } = item;
                return (
                  <li key={id}>
                    {title && <p className="btitle">{title}</p>}
                    {list.map((v) => {
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
            <a href="/">使用者條款</a>
          </div>
          <h6>©2022 LTSER 長期社會生態核心觀測綠島站</h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
