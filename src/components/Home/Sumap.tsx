import React, { useState } from 'react';

import { EnterState } from 'types/home';

import mapImg from 'image/map.jpg';
import chartImg from 'image/chart.jpg';

interface Props {
  enter: EnterState;
}

type ActiveState = {
  year: string;
  item: string;
};

const Sumap = (props: Props) => {
  const { enter } = props;
  const [active, setActive] = useState<ActiveState>({
    year: '',
    item: '',
  });
  return (
    <>
      <section className={`s4-sumap ${enter.s4 ? 'vivi' : ''}`}>
        <div className="main-box">
          <h2 className="titles4">survey map</h2>
          <div className="map-area">
            <div className="map-box">
              <img src={mapImg} alt="" />
            </div>
            <div className="select-area">
              <h3 className="item-title">測站/樣區篩選</h3>
              <select name="year">
                <option value="">年份</option>
              </select>
              <select name="item">
                <option value="">觀測項目</option>
              </select>
            </div>
            {/*點選的給now*/}
            <div className="pin-icon now">
              <div className="rel">
                <svg
                  className="iconpin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36.273"
                  height="27.273"
                  viewBox="0 0 36.273 27.273"
                >
                  <g
                    id="Group_240"
                    data-name="Group 240"
                    transform="translate(0.155 0.155)"
                  >
                    <g
                      id="Group_241"
                      data-name="Group 241"
                      transform="translate(0.545 0.545)"
                    >
                      <circle
                        id="Ellipse_3"
                        data-name="Ellipse 3"
                        cx="7.312"
                        cy="7.312"
                        r="7.312"
                        transform="translate(0 11.249)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_4"
                        data-name="Ellipse 4"
                        cx="7.312"
                        cy="7.312"
                        r="7.312"
                        transform="translate(20.249 11.249)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_5"
                        data-name="Ellipse 5"
                        cx="5.062"
                        cy="5.062"
                        r="5.062"
                        transform="translate(2.25 13.499)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_6"
                        data-name="Ellipse 6"
                        cx="5.062"
                        cy="5.062"
                        r="5.062"
                        transform="translate(22.498 13.499)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1048"
                        data-name="Path 1048"
                        d="M18.5,6.379V2.655a2.155,2.155,0,0,1,4-1.109l.849,1.416"
                        transform="translate(1.749 -0.5)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1049"
                        data-name="Path 1049"
                        d="M14.039,6.379V2.655a2.155,2.155,0,0,0-4-1.109L9.187,2.962"
                        transform="translate(0.585 -0.5)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1050"
                        data-name="Path 1050"
                        d="M16.812,5.5,9.5,7.75a4.5,4.5,0,0,1,4.5,4.5h5.625a4.5,4.5,0,0,1,4.5-4.5Z"
                        transform="translate(0.624 0.125)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_7"
                        data-name="Ellipse 7"
                        cx="1.125"
                        cy="1.125"
                        r="1.125"
                        transform="translate(16.311 7.874)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1051"
                        data-name="Path 1051"
                        d="M18.5,6.74V6.129a3.628,3.628,0,0,1,6.693-1.943l6.72,10.6"
                        transform="translate(1.749 -0.25)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <line
                        id="Line_3"
                        data-name="Line 3"
                        y1="6.187"
                        transform="translate(20.249 12.374)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1052"
                        data-name="Path 1052"
                        d="M14.99,6.74V6.129A3.628,3.628,0,0,0,8.3,4.186l-6.721,10.6"
                        transform="translate(-0.366 -0.25)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        y1="6.187"
                        transform="translate(14.624 12.374)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </g>
                  </g>
                </svg>
                <div className="wbox-cont">
                  <div className="rel">
                    <div className="xx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                      >
                        <g
                          id="Group_259"
                          data-name="Group 259"
                          transform="translate(-1077 -2920)"
                        >
                          <g
                            id="Ellipse_186"
                            data-name="Ellipse 186"
                            transform="translate(1077 2920)"
                            fill="#fff"
                            stroke="#529a81"
                            strokeWidth={1}
                          >
                            <circle cx={15} cy={15} r={15} stroke="none" />
                            <circle cx={15} cy={15} r="14.5" fill="none" />
                          </g>
                          <g
                            id="Group_254"
                            data-name="Group 254"
                            transform="translate(17.092 -25.908)"
                          >
                            <line
                              id="Line_5"
                              data-name="Line 5"
                              x1="8.817"
                              y2="8.817"
                              transform="translate(1070.5 2956.5)"
                              fill="none"
                              stroke="#529a81"
                              strokeLinecap="round"
                              strokeWidth={1}
                            />
                            <line
                              id="Line_6"
                              data-name="Line 6"
                              x2="8.817"
                              y2="8.817"
                              transform="translate(1070.5 2956.5)"
                              fill="none"
                              stroke="#529a81"
                              strokeLinecap="round"
                              strokeWidth={1}
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
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
                      <a href="#" className="link-more">
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
              </div>
            </div>
            <div className="pin-icon " style={{ left: 150, bottom: 150 }}>
              <div className="rel">
                <svg
                  className="iconpin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36.273"
                  height="27.273"
                  viewBox="0 0 36.273 27.273"
                >
                  <g
                    id="Group_240"
                    data-name="Group 240"
                    transform="translate(0.155 0.155)"
                  >
                    <g
                      id="Group_241"
                      data-name="Group 241"
                      transform="translate(0.545 0.545)"
                    >
                      <circle
                        id="Ellipse_3"
                        data-name="Ellipse 3"
                        cx="7.312"
                        cy="7.312"
                        r="7.312"
                        transform="translate(0 11.249)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_4"
                        data-name="Ellipse 4"
                        cx="7.312"
                        cy="7.312"
                        r="7.312"
                        transform="translate(20.249 11.249)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_5"
                        data-name="Ellipse 5"
                        cx="5.062"
                        cy="5.062"
                        r="5.062"
                        transform="translate(2.25 13.499)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_6"
                        data-name="Ellipse 6"
                        cx="5.062"
                        cy="5.062"
                        r="5.062"
                        transform="translate(22.498 13.499)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1048"
                        data-name="Path 1048"
                        d="M18.5,6.379V2.655a2.155,2.155,0,0,1,4-1.109l.849,1.416"
                        transform="translate(1.749 -0.5)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1049"
                        data-name="Path 1049"
                        d="M14.039,6.379V2.655a2.155,2.155,0,0,0-4-1.109L9.187,2.962"
                        transform="translate(0.585 -0.5)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1050"
                        data-name="Path 1050"
                        d="M16.812,5.5,9.5,7.75a4.5,4.5,0,0,1,4.5,4.5h5.625a4.5,4.5,0,0,1,4.5-4.5Z"
                        transform="translate(0.624 0.125)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <circle
                        id="Ellipse_7"
                        data-name="Ellipse 7"
                        cx="1.125"
                        cy="1.125"
                        r="1.125"
                        transform="translate(16.311 7.874)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1051"
                        data-name="Path 1051"
                        d="M18.5,6.74V6.129a3.628,3.628,0,0,1,6.693-1.943l6.72,10.6"
                        transform="translate(1.749 -0.25)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <line
                        id="Line_3"
                        data-name="Line 3"
                        y1="6.187"
                        transform="translate(20.249 12.374)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <path
                        id="Path_1052"
                        data-name="Path 1052"
                        d="M14.99,6.74V6.129A3.628,3.628,0,0,0,8.3,4.186l-6.721,10.6"
                        transform="translate(-0.366 -0.25)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        y1="6.187"
                        transform="translate(14.624 12.374)"
                        fill="none"
                        stroke="#529a81"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </g>
                  </g>
                </svg>
                <div className="wbox-cont">
                  <div className="rel">
                    <div className="xx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                      >
                        <g
                          id="Group_259"
                          data-name="Group 259"
                          transform="translate(-1077 -2920)"
                        >
                          <g
                            id="Ellipse_186"
                            data-name="Ellipse 186"
                            transform="translate(1077 2920)"
                            fill="#fff"
                            stroke="#529a81"
                            strokeWidth={1}
                          >
                            <circle cx={15} cy={15} r={15} stroke="none" />
                            <circle cx={15} cy={15} r="14.5" fill="none" />
                          </g>
                          <g
                            id="Group_254"
                            data-name="Group 254"
                            transform="translate(17.092 -25.908)"
                          >
                            <line
                              id="Line_5"
                              data-name="Line 5"
                              x1="8.817"
                              y2="8.817"
                              transform="translate(1070.5 2956.5)"
                              fill="none"
                              stroke="#529a81"
                              strokeLinecap="round"
                              strokeWidth={1}
                            />
                            <line
                              id="Line_6"
                              data-name="Line 6"
                              x2="8.817"
                              y2="8.817"
                              transform="translate(1070.5 2956.5)"
                              fill="none"
                              stroke="#529a81"
                              strokeLinecap="round"
                              strokeWidth={1}
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
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
                      <a href="#" className="link-more">
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
              </div>
            </div>
          </div>
        </div>
        {/*查看圖表才出現*/}
        <div className="chart-area">
          <div className="main-box">
            <div className="chart-wbg">
              <div className="ovf-mb">
                <img src={chartImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sumap;
