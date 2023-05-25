import React from 'react';

import maskGreenImg from 'image/maskgreen.png';

import { BannerData } from 'types/common';

const Banner = ({ data }: { data: BannerData }) => {
  const { title, en, maskImg, bgImg } = data;

  return (
    <>
      <div className="bn-area">
        <div className="bntitleboxarea">
          <div className="main-box">
            <div className="bntitle">
              <h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                >
                  <g
                    id="Ellipse_201"
                    data-name="Ellipse 201"
                    fill="none"
                    stroke="#e8d06a"
                    strokeWidth={4}
                  >
                    <circle cx={9} cy={9} r={9} stroke="none" />
                    <circle cx={9} cy={9} r={7} fill="none" />
                  </g>
                </svg>
                {en.map((v, i) => {
                  const isLastItem = i === en.length - 1;
                  return (
                    <React.Fragment key={i}>
                      {v}
                      {!isLastItem && <br />}
                    </React.Fragment>
                  );
                })}
              </h2>
              <h3>{title}</h3>
            </div>
          </div>
        </div>
        {maskImg && (
          <div className="mask-area">
            <img src={maskGreenImg} alt="maskgreen" />
          </div>
        )}
        {/*banner替換請用 background-image: url("");*/}
        {bgImg && (
          <div className="pic-box" style={{ background: `url(${bgImg})` }} />
        )}
      </div>
      {/*banner替換請用 background-image: url("");*/}
    </>
  );
};

export default Banner;
