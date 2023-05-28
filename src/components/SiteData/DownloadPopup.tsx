import React, { useEffect, useRef } from 'react';

import CloseIcon from 'components/CloseIcon';

import { useEcoContext } from 'context/EcoContext';
import { fadeInitStyle } from 'utils/animation';
import { handleStopPropagation } from 'helpers/stopPropagation';

const DownloadPopup = () => {
  const { downloadPopupRef, handleLoginClick } = useEcoContext();

  return (
    <>
      <div className="dowload-pop" ref={downloadPopupRef} style={fadeInitStyle}>
        <div
          className="flex100"
          onClick={() => {
            handleLoginClick('close');
          }}
        >
          <div className="w_bgbox" onClick={handleStopPropagation}>
            <div
              className="xx"
              onClick={() => {
                handleLoginClick('close');
              }}
            >
              <CloseIcon />
            </div>
            <div className="title">下載申請</div>
            <div className="input-item">
              <input type="text" placeholder="請輸入您email" />
            </div>
            <div className="input-item">
              <select name="" id="">
                <option value="">您的身份</option>
              </select>
            </div>
            <p>下載原因</p>
            <textarea name="" id="" />
            <button>送出申請</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPopup;
