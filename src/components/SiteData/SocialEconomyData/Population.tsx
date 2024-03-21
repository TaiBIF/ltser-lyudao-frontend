import React, { useState } from 'react';
import AreaMap from './AreaMap';
import Select from './Select/Main';
import Subtitle from './Subtitle';

const Population = () => {
  return (
    <>
      <Subtitle text="人口概況" />
      <Select />
      <AreaMap />
    </>
  );
};

export default Population;
