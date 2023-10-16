import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import abmapImg from 'image/abmap.png';

import { EnterState } from 'types/home';
import { tabList } from 'data/home/content';

interface AboutProps {
  enter: EnterState;
}

const About = (props: AboutProps) => {
  const { enter } = props;

  useEffect(() => {}, []);

  return (
    <>
      <section className={`s2-about ${enter.s2 ? 'vivi' : ''}`}>
        <div className="main-box">
          <div className="leftbox">
            <div className="mapimg">
              <div className="yel-dash">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={475}
                  height={473}
                  viewBox="0 0 475 473"
                >
                  <g
                    id="Ellipse_187"
                    data-name="Ellipse 187"
                    fill="none"
                    stroke="#d5b943"
                    strokeWidth={1}
                    strokeDasharray={5}
                  >
                    <ellipse
                      cx="237.5"
                      cy="236.5"
                      rx="237.5"
                      ry="236.5"
                      stroke="none"
                    />
                    <ellipse
                      cx="237.5"
                      cy="236.5"
                      rx={237}
                      ry={236}
                      fill="none"
                    />
                  </g>
                </svg>
              </div>
              <img src={abmapImg} alt="綠島地圖" />
              {tabList.map((v) => {
                const { id, style, title, subtitle, link } = v;
                return (
                  <Link
                    key={id}
                    to={`/${link}`}
                    className={`ciritem cir0${style}`}
                  >
                    <div className="txt">
                      <p>{title}</p>
                      <span>
                        {subtitle[0]}
                        <br />
                        {subtitle[1]}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="rightbox">
            <h2>ABOUT</h2>
            <p>
              綠島是離島中的第四大島，受到黑潮主流的影響，孕育出了豐富的珊瑚礁生態。珊瑚礁生態系支持了綠島早期的漁業活動，以及近年的觀光活動。觀光人數日漸增加再加上氣候變遷的不可遇測性，使得需要長期依靠臺灣本島補給的綠島，面對人為及自然的衝擊的脆弱度增加。
              <br />
              <br />
              在目前的環境下綠島是否能永續發展，需要依靠長期的社會及生態資料的收集及觀測，藉由分析長期的資料才能知曉。因此本計畫將透過盤點社會生態議題及進行環境及生態觀測，建置綠島社會生態長期觀測資料庫，進行資料倉儲並開放分享，建立起一個平台。
              <br />
              <br />
              藉由這個平台，大家可以進行研究、教育及議題的討論，找出集體共識，最終找出綠島永續發展的可執行政策。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
