import IndustryLineChart from '../Chart/IndustryLineChart';
import { Grid, Typography } from '@mui/material';
import useFetchIndustryData from 'hooks/api/useFetchIndustry';

const Industry = () => {
  const { industryData, fishingData, livestockData, visitorData } =
    useFetchIndustryData(); // API 資料流從 hooks 管理
  const industryThemeList = [
    {
      id: 'industryAndCommerce',
      title: '行政區工商家數',
      list: industryData, // 這邊換成呼叫 API 資料流
      size: 12,
    },
    {
      id: 'fishing',
      title: '漁戶數',
      list: fishingData,
      size: 12,
    },
    {
      id: 'animal',
      title: '現有牲畜數量統計',
      list: livestockData,
      size: 12,
    },
  ];
  const visitorChartConfig = {
    id: 'tourism',
    title: '觀光人次統計',
    list: visitorData,
    size: 12,
  };
  return (
    <>
      <Grid container>
        {visitorData && visitorData.length > 0 ? (
          <>
            <IndustryLineChart
              key={visitorChartConfig.id}
              raw={visitorChartConfig.list}
              id={visitorChartConfig.id}
              theme={visitorChartConfig.title}
              size={visitorChartConfig.size}
            />
          </>
        ) : (
          <p>資料加載中...</p>
        )}
        {industryData && industryData.length > 0 ? (
          <>
            {industryThemeList.map((o) => (
              <IndustryLineChart
                key={o.id}
                raw={o.list}
                id={o.id}
                theme={o.title}
                size={o.size}
              />
            ))}
          </>
        ) : (
          <p>資料加載中...</p>
        )}
      </Grid>
      <section className="u-section">
        <Typography variant="body1" component={'div'} textAlign={'end'}>
          資料來源：交通部觀光署觀光統計資料庫、SEGIS 社會經濟資料服務平台
        </Typography>
      </section>
    </>
  );
};

export default Industry;
