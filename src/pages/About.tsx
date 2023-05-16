import React from 'react';

const About = () => {
  return (
    <>
      <div className="innbox">
        <div className="path">
          <div className="main-box">
            <div className="path-area">
              <a href="/" className="home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.633"
                  height="20.175"
                  viewBox="0 0 22.633 20.175"
                >
                  <g id="home" transform="translate(0.001 -27.797)">
                    <g
                      id="Group_5"
                      data-name="Group 5"
                      transform="translate(-0.001 27.798)"
                    >
                      <g
                        id="Group_4"
                        data-name="Group 4"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_25"
                          data-name="Path 25"
                          d="M22.391,35.766,11.663,27.911a.588.588,0,0,0-.695,0L.24,35.766a.588.588,0,0,0,.695.949l10.381-7.6,10.381,7.6a.588.588,0,0,0,.695-.949Z"
                          transform="translate(0.001 -27.798)"
                          fill="#888"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_7"
                      data-name="Group 7"
                      transform="translate(2.495 36.848)"
                    >
                      <g id="Group_6" data-name="Group 6">
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M73.506,232.543a.588.588,0,0,0-.588.588v9.36h-4.7v-5.109a2.94,2.94,0,0,0-5.881,0v5.109h-4.7v-9.36a.588.588,0,0,0-1.176,0v9.948a.588.588,0,0,0,.588.588h5.88a.588.588,0,0,0,.586-.542.442.442,0,0,0,0-.046v-5.7a1.764,1.764,0,0,1,3.529,0v5.7a.432.432,0,0,0,0,.045.588.588,0,0,0,.586.543h5.88a.588.588,0,0,0,.588-.588v-9.948A.588.588,0,0,0,73.506,232.543Z"
                          transform="translate(-56.452 -232.543)"
                          fill="#888"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <span> &gt; </span>
              <p>關於LTSER_綠島</p>
              <span> &gt; </span>
              <p>生態觀測</p>
              <span> &gt; </span>
              <p>珊瑚礁水下聲景調查</p>
            </div>
          </div>
        </div>
        <div className="contentbox">
          <div className="main-box">
            <div className="about-mainbox">
              <div className="leftbox">
                <div className="title-area">
                  <div className="ab-category">生態觀測</div>
                  <h2>珊瑚礁水下聲景調查</h2>
                </div>
                <p>
                  珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。
                </p>
              </div>
              <div className="rightbox">
                <div className="pic-area">
                  {/*上背景圖*/}
                  <div
                    className="img-area"
                    style={{ backgroundImage: 'url("image/abimg.png")' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*有其他內容的才有下面這塊*/}
        <div className="ab-otherbox">
          <div className="main-box">
            <div className="ab-item">
              <div className="titlebox">船隻聲音</div>
              <div className="editer-area">
                <p className="center marb_20">
                  綠島以獨特的島嶼生態系吸引大批觀光客前來，交通船是前往島上的唯二選擇。當航行經過時，船隻活動的噪音足以蓋過其他的聲音。
                </p>
                <div className="main-1280">
                  <img className="marb_20" src="image/ab-demo1.png" />
                  <img src="image/ab-demo2.png" />
                </div>
              </div>
            </div>
            <div className="ab-item">
              <div className="titlebox">船隻聲音</div>
              <div className="editer-area">
                <p className="center marb_20">
                  綠島以獨特的島嶼生態系吸引大批觀光客前來，交通船是前往島上的唯二選擇。當航行經過時，船隻活動的噪音足以蓋過其他的聲音。
                </p>
                <div className="main-1280">
                  <img className="marb_20" src="image/ab-demo1.png" />
                  <img src="image/ab-demo2.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
