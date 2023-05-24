import React from 'react';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';

const PopupLayout = () => {
  const map = useMap();
  const handleCloseClick = () => {
    map && map.closePopup();
  };
  return (
    <>
      <div className="wbox-cont">
        <div className="rel">
          <CloseBtn onClick={handleCloseClick} />
          <h3 className="item-title">屈尺站 - 實時觀測資料</h3>
          <table
            className="map-tablestyle"
            border={0}
            cellPadding={0}
            cellSpacing={0}
          >
            <tbody>
              <tr>
                <td>調查月份</td>
                <td>2022年12月</td>
              </tr>
              <tr>
                <td>水溫</td>
                <td>18.800 °C</td>
              </tr>
              <tr>
                <td>pH</td>
                <td>7.810</td>
              </tr>
              <tr>
                <td>pHmV</td>
                <td>-61.000</td>
              </tr>
              <tr>
                <td>氧化還原電位(ORPmV)</td>
                <td>45.670</td>
              </tr>
              <tr>
                <td>電導度</td>
                <td>14.230 mS/cm</td>
              </tr>
              <tr>
                <td>濁度(NTU)</td>
                <td>134.330</td>
              </tr>
              <tr>
                <td>溶氧</td>
                <td>0.000 mg/L</td>
              </tr>
              <tr>
                <td>總溶解固體物</td>
                <td>8.840</td>
              </tr>
              <tr>
                <td>鹽度</td>
                <td>8.230 ng/L</td>
              </tr>
              <tr>
                <td>Specific gravity</td>
                <td>8.230 ng/L</td>
              </tr>
            </tbody>
          </table>
          <div className="align-center">
            <a href="/" className="link-more">
              <p>查看圖表</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.207"
                height="9.414"
                viewBox="0 0 31.207 9.414"
              >
                <g
                  id="Group_212"
                  data-name="Group 212"
                  transform="translate(-274 -1559.793)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2={30}
                    transform="translate(274.5 1568.5)"
                    fill="none"
                    stroke="#529A81"
                    strokeLinecap="round"
                    strokeWidth={1}
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2={8}
                    y2={8}
                    transform="translate(296.5 1560.5)"
                    fill="none"
                    stroke="#529A81"
                    strokeLinecap="round"
                    strokeWidth={1}
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="arr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.804"
              height="8.934"
              viewBox="0 0 11.804 8.934"
            >
              <path
                id="Polygon_9"
                data-name="Polygon 9"
                d="M5.9,0l5.9,8.934H0Z"
                transform="translate(11.804 8.934) rotate(180)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupLayout;
