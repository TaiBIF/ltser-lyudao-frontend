import { useEffect, useState } from 'react';
import useRender from 'hooks/page/useRender';

const regionMapping: Record<
  string,
  { 縣市代碼: string; 縣市名稱: string; 鄉鎮市區名稱: string }
> = {
  '10014110': {
    縣市代碼: '10014',
    縣市名稱: '臺東縣',
    鄉鎮市區名稱: '綠島鄉',
  },
  '10014110-001': {
    縣市代碼: '10014',
    縣市名稱: '臺東縣',
    鄉鎮市區名稱: '公舘村',
  },
  '10014110-002': {
    縣市代碼: '10014',
    縣市名稱: '臺東縣',
    鄉鎮市區名稱: '中寮村',
  },
  '10014110-003': {
    縣市代碼: '10014',
    縣市名稱: '臺東縣',
    鄉鎮市區名稱: '南寮村',
  },
};

interface PopulationData {
  H_CNT: string; // 戶數
  P_CNT: string; // 人口數小計
  M_F_RAT: string; // 性比例
  DEPENDENCY_RAT: string; // 扶養比
  A65_A0A14_RAT: string; // 老化指數
  NATURE_INC_CNT: string; // 自然增加人數
  SOCIAL_INC_CNT: string; // 社會增加人數
}

interface MergedPopulationData {
  [key: string]: PopulationData;
}

