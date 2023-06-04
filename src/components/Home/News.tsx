import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EnterState } from 'types/home';
import { NewsItem, NewsFilterState } from 'types/news';

import { newsList, newsTypeList } from 'data/news';

interface NewsProps {
  enter: EnterState;
}

function News(props: NewsProps) {
  const { enter } = props;
  const [active, setActive] = useState<NewsFilterState>({
    type: 0,
    startDate: '',
    endDate: '',
  });
  const [news, setNews] = useState<NewsItem[]>([]);

  const isAllType = active.type === 0;

  const handleTypeClick = (id: number | string) => {
    setActive({ ...active, type: id });
  };

  useEffect(() => {
    if (isAllType) {
      setNews([...newsList.slice(0, 3)]);
    } else {
      const matchActiveType = newsList.filter((v) => v.type === active.type);
      setNews([...matchActiveType]);
    }
  }, [active.type]);

  return (
    <>
      <section className={`s3-news ${enter.s3 ? 'vivi' : ''}`}>
        <div className="main-box">
          <div className="leftbox">
            <h2>NEWS</h2>
            <div className="tab-area">
              <ul>
                {/*目前選取的給class now*/}
                {/*目前預設4種顏色 無限新增類別的話可能要開後台填顏色*/}
                {newsTypeList.map((v) => {
                  const { id, title, colorClass } = v;
                  return (
                    <li
                      key={id}
                      className={`${
                        active.type === id ? 'now' : ''
                      } ${colorClass}`}
                      onClick={() => {
                        if (id) {
                          handleTypeClick(id);
                        }
                      }}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="news-list">
              <ul>
                {news.map((v) => {
                  const { id, type, title, content, modified } = v;
                  const matchType = newsTypeList.find((v) => v.id === type);
                  return (
                    <li key={id}>
                      <Link to={`/news/${id}`}>
                        <div className="cat-date">
                          <div className={`category ${matchType?.colorClass}`}>
                            {matchType?.title}
                          </div>
                          <div className="date">{modified}</div>
                        </div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="align-right">
              <a href="/" className="link-more">
                <p>查看更多</p>
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
                      stroke="#fff"
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
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth={1}
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="rightbox">
            <div className="picbox2">
              <div className="pic1" />
              <div className="pic2" />
            </div>
            <div className="rotate-cir">
              <div className="rel">
                <svg
                  className="out-cir"
                  id="Group_224"
                  data-name="Group 224"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="306.519"
                  height="306.548"
                  viewBox="0 0 306.519 306.548"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_13"
                        data-name="Rectangle 13"
                        width="306.518"
                        height="306.548"
                        fill="#529a81"
                      />
                    </clipPath>
                  </defs>
                  <g id="Group_7" data-name="Group 7">
                    <g
                      id="Group_6"
                      data-name="Group 6"
                      clipPath="url(#clip-path)"
                    >
                      <text
                        id="L"
                        transform="translate(153.475 21.083) rotate(4.17)"
                        fill="#529a81"
                        fontSize={24}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          L
                        </tspan>
                      </text>
                      <text
                        id="T"
                        transform="translate(170.483 24.131) rotate(12.148)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          T
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <text
                    id="S"
                    transform="translate(191.585 28.65) rotate(22.136)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      S
                    </tspan>
                  </text>
                  <text
                    id="E"
                    transform="translate(213.335 37.569) rotate(32.514)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      E
                    </tspan>
                  </text>
                  <text
                    id="R"
                    transform="translate(233.172 50.189) rotate(43.228)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      R
                    </tspan>
                  </text>
                  <text
                    id="_"
                    data-name=" "
                    transform="translate(259 61.634) rotate(51.003)"
                    fill="#529a81"
                    fontSize={16}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      {' '}
                    </tspan>
                  </text>
                  <text
                    id="L-2"
                    data-name="L"
                    transform="translate(259.491 74.601) rotate(57.551)"
                    fill="#529a81"
                    fontSize={24}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      L
                    </tspan>
                  </text>
                  <text
                    id="Y"
                    transform="matrix(0.407, 0.913, -0.913, 0.407, 267.269, 90.051)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      Y
                    </tspan>
                  </text>
                  <g id="Group_9" data-name="Group 9">
                    <g
                      id="Group_8"
                      data-name="Group 8"
                      clipPath="url(#clip-path)"
                    >
                      <text
                        id="U"
                        transform="matrix(0.228, 0.974, -0.974, 0.228, 276.854, 111.497)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          U
                        </tspan>
                      </text>
                      <text
                        id="D"
                        transform="translate(282.58 136.241) rotate(87.959)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          D
                        </tspan>
                      </text>
                      <text
                        id="A"
                        transform="translate(283.339 161.626) rotate(98.62)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          A
                        </tspan>
                      </text>
                      <text
                        id="O"
                        transform="matrix(-0.34, 0.94, -0.94, -0.34, 279.926, 184.913)"
                        fill="#529a81"
                        fontSize={26}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          O
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <text
                    id="_2"
                    data-name=" "
                    transform="translate(278.856 215.028) rotate(118.165)"
                    fill="#529a81"
                    fontSize={16}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      {' '}
                    </tspan>
                  </text>
                  <text
                    id="L-3"
                    data-name="L"
                    transform="translate(267.1 220.511) rotate(124.73)"
                    fill="#529a81"
                    fontSize={24}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      L
                    </tspan>
                  </text>
                  <text
                    id="T-2"
                    data-name="T"
                    transform="matrix(-0.678, 0.735, -0.735, -0.678, 255.848, 233.565)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      T
                    </tspan>
                  </text>
                  <text
                    id="S-2"
                    data-name="S"
                    transform="translate(241.236 249.462) rotate(142.523)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      S
                    </tspan>
                  </text>
                  <text
                    id="E-2"
                    data-name="E"
                    transform="translate(222.557 263.709) rotate(152.857)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      E
                    </tspan>
                  </text>
                  <g id="Group_11" data-name="Group 11">
                    <g
                      id="Group_10"
                      data-name="Group 10"
                      clipPath="url(#clip-path)"
                    >
                      <text
                        id="R-2"
                        data-name="R"
                        transform="translate(201.597 274.475) rotate(163.701)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          R
                        </tspan>
                      </text>
                      <text
                        id="_3"
                        data-name=" "
                        transform="translate(178.619 290.928) rotate(171.561)"
                        fill="#529a81"
                        fontSize={16}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          {' '}
                        </tspan>
                      </text>
                      <text
                        id="L-4"
                        data-name="L"
                        transform="matrix(-0.999, 0.033, -0.033, -0.999, 167.199, 284.756)"
                        fill="#529a81"
                        fontSize={24}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          L
                        </tspan>
                      </text>
                      <text
                        id="Y-2"
                        data-name="Y"
                        transform="translate(149.973 283.601) rotate(-173.613)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          Y
                        </tspan>
                      </text>
                      <text
                        id="U-2"
                        data-name="U"
                        transform="translate(126.609 281.012) rotate(-162.811)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          U
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <text
                    id="D-2"
                    data-name="D"
                    transform="translate(102.364 273.441) rotate(-151.574)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      D
                    </tspan>
                  </text>
                  <text
                    id="A-2"
                    data-name="A"
                    transform="matrix(-0.775, -0.632, 0.632, -0.775, 80.113, 261.216)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      A
                    </tspan>
                  </text>
                  <text
                    id="O-2"
                    data-name="O"
                    transform="matrix(-0.639, -0.769, 0.769, -0.639, 61.778, 246.419)"
                    fill="#529a81"
                    fontSize={26}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      O
                    </tspan>
                  </text>
                  <text
                    id="_4"
                    data-name=" "
                    transform="matrix(-0.522, -0.853, 0.853, -0.522, 36.392, 230.319)"
                    fill="#529a81"
                    fontSize={16}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      {' '}
                    </tspan>
                  </text>
                  <text
                    id="L-5"
                    data-name="L"
                    transform="matrix(-0.421, -0.907, 0.907, -0.421, 37.574, 217.361)"
                    fill="#529a81"
                    fontSize={24}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      L
                    </tspan>
                  </text>
                  <g id="Group_13" data-name="Group 13">
                    <g
                      id="Group_12"
                      data-name="Group 12"
                      clipPath="url(#clip-path)"
                    >
                      <text
                        id="T-3"
                        data-name="T"
                        transform="translate(31.986 201.029) rotate(-106.877)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          T
                        </tspan>
                      </text>
                      <text
                        id="S-3"
                        data-name="S"
                        transform="translate(25.708 180.422) rotate(-96.928)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          S
                        </tspan>
                      </text>
                      <text
                        id="E-3"
                        data-name="E"
                        transform="matrix(0.058, -0.998, 0.998, 0.058, 22.938, 157.057)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          E
                        </tspan>
                      </text>
                      <text
                        id="R-3"
                        data-name="R"
                        transform="matrix(0.243, -0.97, 0.97, 0.243, 24.267, 133.588)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          R
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <text
                    id="_5"
                    data-name=" "
                    transform="translate(21.703 105.409) rotate(-68.04)"
                    fill="#529a81"
                    fontSize={16}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      {' '}
                    </tspan>
                  </text>
                  <text
                    id="L-6"
                    data-name="L"
                    transform="translate(32.802 98.686) rotate(-61.446)"
                    fill="#529a81"
                    fontSize={24}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      L
                    </tspan>
                  </text>
                  <text
                    id="Y-3"
                    data-name="Y"
                    transform="translate(42.532 84.422) rotate(-53.058)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      Y
                    </tspan>
                  </text>
                  <text
                    id="U-3"
                    data-name="U"
                    transform="translate(56.654 65.605) rotate(-42.353)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      U
                    </tspan>
                  </text>
                  <text
                    id="D-3"
                    data-name="D"
                    transform="matrix(0.855, -0.518, 0.518, 0.855, 75.466, 48.548)"
                    fill="#529a81"
                    fontSize={27}
                    fontFamily="ArialMT, Arial"
                  >
                    <tspan x={0} y={0}>
                      D
                    </tspan>
                  </text>
                  <g id="Group_15" data-name="Group 15">
                    <g
                      id="Group_14"
                      data-name="Group 14"
                      clipPath="url(#clip-path)"
                    >
                      <text
                        id="A-3"
                        data-name="A"
                        transform="matrix(0.937, -0.349, 0.349, 0.937, 97.25, 35.522)"
                        fill="#529a81"
                        fontSize={27}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          A
                        </tspan>
                      </text>
                      <text
                        id="O-3"
                        data-name="O"
                        transform="translate(119.236 27.212) rotate(-9.183)"
                        fill="#529a81"
                        fontSize={26}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          O
                        </tspan>
                      </text>
                      <text
                        id="_6"
                        data-name=" "
                        transform="translate(146.011 13.525) rotate(-0.998)"
                        fill="#529a81"
                        fontSize={16}
                        fontFamily="ArialMT, Arial"
                      >
                        <tspan x={0} y={0}>
                          {' '}
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
                <svg
                  className="centerview"
                  id="Group_223"
                  data-name="Group 223"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="153.087"
                  height="91.301"
                  viewBox="0 0 153.087 91.301"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_134"
                        data-name="Rectangle 134"
                        width="153.087"
                        height="91.3"
                        fill="#529a81"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_222"
                    data-name="Group 222"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      id="Path_1022"
                      data-name="Path 1022"
                      d="M39.219,45.1c-14.466,0-26.236,12.562-26.236,28s11.77,28,26.236,28,26.236-12.562,26.236-28-11.769-28-26.236-28m0,52.417c-12.488,0-22.648-10.952-22.648-24.415s10.16-24.414,22.648-24.414S61.867,59.641,61.867,73.1,51.707,97.517,39.219,97.517"
                      transform="translate(-5.219 -18.13)"
                      fill="#529a81"
                    />
                    <path
                      id="Path_1023"
                      data-name="Path 1023"
                      d="M44.438,59.021c-10.185,0-18.472,8.828-18.472,19.678a1.794,1.794,0,0,0,3.588,0c0-8.872,6.677-16.09,14.884-16.09a1.794,1.794,0,0,0,0-3.588"
                      transform="translate(-10.438 -23.727)"
                      fill="#529a81"
                    />
                    <path
                      id="Path_1024"
                      data-name="Path 1024"
                      d="M181.507,45.1c-14.466,0-26.236,12.562-26.236,28s11.77,28,26.236,28,26.236-12.562,26.236-28-11.77-28-26.236-28m0,52.417c-12.488,0-22.648-10.952-22.648-24.415s10.16-24.414,22.648-24.414S204.155,59.641,204.155,73.1s-10.16,24.415-22.648,24.415"
                      transform="translate(-62.419 -18.13)"
                      fill="#529a81"
                    />
                    <path
                      id="Path_1025"
                      data-name="Path 1025"
                      d="M186.726,59.021c-10.185,0-18.472,8.828-18.472,19.678a1.794,1.794,0,0,0,3.588,0c0-8.872,6.677-16.09,14.884-16.09a1.794,1.794,0,1,0,0-3.588"
                      transform="translate(-67.639 -23.727)"
                      fill="#529a81"
                    />
                    <path
                      id="Path_1026"
                      data-name="Path 1026"
                      d="M123.369,46.3a7.148,7.148,0,1,0,6.778,7.138,6.973,6.973,0,0,0-6.778-7.138m0,10.689a3.571,3.571,0,1,1,3.19-3.55,3.389,3.389,0,0,1-3.19,3.55"
                      transform="translate(-46.87 -18.614)"
                      fill="#529a81"
                    />
                    <path
                      id="Path_1027"
                      data-name="Path 1027"
                      d="M142.8,28.968,120.4,5.029c-.016-.017-.035-.029-.051-.045s-.029-.036-.047-.053A19.651,19.651,0,0,0,107.738,0C98.182,0,90.33,7.893,89.613,17.88a19,19,0,0,1-5.743-3.771,10.522,10.522,0,0,0-14.652,0,19,19,0,0,1-5.743,3.771C62.757,7.893,54.905,0,45.349,0a19.652,19.652,0,0,0-12.56,4.931c-.017.016-.03.036-.047.053s-.036.028-.051.045l-22.4,23.94A37.454,37.454,0,0,0,0,54.972C0,75,15.253,91.3,34,91.3c18.184,0,33.079-15.333,33.958-34.534H85.13C86.009,75.967,100.9,91.3,119.088,91.3c18.748,0,34-16.3,34-36.328a37.428,37.428,0,0,0-10.292-26M59.936,18.945a17.247,17.247,0,0,1-3.218.307h-.089a1.794,1.794,0,0,0,0,3.588h.089A21.732,21.732,0,0,0,71.69,16.709a6.937,6.937,0,0,1,9.708,0,21.728,21.728,0,0,0,14.972,6.131,1.794,1.794,0,0,0,0-3.588,17.244,17.244,0,0,1-3.219-.307c.209-8.506,6.669-15.357,14.586-15.357a15.867,15.867,0,0,1,10.1,3.956l12.206,13.047a31.884,31.884,0,0,0-10.956-1.946,32.745,32.745,0,0,0-23.339,9.948A18.218,18.218,0,0,1,83.87,23.464a10.522,10.522,0,0,0-14.652,0A18.218,18.218,0,0,1,57.34,28.592,32.748,32.748,0,0,0,34,18.644a31.884,31.884,0,0,0-10.957,1.946L35.25,7.544a15.868,15.868,0,0,1,10.1-3.956c7.917,0,14.378,6.851,14.587,15.357M85.13,53.178H67.958a37.6,37.6,0,0,0-7.723-21.289A22.048,22.048,0,0,0,71.69,26.064a6.937,6.937,0,0,1,9.708,0,22.04,22.04,0,0,0,11.453,5.825A37.6,37.6,0,0,0,85.13,53.178M34,87.712c-16.77,0-30.412-14.687-30.412-32.74C3.588,37.3,16.962,22.232,34,22.232c16.77,0,30.412,14.687,30.412,32.74S50.77,87.712,34,87.712m85.087,0c-16.769,0-30.412-14.687-30.412-32.74s13.643-32.74,30.412-32.74c16.975,0,30.412,14.949,30.412,32.74,0,18.053-13.643,32.74-30.412,32.74"
                      transform="translate(0 0)"
                      fill="#529a81"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
