import i18n from 'i18next';

import {
  AsideItem,
  EcoSearchItem,
  InterviewItem,
  CategoryItem,
  BookItem,
  LiteratureItem,
} from 'types/siteData';
import { FieldItem, ColItem, TypeItem } from 'types/utils';

import newsImg from 'image/newsubb.jpg';

const PAGE_NAME = 'data';
const COMPONENT_NAME = 'siteData';
const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

// ecoAsideList
// AsideItem[]
export const generateEcoAsideList = (): AsideItem[] => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.1`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.1_1`),
        link: 'otolith',
      },
    ],
  },
  {
    id: 2,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.2`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.2_1`),
        link: 'fish-div',
      },
    ],
  },
  {
    id: 3,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_1`),
        link: 'coral-div',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_2`),
        link: 'coral-rec',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_3`),
        link: 'coral-bleach',
      },
      {
        id: 4,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_4`),
        link: 'coral-comm',
      },
    ],
  },
  {
    id: 4,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.4`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.4_1`),
        link: 'zoobenthos',
      },
    ],
  },
  {
    id: 5,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.5`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.5_1`),
        link: 'plant',
      },
    ],
  },
  {
    id: 6,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6_1`),
        link: 'terre-sound-index',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6_2`),
        link: 'bird-net-sound',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6_3`),
        link: 'bio-sound',
      },
    ],
  },
  {
    id: 7,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.7`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.7_1`),
        link: 'ocean-sound-index',
      },
    ],
  },
  {
    id: 8,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.8`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.8_1`),
        link: 'aquaticfauna',
      },
    ],
  },
];

// envAsideList
// AsideItem[]
export const generateEnvAsideList = (): AsideItem[] => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.env.title.1`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.1_1`),
        link: 'water',
      },
    ],
  },
  {
    id: 2,
    title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_1`),
        link: 'weather',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_2`),
        link: 'sea-temperature',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_3`),
        link: 'habitat',
      },
      {
        id: 4,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_4`),
        link: 'stream',
      },
    ],
  },
];

// economyFishingAsideList
// AsideItem[]
export const generateEconomyFishingAsideList = (): AsideItem[] => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.economy.title.1`),
    link: 'fishing',
  },
  {
    id: 2,
    title: i18n.t(`${I18N_KEY_PREFIX}.economy.title.2`),
    link: 'social-interview-data',
  },
];

// economyAsideList
// AsideItem[]
export const generateEconomyDataAsideList = (): AsideItem[] => [
  {
    id: 1,
    title: '綠島時間表',
    link: 'memorabilia',
    list: [
      {
        id: 1,
        title: '時間表',
        link: 'memorabilia',
      },
    ],
  },
  {
    id: 2,
    title: '土地與海域利用',
    link: 'land-ocean-usage',
    list: [
      {
        id: 1,
        title: '土地利用',
        link: 'land-usage',
      },
      {
        id: 2,
        title: '海域利用',
        link: 'ocean-usage',
      },
      {
        id: 3,
        title: '綠島土地與海域利用的時節變化',
        link: 'temporal-variation',
      },
    ],
  },
  {
    id: 3,
    title: '外部資料介接',
    link: 'external-data',
    list: [
      {
        id: 1,
        title: '人口結構',
        link: 'population',
      },
      {
        id: 2,
        title: '產業結構',
        link: 'industry',
      },
    ],
  },
  {
    id: 4,
    title: '文史資料彙整',
    link: 'literature-data',
    list: [
      {
        id: 1,
        title: '書籍',
        link: 'books',
      },
      {
        id: 2,
        title: '研究文獻',
        link: 'researches',
      },
      {
        id: 2,
        title: '政府文獻',
        link: 'government',
      },
    ],
  },
];

export const layoutAsideList: AsideItem[] = [
  {
    id: 1,
    title: '建置中',
    link: 'social-economy-data',
  },
];

