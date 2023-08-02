import { TypeItem } from 'types/utils';
import { AboutItem } from 'types/about';

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

export const aboutList: AboutItem[] = [
  {
    id: 1,
    type: 'ecologicalObservation',
    name: '珊瑚礁水下景觀',
    content:
      '珊瑚礁生態系多位於熱帶與亞熱帶淺水海域，被稱為「海中的熱帶雨林」。珊瑚礁區不僅生物多樣性高，同時也由於珊瑚礁大多發育於大陸或是島嶼的邊緣，因此提供我們一個能夠同時親近海洋、又能學習海洋生物多樣性與生態知識的寶庫。由於自然環境使然，想接近珊瑚礁最好具備浮潛或是水肺潛水等基本技術，才能在確保自身安全的同時不對珊瑚礁與珊瑚礁生物造成傷害。雖然娛樂型的水肺潛水(recreational diving) 在台灣已推行多年，也成為大眾水下觀光育樂的熱門運動，但是要能利用水肺潛水進行學術研究，必須先經過科學潛水(scientific diving)的訓練與認證，並同時具備相關的潛水生理、醫學、海洋物理、化學、生物等知識，才能進行珊瑚礁生物的採集和生態調查。具有科學潛水認證，不僅可以確保水中作業的安全，在調查施行過程中不會造成珊瑚礁的破壞，同時可以應用正確的海洋科學知識來進行海洋生態環境的研究。 \r\n\r\n      本中心於2015-2020年間已舉辦六屆研習會，共培訓出83位學員，對於推廣海洋生物多樣性教育，培育未來台灣研究、保育、管理等海洋相關人才等，目前已有相當成果。本研習會的目標是希望所有學員在完成課程後，都具備科學潛水調查技術與珊瑚礁生物知識，故安排了國內各類珊瑚礁生物專家來進行授課，並聘請國際潛水教練協會的課程總監與教練來到綠島海洋研究站教授科學潛水。',
    image: '/media/aboutImage/210303.png',
    created_at: '2023-08-01',
    updated_at: '2023-08-01',
    attachments: [
      {
        id: 1,
        name: '船隻的聲音',
        content: '綠島以獨特的島嶼生態系吸引大觀光客前來',
        file: '/media/aboutAttachments/leetcode.pdf',
        image: '/media/aboutAttachments/homepage_1.jpg',
        created_at: '2023-08-01',
        updated_at: '2023-08-01',
      },
      {
        id: 2,
        name: '生物的聲音',
        content:
          '生物獨特生物獨特生物獨特生物獨特生物獨特生物獨特生物獨特生物獨特生物獨特\r\n生物獨特生物獨特生物獨特生物獨特生物獨特',
        file: '/media/aboutAttachments/leetcode-cpp.pdf',
        image: '/media/aboutAttachments/homepage_3.jpg',
        created_at: '2023-08-01',
        updated_at: '2023-08-01',
      },
    ],
  },
];
