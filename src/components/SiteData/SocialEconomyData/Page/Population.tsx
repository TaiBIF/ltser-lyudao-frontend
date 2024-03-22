import React, { useEffect, useState } from 'react';
import AreaMap from '../Chart/AreaMap';
import Select from '../Select/Main';
import Subtitle from '../Subtitle';
import { usePopulationContext } from 'context/SocialEconomyData/PopulationContext';
import _ from 'lodash';
import {
  populaitonThemeList,
  populationKeyList,
  populationThemeTermObj,
} from 'data/socialEconomyData/population';
import LineChart from '../Chart/LineChart';
import { Grid } from '@mui/material';

const Population = () => {
  const { filter, setAnnuallyData, townshipRaw, villageRaw } =
    usePopulationContext();

  useEffect(() => {
    const rawList = [...villageRaw, ...townshipRaw];
    const rawThemeList = rawList.map((o: any) => {
      _.forEach(populationThemeTermObj, (newKey, prevKey) => {
        if (o[prevKey]) {
          o[newKey] = o[prevKey];
          delete o[prevKey];
        }
      });
      return _.pick(o, [...populaitonThemeList, ...populationKeyList]);
    });
    setAnnuallyData(rawThemeList);
  }, []);

  return (
    <>
      <section className="u-section">
        <Subtitle text="人口概況" />
        <Select />
        <AreaMap />
      </section>
      <section className="u-section">
        <Subtitle text="人口金字塔" />
      </section>
      <section className="u-section">
        <Subtitle text="人口變遷" />
        <Grid container spacing={3}>
          {populaitonThemeList.map(
            (v, i) =>
              !populationKeyList.includes(v) && <LineChart key={i} theme={v} />
          )}
        </Grid>
      </section>
    </>
  );
};

export default Population;
