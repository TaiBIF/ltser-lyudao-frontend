import { Link } from 'react-router-dom';

import Banner from 'components/Banner';
import Breadcrumb from 'components/Breadcrumb';

import { BannerData } from 'types/common';

import bannerImg from 'image/literature_bn.png';

const DataCatalog = () => {
  const bannerData: BannerData = {
    title: '資料目錄',
    en: ['DataCatalog'],
    maskImg: true,
    bgImg: bannerImg,
  };

  const catalogList = [
    {
      type: '生態觀測',
      name: '耳石',
      link: '/site-data/ecological-observation/native/otolith',
      description: '',
    },
    {
      type: '生態觀測',
      name: '珊瑚礁魚類多樣性與群聚',
      link: '/site-data/ecological-observation/native/fish-div',
      description:
        '藉由對珊瑚礁魚類族群的調查，了解其群聚現況並提升生態系之保育，以達到綠島珊瑚礁生態系及珊瑚礁魚類與漁業的資源永續。',
    },
    {
      type: '生態觀測',
      name: '珊瑚多樣性',
      link: '/site-data/ecological-observation/native/coral-div',
      description:
        '藉由本計畫的長期監測珊瑚礁的群聚及白化的觀測，了解珊瑚礁群聚的變化，作為未來綠島海域經營管理的參考依據。',
    },
    {
      type: '生態觀測',
      name: '珊瑚入添',
      link: '/site-data/ecological-observation/native/rec-div',
      description:
        '藉由本計畫的長期監測珊瑚礁的群聚及白化的觀測，了解珊瑚礁群聚的變化，作為未來綠島海域經營管理的參考依據。',
    },
    {
      type: '生態觀測',
      name: '珊瑚多樣性',
      link: '/site-data/ecological-observation/native/coral-bleach',
      description:
        '藉由本計畫的長期監測珊瑚礁的群聚及白化的觀測，了解珊瑚礁群聚的變化，作為未來綠島海域經營管理的參考依據。',
    },
    {
      type: '生態觀測',
      name: '珊瑚群聚',
      link: '/site-data/ecological-observation/native/coral-comm',
      description:
        '藉由本計畫的長期監測珊瑚礁的群聚及白化的觀測，了解珊瑚礁群聚的變化，作為未來綠島海域經營管理的參考依據。',
    },
    {
      type: '生態觀測',
      name: '底棲動物',
      link: '/site-data/ecological-observation/native/zoobenthos',
      description:
        '本計畫關注貝類群聚在資源變化，及社區及遊客對貝類的利用方式，提供後續對貝類資源管理參考的依據。',
    },
    {
      type: '生態觀測',
      name: '陸域植物',
      link: '/site-data/ecological-observation/native/plant',
      description:
        '本計畫將針對2007年在綠島進行的全島維管束植物調查樣區進行複查，比較155個樣區15年來的植物社會之改變。並選取具代表性的25個樣區進行每季的監測。同時追蹤列為IUCN保育等級易危(NT)以上的物種族群現況，並予以拍照記錄。',
    },
    {
      type: '生態觀測',
      name: '陸域聲景 - 聲音指數',
      link: '/site-data/ecological-observation/native/terre-sound-index',
      description:
        '陸域聲景的部分將設置超音波及可聽音錄音機，進行監測。並利用人工智慧模型協助辨識物種叫聲，記錄陸域生物的種類。',
    },
    {
      type: '生態觀測',
      name: '陸域聲景 - 鳥音辨識',
      link: '/site-data/ecological-observation/native/bird-net-sound',
      description:
        '陸域聲景的部分將設置超音波及可聽音錄音機，進行監測。並利用人工智慧模型協助辨識物種叫聲，記錄陸域生物的種類。',
    },
    {
      type: '生態觀測',
      name: '陸域聲景 - 生物辨識',
      link: '/site-data/ecological-observation/native/bio-sound',
      description:
        '陸域聲景的部分將設置超音波及可聽音錄音機，進行監測。並利用人工智慧模型協助辨識物種叫聲，記錄陸域生物的種類。',
    },
    {
      type: '生態觀測',
      name: '海域聲學',
      link: '/site-data/ecological-observation/native/ocean-sound-index',
      description:
        '本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。',
    },
    {
      type: '生態觀測',
      name: '溪流生物',
      link: '/site-data/ecological-observation/native/aquaticfauna',
      description: '',
    },
    {
      type: '環境觀測',
      name: '海域水質',
      link: '/site-data/environmental-observation/water',
      description:
        '本計畫除了增加水質測站外，也將以總菌數，包含大腸桿菌腸、球菌及弧菌進行海域健康監測。',
    },
    {
      type: '環境觀測',
      name: '氣象觀測',
      link: '/site-data/environmental-observation/weather',
      description:
        '收集與彙整目氣象局及綠島航空站已有綠島陸域與海域相關環境觀測資料，並配合中研一號工作小艇進行近岸海域水質監測。',
    },
    {
      type: '環境觀測',
      name: '海洋觀測',
      link: '/site-data/environmental-observation/sea-temperature',
      description:
        '收集與彙整目氣象局及綠島航空站已有綠島陸域與海域相關環境觀測資料，並配合中研一號工作小艇進行近岸海域水質監測。',
    },
    {
      type: '環境觀測',
      name: '棲地評估',
      link: '/site-data/environmental-observation/habitat',
      description:
        '收集與彙整目氣象局及綠島航空站已有綠島陸域與海域相關環境觀測資料，並配合中研一號工作小艇進行近岸海域水質監測。',
    },
    {
      type: '環境觀測',
      name: '溪流水質',
      link: '/site-data/environmental-observation/stream',
      description:
        '收集與彙整目氣象局及綠島航空站已有綠島陸域與海域相關環境觀測資料，並配合中研一號工作小艇進行近岸海域水質監測。',
    },
    {
      type: '環境觀測',
      name: '海氣象浮標 - 即時資料',
      link: '/site-data/environmental-observation/buoy-realtime',
      description: '',
    },
    {
      type: '環境觀測',
      name: '海氣象浮標 - 歷史資料',
      link: '/site-data/environmental-observation/buoy-historical',
      description: '',
    },
    {
      type: '社會觀測',
      name: '土地利用',
      link: '/site-data/social-observation/socioeconomic-data/land-usage',
      description:
        '透過研讀與彙整文史與研究資料、分析國土利用與都市計畫的變遷，並了解當地獨特的自然與歷史地景、觀光與民生重要設施，我們將知悉綠島土地利用的時空變化，並對綠島人和自然的關係如何演變有更進一步的認知。',
    },
    {
      type: '社會觀測',
      name: '海域利用',
      link: '/site-data/social-observation/socioeconomic-data/ocean-usage',
      description:
        '在這項研究中，我們將透過研讀和彙整文史資料和研究資料，並分析海域利用的變遷，以深入了解綠島居民和遊客的活動以及海洋自然資源之關係的時空演變。',
    },
    {
      type: '社會觀測',
      name: '休閒漁業',
      link: '/site-data/social-observation/socioeconomic-data/fishing',
      description:
        '本項目將透過問卷調查與配合海保署iOcean讓釣客主動回報的方式，我們可以得到綠島珊瑚礁生態系中的主要魚獲資料。可透過這些資訊，配合其他生態與人類活動和人為干擾數據來了解人為活動對於珊瑚礁漁業的影響，同時了解漁業活動和水下魚類資源的關聯。',
    },
    {
      type: '社會觀測',
      name: '議題盤點',
      link: '/site-data/social-observation/social-interview-data',
      description:
        '此研究收集現有的新聞報導和政府議案，並運用文本分析方法，探究與綠島有關的議題。除此之外，我們進一步進行權益關係人的盤點，並透過深度訪談，以不同角度觀點，深入探討綠島的現況、變遷、困難，以及人們對它的期望。透過這些方法，我們將提供一個全面的綠島議題總覽，有助於更好地理解這個特殊地區的現狀與需求。',
    },
  ];

  const typeCount = catalogList.reduce<Record<string, number>>((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <div className="innbox">
        <Banner data={bannerData} />
        <Breadcrumb />
        <div className="contentbox">
          <div className="main-box">
            <div className="terms-editer">
              <p>
                本頁彙整 LTSER
                綠島站長期社會生態核心觀測資料。若您需要完整觀測資料，請先登入會員，並點擊下方表格的對應觀測項目頁面，使用「資料下載」或「物種名錄下載」功能進行取得。使用前請先詳閱本網站{' '}
                <Link to="/privacy-policy">隱私權政策</Link> 與{' '}
                <Link to="/terms">使用者條款</Link>
                ，並依規範使用。
              </p>
              <div className="data-catalog-table-area">
                <div className="ovhbox">
                  <table
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    className="table-style1"
                  >
                    <tbody>
                      <tr>
                        <td>類型</td>
                        <td>資料集名稱</td>
                      </tr>
                      {catalogList.map((item, index) => (
                        <tr key={`${item.type}-${item.name}-${index}`}>
                          {index === 0 ||
                          catalogList[index - 1].type !== item.type ? (
                            <td
                              rowSpan={typeCount[item.type]}
                              style={{
                                verticalAlign: 'top',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {item.type}
                            </td>
                          ) : null}
                          <td>
                            <div>
                              <Link to={item.link}>{item.name}</Link>
                              <p>{item.description}</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCatalog;