export const searchFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'text',
    title: 'site',
    label: '測站',
  },
  {
    id: 2,
    type: 'text',
    title: 'researcher',
    label: '調查者',
  },
  {
    id: 3,
    type: 'text',
    title: 'scientificName',
    label: '學名',
  },
  {
    id: 4,
    type: 'text',
    title: 'cnName',
    label: '中文名',
  },
  {
    id: 5,
    type: 'number',
    title: 'number',
    label: '數量',
  },
];

export const ecoSearchColList: ColItem[] = [
  {
    id: 'id',
    title: 'id',
    show: false,
  },
  {
    id: 'site',
    title: '測站',
    show: true,
  },
  {
    id: 'researcher',
    title: '調查者',
    show: true,
  },
  {
    id: 'scientificName',
    title: '學名',
    show: true,
  },
  {
    id: 'cnName',
    title: '中文名',
    show: true,
  },
  {
    id: 'number',
    title: '數量',
    show: true,
  },
];

export const ecoResultList: EcoSearchItem[] = [
  {
    id: 1,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 2,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 3,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 4,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 5,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 6,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
];

export const interviewList: InterviewItem[] = [
  {
    id: 1,
    date: '2023-04',
    tags: ['船舶', '公船', '飛機', '調降票價'],
    type: 1,
    image: newsImg,
    target: 1,
    title: 'issue-2023-1',
    content:
      '交通的話就是船舶部分，跟其實飛機班次也是一個問題，因為像小琉球因為比較近嘛，而且他們有公船，所以他們有正常的一個規定時間就是要開船，那像我們的話就是沒有，所以船公司說的算，那在飛機的部分可能就沒有辦法多做什麼調整，但是我覺得調整部分可以是班次增加之類的，或者是他可以調降票價的費用，然後讓大家可以來的時候是也可以在做小型的飛機進來這裡會比較舒服，因為畢竟船的話，浪大會比較不舒服，那坐飛機的話大概是15分鐘至20分鐘就會到達這裡。如果票價比較比較好一點的話，可能就會有更多人選擇進來這樣。',
  },
];

export const interviewTypeList: TypeItem[] = [
  {
    id: 1,
    title: '交通運輸',
  },
];

export const interviewTargetList: TypeItem[] = [
  {
    id: 1,
    title: '觀光旅遊產業',
  },
];

export const SocialObservationBookCategoryList: CategoryItem[] = [
  {
    id: 1,
    theme: 'general',
    category: '綠島的全面介紹',
    content:
      '從自然環境、歷史文化、到社會發展，這些書籍幫助我們全方面的了解綠島。',
  },
  {
    id: 2,
    theme: 'custom',
    category: '綠島的民俗',
    content: '深入了解綠島在獨特社會形態下形成的民俗習慣。',
  },
  {
    id: 3,
    theme: 'white-terror',
    category: '白色恐怖與綠島',
    content:
      '1951年，台灣省警備總司令部在綠島成立「新生訓導處」，監管、改造思想或政治上有問題的犯人。透過各個當年「新生」以及綠島居民的回憶紀錄，我們重回白色恐怖時期，見證臺灣的人權發展。',
  },
  {
    id: 4,
    theme: 'others',
    category: '其他出版刊物',
    content: '以其他文字形式探索綠島。',
  },
];

export const BookItemList: BookItem[] = [
  {
    id: 1,
    theme: 'general',
    title: '臺東縣綠島鄉誌  上 中 下',
    abstract:
      '這系列綠島的地方鄉誌，全面彙整綠島的自然地理、生態基本研究資料，和對於綠島傳統人文產業、風俗民情、社會形態的詳細介紹與研究，以及觀光興起後的社會經濟變遷。',
    author: '臺東縣綠島鄉公所',
    publish_date: '2014年',
    url: 'https://www.lyudao.gov.tw/history/',
    publisher: '臺東縣綠島鄉公所',
    isbn_issn: '9789860433708',
  },
  {
    id: 2,
    theme: 'general',
    title: '綠島文化導覽地圖',
    abstract:
      '介紹綠島的地理氣候、歷史沿革以及人文環境，並分區簡介島上自然景觀、人文景點、設施、聚落等重要地景。',
    author: '林登榮，陳次男',
    publish_date: '2007年',
    url: 'https://tm.ncl.edu.tw/article?u=022_005_00004176',
    publisher: '臺東縣政府文化局',
    isbn_issn: '9789860099300',
  },
  {
    id: 3,
    theme: 'general',
    title: '綠島解說文本',
    abstract:
      '由自然人文學家陳玉峯教授所撰寫的導覽文本。詳細介紹了綠島整體以及各區的重要地標，深入探討綠島獨特的自然地景和人文歷史之間環環相扣的關係。',
    author: '陳玉峯',
    publish_date: '2015年',
    url: 'https://taiwanebook.ncl.edu.tw/zh-tw/book/NCL-004910703',
    publisher: '前衛出版',
    isbn_issn: '9789578017870',
  },
  {
    id: 4,
    theme: 'custom',
    title: '綠島的民俗',
    abstract:
      '這本書彙整了民國初年間，對綠島社會習俗、生活習俗、生命禮俗、口述藝術、信仰習俗和民俗特色的調查整理以及分析。',
    author: '阮昌銳',
    publish_date: '1999年',
    url: 'https://taiwanebook.ncl.edu.tw/zh-tw/book/NCL-001182920',
    publisher: '臺北省立博物館',
    isbn_issn: '9579497885',
  },
  {
    id: 5,
    theme: 'white-terror',
    title: '綠島百事 - 火燒島十一年',
    abstract:
      '顏醫師以政治受難者的身份記錄了他在綠島度過的11年生活。這本散文日記式的作品描述了他在綠島的生活日常、當地的環境文化，以及在獄中苦中作樂的日子。',
    author: '顏世鴻',
    publish_date: '2018年',
    url: 'https://www.nhrm.gov.tw/w/nhrm/Publishing_21090600473632272',
    publisher: '國家人權博物館',
    isbn_issn: '9789860557404',
  },
  {
    id: 6,
    theme: 'white-terror',
    title: '走吧！綠島我來了！：流麻溝十五號記事',
    abstract:
      '走訪綠島監獄遺址、拜訪當年政治受難者、相關人物、當地人，深入淺出以圖文介紹綠島人權園區，了解白色恐怖下綠島的人與事。',
    author: '曹欽榮',
    publish_date: '2022年',
    url: '',
    publisher: '玉山社',
    isbn_issn: '9789862943304',
  },
  {
    id: 7,
    theme: 'white-terror',
    title: '流麻溝十五號：綠島女生分隊及其他',
    abstract:
      '從累積十多年、上百人次的採訪收集，並透過當時老照片及圖像，我們回到白色恐怖下的年代，看到當年被關押到綠島的六位女性政治犯，他們獄中的生活、出獄後的困苦，了解他們獨特的生命史。',
    author: '曹欽榮、鄭南榕基金會',
    publish_date: '2012年',
    url: 'https://hre.pro.edu.tw/tjelibrary/42',
    publisher: '書林出版有限公司',
    isbn_issn: '9789574454969',
  },
  {
    id: 8,
    theme: 'white-terror',
    title: '綠島人權燈塔',
    abstract:
      '以台語繪本形式的形式，描繪一位當年被關押到綠島的政治犯人，他如何在綠島上與當地人從陌生到彼此了解、締結情誼，並從他和小朋友道出的「草蜢仔弄蜜蜂」預言故事，我們看見白色恐怖帶來的人權反思。',
    author: '郭振純著、陳玉珠繪',
    publish_date: '2018年',
    url: '',
    publisher: '前衛出版社',
    isbn_issn: '9789578018464',
  },
  {
    id: 9,
    theme: 'white-terror',
    title: '來自清水的孩子',
    abstract:
      '出生於台中清水的蔡焜霖，經歷過日本統治、國民政府來台、白色恐怖到解嚴。他曾是一名品學兼優的好學生，但因為參加讀書會，被冠「參加非法組織」罪名，遭判刑10年、囚於綠島。這系列書籍以漫畫形式，講述他的故事。',
    author: '游珮芸、周見信',
    publish_date: '2021年',
    url: 'https://children.moc.gov.tw/book/232643',
    publisher: '慢工文化',
    isbn_issn: '9789869857314',
  },
  {
    id: 10,
    theme: 'others',
    title: '島嶼綠雜誌',
    abstract:
      '2022成立的綠島地方刊物，利用圖文介紹，看見綠島生態環境、文化特色，以及綠島上人們的生活，深入了解島嶼的現況。',
    author: '島嶼綠工作室',
    publish_date: '(Vol.01) 2021年; (Vol.02) 2022年',
    url: 'https://children.moc.gov.tw/book/232643',
    publisher: '島嶼綠工作室',
    isbn_issn: '29580811',
  },
  {
    id: 11,
    theme: 'others',
    title: '綠島金夢',
    abstract:
      '綠島藏著二十億黃金的神秘寶藏，這個熱門的故事持續在綠島流傳了兩百多年，直到2008年迎來了實際的挖掘行動。然而，挖金團隊不僅發現了飾品與黃金，還發現了數百具原住民的屍骨。為了揭開這段風雲歷史，陳玉峯教授展開了深入的採訪之旅，訪問了當地經歷過綠島藏金傳說的人們以及相關地點。透過這個以半史實、半小説的方式呈現的敘述，我們有幸深入了解這段精彩的歷史。',
    author: '陳玉峯',
    publish_date: '2015年',
    url: 'https://taiwanebook.ncl.edu.tw/zh-tw/book/NCL-004842590',
    publisher: '前衛出版社',
    isbn_issn: '9789578017719',
  },
];

export const SocialObservationLiteratureCategoryList: CategoryItem[] = [
  {
    id: 1,
    theme: 'ecosystem',
    category: '綠島的社會生態系統',
  },
  {
    id: 2,
    theme: 'humanities-social',
    category: '綠島的人文與社會變遷',
  },
  {
    id: 3,
    theme: 'land-usage',
    category: '綠島的土地利用型態變遷',
  },
  {
    id: 4,
    theme: 'ecotourism',
    category: '綠島的生態觀光發展與影響',
  },
];

export const LiteratureItemList: LiteratureItem[] = [
  {
    id: 1,
    theme: 'ecosystem',
    title: '綠島珊瑚礁社會生態系統治理 : 尺度錯置與其影響',
    abstract:
      '利用文本分析與深度訪談調查綠島1990-2021年觀光計畫下的治理過程與結果，發現治理體制的空間、時間、功能等尺度的錯置，造成維護環境的目標無法有效被實施。',
    author: '謝慧霆、戴興盛',
    publish_date: '2023',
    citation: '農業經濟叢刊，29(1)，1-44',
    url: 'https://doi.org/10.6196/TAER.202306_29(1).0001',
  },
  {
    id: 2,
    theme: 'ecosystem',
    title: '綠島自然地景生態與人文社會之演變',
    abstract: '',
    author: '鍾玉龍、呂明倫',
    publish_date: '2007',
    citation: '臺灣博物季刊，26(3)，74-77',
    url: 'https://www.airitilibrary.com/Article/Detail/P20150629002-200709-201610110013-201610110013-74-77',
  },
  {
    id: 3,
    theme: 'humanities-social',
    title: '綠島的人口成長與變遷',
    abstract:
      '作者利用回顧文獻與統計資料，探討綠島自漢人入墾後，人口變遷的特徵。根據人口增減的原因，作者將人口變遷的過程分為三階段 ——「漢人入墾期」（1799-1861）、「封閉成長期」（1861-1961）、「人口外流期」（1961-今）。',
    author: '李玉芬',
    publish_date: '1997',
    citation: '東台灣研究，(2)，99-129',
    url: 'https://www.airitilibrary.com/Common/Click_DOI?DOI=10.6275/JETS.2.99-129.1997',
  },
  {
    id: 4,
    theme: 'humanities-social',
    title: '綠島的區位與人文生態的變遷',
    abstract:
      '作者全面性的回顧與分析綠島人口自漢人入墾後，島上人地互動的過程與特質。從封閉的人口成長與聚落發展、社會網絡、經濟變遷，顯示這個擁有高孤立性的漢人聚落之發展特色。',
    author: '李玉芬',
    publish_date: '2000',
    citation: '博士論文，國立臺灣師範大學',
    url: 'https://hdl.handle.net/11296/q2vycg',
  },
  {
    id: 5,
    theme: 'humanities-social',
    title: '綠島漁業生物及漁撈活動調查',
    abstract:
      '作者對綠島之漁業進行系統調查及訪談，了解當時主要的綠島漁撈作業方式、利用生物，以及漁民背景結構、收入來源。研究發現兼職與專職漁民多兼營觀光工作，這些人可作為發展觀光與珊瑚礁保育所需人力資源。',
    author: '李玉芬',
    publish_date: '2011',
    citation: '東台灣研究，(17)，97-120',
    url: 'https://www.airitilibrary.com/Common/Click_DOI?DOI=10.6275/JETS.17.97-120.2011',
  },
  {
    id: 6,
    theme: 'land-usage',
    title: '綠島水質與土地利用關係之研究',
    abstract:
      '透過土地利用圖和現地調查，研究綠島觀光業發展對土地利用的影響及其與水質的關係。結果顯示，1995-2006年，土地變遷主要與觀光基礎建設相關，而損失面積量最多的是農業用地，且新增的住宅用地呈現聚集現象；2006-2016年，變遷主要體現在服務業區域轉變和空置地利用，服務業變遷呈現聚集趨勢。研究亦發現，水質項目中氨氮、磷酸鹽、化學需氧量、總有機碳等營養鹽受服務、住宅和農業用地影響，清潔劑和油脂等則受住宅區影響。',
    author: '吳均展',
    publish_date: '2021',
    citation: '碩士論文，中國文化大學',
    url: 'https://hdl.handle.net/11296/ck32k8',
  },
  {
    id: 7,
    theme: 'land-usage',
    title: '綠島地景動態之研',
    abstract:
      '研究整合航空照片材料、地理資訊系統，發現綠島在1979-1989年間，天然闊葉樹林的面積明顯增加，而木麻黃造林地面積明顯減少。利用馬可夫模式預測，隨著森林生態系的自然演替、恢復，綠島的植群生態將在30-60年後穩定，成為以天然闊葉樹林為主之植物社會。',
    author: '鍾玉龍、呂明倫',
    publish_date: '2006',
    citation: '特有生物研究，8(2)，︰87-96',
    url: 'https://www.tbri.gov.tw/A15_2/download1/31274/8',
  },
  {
    id: 8,
    theme: 'ecotourism',
    title: '綠島發展生態觀光之規畫',
    abstract:
      '以綠島為實例探討生態觀光之架構，並提出生態開發、生態經營、環境解說及教育、生態資訊、生態網絡等五項策略作為發展計畫的規劃與思考方向。',
    author: '宋秉明',
    publish_date: '1996',
    citation: '戶外遊憩研究，9(4)，31-40',
    url: 'https://doi.org/10.6130/JORS.1996.9(4)3',
  },
  {
    id: 9,
    theme: 'ecotourism',
    title: '籌設中國家公園之權益關係人分析研究—綠島之個案',
    abstract:
      '針對綠島國家公園的爭議，此研究以質性訪談，探討各權益相關者對此案的立場和態度，同時分析背後的權益結構，並探討政府與民間各部門在國家公園劃設過程中的互動關係。研究結果顯示，居民反對設立國家公園的原因包括採集權、生活權、生計權被剝奪，以及建築和土地使用受到限制等因素。',
    author: '柯明宏、張長義',
    publish_date: '2007',
    citation: '碩士論文，國立臺灣大學',
    url: 'https://www.airitilibrary.com/Common/Click_DOI?DOI=10.6342/NTU.2008.01527',
  },
  {
    id: 10,
    theme: 'ecotourism',
    title: '觀光遊憩產業的投入與產出分析-以綠島爲例',
    abstract:
      '藉由實證數據的推演，運用統計迴歸的方式建構綠島發展觀光產業可能的生產函數形式，研究分析出： 一、 綠島觀光遊憩產業生產函數可以Cobb-Douglas生產函數表示；二、 綠島觀光遊憩產業的遊憩人次與家庭可支配所得與平均休間時數成正比；三、 綠島的觀光產業正處於蓬勃發展的階段。',
    author: '陳延季',
    publish_date: '2004',
    citation: '社會科教育研究，9，217-234',
    url: 'https://tpl.ncl.edu.tw/NclService/JournalContentDetail?SysId=A04042626',
  },
  {
    id: 11,
    theme: 'ecotourism',
    title: '綠島觀光衝擊之探討',
    abstract:
      '藉由文獻蒐集、 訪談法、參與觀察法，與問卷調查法方式，從綠島居民與遊客的觀點，探討綠島在觀光政策發展下的衝擊與變遷，包含經濟、自然環境、社會文化的層面，並提出未來發展建議。',
    author: '李莉莉',
    publish_date: '2002',
    citation: '碩士論文，國立東華大學',
    url: 'https://hdl.handle.net/11296/3732z6',
  },
  {
    id: 12,
    theme: 'ecotourism',
    title: '綠島永續性生態光觀發展之策略',
    abstract:
      '利用文獻回顧與問卷調查了解綠島的觀光現況、發展潛力、遊客與居民對生態保育之意向。',
    author: '黃筱云',
    publish_date: '2011',
    citation: '碩士論文，國立屏東科技大學',
    url: 'https://www.airitilibrary.com/Common/Click_DOI?DOI=10.6346/NPUST.2011.00255',
  },
  {
    id: 13,
    theme: 'ecotourism',
    title: '四個離島地區觀光發展階段暨觀光衝擊之研究',
    abstract:
      '分析觀光人次與人口變化，以評估綠島觀光發展的階段，並用網路問卷調查居民與遊客對於觀光衝擊和社區生活品質的看法。結果顯示綠島處於觀光飽和、面臨負成長的階段，且觀光對綠島經濟與社會文化都有所影響。',
    author: '葉八方',
    publish_date: '2014',
    citation: '碩士論文，國立臺灣大學',
    url: 'https://www.airitilibrary.com/Common/Click_DOI?DOI=10.6342/NTU.2014.01760',
  },
  {
    id: 14,
    theme: 'ecotourism',
    title: '綠島生態維護稅願付價格之探討—條件評估法之應用',
    abstract:
      '以條件評估法估算觀光客對生態維護費用的願付價格，發現不同遊客的願付價格與以下因子相關：遊客的遊憩意願是否不受生態稅金額影響、家戶所得高低、環保經驗之有無，以及應保育資源總項數、是否從事服務業、受教育年數、居住區域和稅收用途。並得出代表性個人願付價格為86.9472 元。',
    author: '黃琬倫',
    publish_date: '2005',
    citation: '碩士論文，國立臺灣大學',
    url: 'https://scsrt.ascdc.sinica.edu.tw/historical_data/1756',
  },
];

export const GovernmentLiteratureItemList: LiteratureItem[] = [
  {
    id: 1,
    theme: '',
    title: '台東縣議會議案',
    url: 'https://www.taitungcc.gov.tw/Search.aspx',
  },
  {
    id: 2,
    theme: '',
    title: '綠島鄉民代表會議案以及陳情案',
    url: 'https://www.ldrc.gov.tw/WebMaster/?section=34',
  },
];
