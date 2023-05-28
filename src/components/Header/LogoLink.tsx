import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from 'image/logo.png';

const LogoLink = () => {
  return (
    <>
      <Link to="/" className="logo">
        <img src={logoImg} alt="長期社會生態核心觀測-綠島站" />
        <div className="logo-txt">
          <span>LTSER LYUDAO</span>
          <h1>長期社會生態核心觀測-綠島站</h1>
        </div>
      </Link>
    </>
  );
};

export default LogoLink;
