import React from 'react';

import { useHeaderContext } from 'context/HeaderContext';

const MobileCollapseBtn = () => {
  const { show, handleMenuClick } = useHeaderContext();
  return (
    <>
      <div
        className="mb-hambruger"
        onClick={handleMenuClick}
        data-target="mainMenu"
      >
        <svg
          className={`ham hamRotate ham4 ${
            show.mobile && show.mainMenu ? 'active' : ''
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
    </>
  );
};

export default MobileCollapseBtn;
