import { TypeItem } from 'types/utils';
import { AboutItem, AttachmentItem, AttachmentNameItem } from 'types/about';

import abImg from 'image/abimg.png';
import abDemoImg1 from 'image/ab-demo1.png';
import abDemoImg2 from 'image/ab-demo2.png';

export const aboutTypeList: TypeItem[] = [
  {
    id: 1,
    title: '生態觀測',
  },
  {
    id: 2,
    title: '環境觀測',
  },
  {
    id: 3,
    title: '社會觀測',
  },
];

export const attachmentList: AttachmentItem[] = [
  {
    id: 1,
    type: 'text',
    content: `綠島以獨特的島嶼生態系吸引大批觀光客前來，交通船是前往島上的唯二選擇。當航行經過時，船隻活動的噪音足以蓋過其他的聲音。`,
  },
  {
    id: 2,
    type: 'image',
    content: abDemoImg1,
  },
  {
    id: 3,
    type: 'image',
    content: abDemoImg2,
  },
  {
    id: 4,
    type: 'text',
    content: `綠島以獨特的島嶼生態系吸引大批觀光客前來，交通船是前往島上的唯二選擇。當航行經過時，船隻活動的噪音足以蓋過其他的聲音。`,
  },
  {
    id: 5,
    type: 'image',
    content: abDemoImg1,
  },
  {
    id: 6,
    type: 'image',
    content: abDemoImg2,
  },
];

export const attachmentNameList: AttachmentNameItem[] = [
  {
    id: 1,
    title: '船隻聲音1',
    list: [1, 2, 3],
  },
  {
    id: 2,
    title: '船隻聲音2',
    list: [4, 5, 6],
  },
  {
    id: 3,
    title: '船隻聲音3',
    list: [4],
  },
  {
    id: 4,
    title: '船隻聲音4',
    list: [1, 6],
  },
];

export const aboutList: AboutItem[] = [
  {
    id: 'ecological-observation-article1-name',
    type: 1,
    name: '陸域維管束植物社會監測',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    attachmentName: [1, 2],
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'ecological-observation-article2-name',
    type: 1,
    name: '珊瑚多樣性、珊瑚礁群聚、入添與白化觀測',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'ecological-observation-article3-name',
    type: 1,
    name: '綠島海洋水域以及珊瑚健康指標觀測',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'ecological-observation-article4-name',
    type: 1,
    name: '珊瑚礁魚類多樣性與群聚',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'ecological-observation-article5-name',
    type: 1,
    name: '珊瑚礁魚類時空變化',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'ecological-observation-article6-name',
    type: 1,
    name: '珊瑚礁水下聲景調查',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'ecological-observation-article7-name',
    type: 1,
    name: '陸域聲景調查',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'ecological-observation-article8-name',
    type: 1,
    name: '潮間帶貝類多樣性與群聚特性',
    content: `珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'environmental-observation-article1-name',
    type: 2,
    name: '休閒漁業調查',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'environmental-observation-article2-name',
    type: 2,
    name: '土地利用',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'environmental-observation-article3-name',
    type: 2,
    name: '海域利用',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'environmental-observation-article4-name',
    type: 2,
    name: '經濟活動',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'environmental-observation-article5-name',
    type: 2,
    name: '議題盤點',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'social-observation-article1-name',
    type: 3,
    name: '休閒漁業調查',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'social-observation-article2-name',
    type: 3,
    name: '土地利用',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'social-observation-article3-name',
    type: 3,
    name: '海域利用',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'social-observation-article4-name',
    type: 3,
    name: '經濟活動',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
  {
    id: 'social-observation-article5-name',
    type: 3,
    name: '議題盤點',
    content: `...`,
    image: abImg,
    created: '2023-05-26',
    modified: '2023-05-26',
  },
];
