import {
  agriculturalAcreageList,
  animalList,
  fishingList,
  industryAndCommerceList,
  tourismList,
} from 'data/socialEconomyData/industry';
import IndustryLineChart from '../Chart/IndustryLineChart';
import { Grid } from '@mui/material';

const Industry = () => {
  const industryThemeList = [
    {
      id: 'industryAndCommerce',
      title: '行政區工商家數',
      list: industryAndCommerceList,
      size: 12,
    },
    {
      id: 'tourism',
      title: '觀光人次統計',
      list: tourismList,
      size: 6,
    },
    {
      id: 'agriculturalAcreage',
      title: '行政區耕地面積統計',
      list: agriculturalAcreageList,
      size: 6,
    },
    {
      id: 'fishing',
      title: '漁戶數',
      list: fishingList,
      size: 6,
    },
    {
      id: 'animal',
      title: '現有牲畜數量統計',
      list: animalList,
      size: 6,
    },
  ];
  return (
    <>
      <Grid container>
        {industryThemeList.map((o) => (
          <IndustryLineChart
            key={o.id}
            raw={o.list}
            id={o.id}
            theme={o.title}
            size={o.size}
          />
        ))}
      </Grid>
    </>
  );
};

export default Industry;
