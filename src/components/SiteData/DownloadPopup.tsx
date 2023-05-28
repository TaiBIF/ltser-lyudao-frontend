import React, { useEffect, useRef } from 'react';
import CloseBtn from 'components/SiteData/CloseBtn';
import { useEcoContext } from 'context/EcoContext';

const DownloadPopup = () => {
  const { downloadPopupRef } = useEcoContext();

  return (
    <>
      <div className="dowload-pop" ref={downloadPopupRef}>
        <div className="flex100">
          <div className="w_bgbox">
            <CloseBtn />
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
