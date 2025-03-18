import { useEffect, useState } from 'react';
import useRender from 'hooks/page/useRender';

interface MergedIndustryData {
  [key: string]: [key: any];
}

const useFetchIndustryData = () => {
  const { getSocialEconomyContent } = useRender();
  const [industryData, setIndustryData] = useState<
    {
      縣市代碼: string;
      縣市名稱: string;
      鄉鎮市區代碼: string;
      鄉鎮市區名稱: string;
      工商業總家數: string;
      製造業: string;
      用水供應及污染整治業: string;
      營造業: string;
      批發及零售業: string;
      運輸及倉儲業: string;
      住宿及餐飲業: string;
      資訊及通訊傳播業: string;
      金融及保險業: string;
      不動產業: string;
      '專業、科學及技術服務業': string;
      支援服務業: string;
      '公共行政及國防；強制性社會安全': string;
      教育服務業: string;
      醫療保健及社會工作服務業: string;
      '藝術、娛樂及休閒服務業': string;
      其他服務業: string;
      資料時間: string;
    }[]
  >([]);

  const [fishingData, setFishingData] = useState<
    {
      縣市代碼: string;
      縣市名稱: string;
      鄉鎮市區代碼: string;
      鄉鎮市區名稱: string;
      漁戶總戶數: string;
      漁戶人口總數: string;
    }[]
  >([]);

  const [livestockData, setLivestockData] = useState<
    {
      縣市代碼: string;
      縣市名稱: string;
      鄉鎮市區代碼: string;
      鄉鎮市區名稱: string;
      現有家畜總數: string;
      現有馬數量: string;
      現有豬數量: string;
      現有鹿數量: string;
      現有羊數量: string;
      資料時間: string;
    }[]
  >([]);

  const [visitorData, setVisitorData] = useState<
    {
      年度: string;
      綠島遊憩區: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: MergedIndustryData | null = await getSocialEconomyContent(
        'social_economy/industry'
      );
      if (!data) return;

      const formattedIndustryData = Object.entries(data.industry).map(
        ([key, value]) => {
          return {
            縣市代碼: '10014',
            縣市名稱: '臺東縣',
            鄉鎮市區代碼: '10014110',
            鄉鎮市區名稱: '綠島鄉',
            工商業總家數: String(value.C_CNT || 0),
            製造業: String(value.C1_C_CNT || 0),
            用水供應及污染整治業: String(value.C1_E_CNT || 0),
            營造業: String(value.C1_F_CNT || 0),
            批發及零售業: String(value.C1_G_CNT || 0),
            運輸及倉儲業: String(value.C1_H_CNT || 0),
            住宿及餐飲業: String(value.C1_I_CNT || 0),
            資訊及通訊傳播業: String(value.C1_J_CNT || 0),
            金融及保險業: String(value.C1_K_CNT || 0),
            不動產業: String(value.C1_L_CNT || 0),
            '專業、科學及技術服務業': String(value.C1_M_CNT || 0),
            支援服務業: String(value.C1_N_CNT || 0),
            '公共行政及國防；強制性社會安全': String(value.C1_P_CNT || 0),
            教育服務業: String(value.C_CNT || 0),
            醫療保健及社會工作服務業: String(value.C1_Q_CNT || 0),
            '藝術、娛樂及休閒服務業': String(value.C1_R_CNT || 0),
            其他服務業: String(value.C1_S_CNT || 0),
            資料時間: key,
          };
        }
      );

      setIndustryData(formattedIndustryData);

      const formattedFishingData = Object.entries(data.fishing).map(
        ([key, value]) => {
          return {
            縣市代碼: '10014',
            縣市名稱: '臺東縣',
            鄉鎮市區代碼: '10014110',
            鄉鎮市區名稱: '綠島鄉',
            漁戶總戶數: String(value.COL_1 || 0),
            漁戶人口總數: String(value.COL_8 || 0),
            資料時間: key,
          };
        }
      );

      setFishingData(formattedFishingData);

      const formattedLivestockData = Object.entries(data.livestock).map(
        ([key, value]) => {
          return {
            縣市代碼: '10014',
            縣市名稱: '臺東縣',
            鄉鎮市區代碼: '10014110',
            鄉鎮市區名稱: '綠島鄉',
            現有家畜總數: String(value.COL_1 || 0),
            現有馬數量: String(value.COL_1 || 0),
            現有豬數量: String(value.COL_4 || 0),
            現有鹿數量: String(value.COL_5 || 0),
            現有羊數量: String(value.COL_7 || 0),
            資料時間: key,
          };
        }
      );

      setLivestockData(formattedLivestockData);

      const formattedVisitorData = Object.entries(data.visitor).map(
        ([key, value]) => {
          return {
            年度: String(value.year || 0),
            綠島遊憩區: String(value.visitors || 0),
          };
        }
      );

      setVisitorData(formattedVisitorData);
    };

    fetchData();
  }, []);

  return { industryData, fishingData, livestockData, visitorData };
};

export default useFetchIndustryData;