const useFetchPopulationData = () => {
  const { getSocialEconomyContent } = useRender();
  const [populationData, setPopulationData] = useState<
    {
      縣市代碼: string;
      縣市名稱: string;
      鄉鎮市區代碼: string;
      鄉鎮市區名稱: string;
      戶數: string;
      人口數小計: string;
      性比例: string;
      扶養比: string;
      老化指數: string;
      自然增加人數: string;
      社會增加人數: string;
      資料時間: string;
    }[]
  >([]);
  const [pyramidData, setPyramidData] = useState<
    {
      縣市代碼: string;
      縣市名稱: string;
      鄉鎮市區代碼: string;
      鄉鎮市區名稱: string;
      '0-4歲男性人口數': string;
      '0-4歲女性人口數': string;
      '5-9歲男性人口數': string;
      '5-9歲女性人口數': string;
      '10-14歲男性人口數': string;
      '10-14歲女性人口數': string;
      '15-19歲男性人口數': string;
      '20-24歲男性人口數': string;
      '20-24歲女性人口數': string;
      '25-29歲男性人口數': string;
      '25-29歲女性人口數': string;
      '30-34歲男性人口數': string;
      '30-34歲女性人口數': string;
      '35-39歲男性人口數': string;
      '35-39歲女性人口數': string;
      '40-44歲男性人口數': string;
      '40-44歲女性人口數': string;
      '45-49歲男性人口數': string;
      '45-49歲女性人口數': string;
      '50-54歲男性人口數': string;
      '50-54歲女性人口數': string;
      '55-59歲男性人口數': string;
      '55-59歲女性人口數': string;
      '60-64歲男性人口數': string;
      '60-64歲女性人口數': string;
      '65-69歲男性人口數': string;
      '65-69歲女性人口數': string;
      '70-74歲男性人口數': string;
      '70-74歲女性人口數': string;
      '75-79歲男性人口數': string;
      '75-79歲女性人口數': string;
      '80-84歲男性人口數': string;
      '80-84歲女性人口數': string;
      '85-89歲男性人口數': string;
      '85-89歲女性人口數': string;
      '90-94歲男性人口數': string;
      '90-94歲女性人口數': string;
      '95-99歲男性人口數': string;
      '95-99歲女性人口數': string;
      '100歲以上男性人口數': string;
      '100歲以上女性人口數': string;
      資料時間: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: MergedPopulationData | null = await getSocialEconomyContent(
        'social_economy/population'
      );
      if (!data) return;

      const formattedPopulationData = Object.entries(data.population).map(
        ([key, value]) => {
          const [year, vId] = key.split(',');
          const regionInfo = regionMapping[vId] || {};

          return {
            縣市代碼: regionInfo.縣市代碼 || '',
            縣市名稱: regionInfo.縣市名稱 || '',
            鄉鎮市區代碼: String(vId),
            鄉鎮市區名稱: regionInfo.鄉鎮市區名稱 || '',
            戶數: String(value.H_CNT || 0),
            人口數小計: String(value.P_CNT || 0),
            性比例: String(value.M_F_RAT || 0),
            扶養比: String(value.DEPENDENCY_RAT || 0),
            老化指數: String(value.A65_A0A14_RAT || 0),
            自然增加人數: String(value.NATURE_INC_CNT || 0),
            社會增加人數: String(value.SOCIAL_INC_CNT || 0),
            資料時間: year,
          };
        }
      );

      setPopulationData(formattedPopulationData);

      const formattedPyramidData = Object.entries(data.pyramid).map(
        ([key, value]) => {
          return {
            縣市代碼: String(value.COUNTY_ID || ''),
            縣市名稱: String(value.COUNTY || ''),
            鄉鎮市區代碼: String(value.TOWN_ID || ''),
            鄉鎮市區名稱: String(value.TOWN || ''),
            '0-4歲男性人口數': String(value.A0A4_M_CNT || 0),
            '0-4歲女性人口數': String(value.A0A4_F_CNT || 0),
            '5-9歲男性人口數': String(value.A5A9_M_CNT || 0),
            '5-9歲女性人口數': String(value.A5A9_F_CNT || 0),
            '10-14歲男性人口數': String(value.A10A14_M_CNT || 0),
            '10-14歲女性人口數': String(value.A10A14_F_CNT || 0),
            '15-19歲男性人口數': String(value.A15A19_M_CNT || 0),
            '15-19歲女性人口數': String(value.A15A19_F_CNT || 0),
            '20-24歲男性人口數': String(value.A20A24_M_CNT || 0),
            '20-24歲女性人口數': String(value.A20A24_F_CNT || 0),
            '25-29歲男性人口數': String(value.A25A29_M_CNT || 0),
            '25-29歲女性人口數': String(value.A25A29_F_CNT || 0),
            '30-34歲男性人口數': String(value.A30A34_M_CNT || 0),
            '30-34歲女性人口數': String(value.A30A34_F_CNT || 0),
            '35-39歲男性人口數': String(value.A35A39_M_CNT || 0),
            '35-39歲女性人口數': String(value.A35A39_F_CNT || 0),
            '40-44歲男性人口數': String(value.A40A44_M_CNT || 0),
            '40-44歲女性人口數': String(value.A40A44_F_CNT || 0),
            '45-49歲男性人口數': String(value.A45A49_M_CNT || 0),
            '45-49歲女性人口數': String(value.A45A49_F_CNT || 0),
            '50-54歲男性人口數': String(value.A50A54_M_CNT || 0),
            '50-54歲女性人口數': String(value.A50A54_F_CNT || 0),
            '55-59歲男性人口數': String(value.A55A59_M_CNT || 0),
            '55-59歲女性人口數': String(value.A55A59_F_CNT || 0),
            '60-64歲男性人口數': String(value.A60A64_M_CNT || 0),
            '60-64歲女性人口數': String(value.A60A64_F_CNT || 0),
            '65-69歲男性人口數': String(value.A65A69_M_CNT || 0),
            '65-69歲女性人口數': String(value.A65A69_F_CNT || 0),
            '70-74歲男性人口數': String(value.A70A74_M_CNT || 0),
            '70-74歲女性人口數': String(value.A70A74_F_CNT || 0),
            '75-79歲男性人口數': String(value.A75A79_M_CNT || 0),
            '75-79歲女性人口數': String(value.A75A79_F_CNT || 0),
            '80-84歲男性人口數': String(value.A80A84_M_CNT || 0),
            '80-84歲女性人口數': String(value.A80A84_F_CNT || 0),
            '85-89歲男性人口數': String(value.A85A89_M_CNT || 0),
            '85-89歲女性人口數': String(value.A85A89_F_CNT || 0),
            '90-94歲男性人口數': String(value.A90A94_M_CNT || 0),
            '90-94歲女性人口數': String(value.A90A94_F_CNT || 0),
            '95-99歲男性人口數': String(value.A95A99_M_CNT || 0),
            '95-99歲女性人口數': String(value.A95A99_F_CNT || 0),
            '100歲以上男性人口數': String(value.A100UP_5_M_CNT || 0),
            '100歲以上女性人口數': String(value.A100UP_5_F_CNT || 0),
            資料時間: String(key),
          };
        }
      );

      setPyramidData(formattedPyramidData);
    };

    fetchData();
  }, []);

  return { populationData, pyramidData };
};

export default useFetchPopulationData;
