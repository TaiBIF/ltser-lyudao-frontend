import AreaMap from '../Chart/AreaMap';
import Select from '../Select/Main';
import Subtitle from '../Subtitle';
import { usePopulationContext } from 'context/SocialEconomyData/PopulationContext';
import _ from 'lodash';
import {
  populaitonThemeList,
  populationHiddenKeyList,
} from 'data/socialEconomyData/population';
import LineChart from '../Chart/PopulationLineChart';
import { Grid, Typography } from '@mui/material';
import PyramidChart from '../Chart/PyramidChart';
import useFetchPopulationData from 'hooks/api/useFetchPopulation';

const Population = () => {
  const { populationData, pyramidData } = useFetchPopulationData(); // API 資料流從 hooks 管理

  return (
    <>
      <section className="u-section">
        <Subtitle text="人口概況" />
        {populationData && populationData.length > 0 ? (
          <>
            <Select data={populationData} filterKey="areaMapYear" />
            <AreaMap mapData={populationData} />
          </>
        ) : (
          <p>資料加載中...</p>
        )}
      </section>
      <section className="u-section">
        <Subtitle text="人口金字塔" />
        {pyramidData && pyramidData.length > 0 ? (
          <>
            <Select data={pyramidData} filterKey="pyramidChartYear" />
            <PyramidChart pyramidData={pyramidData} />
          </>
        ) : (
          <p>資料加載中...</p>
        )}
      </section>
      <section className="u-section">
        <Subtitle text="人口變遷" />
        {populationData && populationData.length > 0 ? (
          <Grid container spacing={3}>
            {populaitonThemeList.map(
              (o, i) =>
                !populationHiddenKeyList.includes(o.title) && (
                  <LineChart key={i} theme={o} chartData={populationData} />
                )
            )}
          </Grid>
        ) : (
          <p>資料加載中...</p>
        )}
      </section>
      <section className="u-section">
        <Typography variant="body1" component={'div'} textAlign={'end'}>
          資料來源：SEGIS 社會經濟資料服務平台
        </Typography>
      </section>
    </>
  );
};

export default Population;
