import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import { SiteObservationItem } from 'types/utils';

interface TooltipLayoutProps {
  data: Dictionary<number | string>;
  items: SiteObservationItem[];
}

const TooltipLayout = (props: TooltipLayoutProps) => {
  const { data, items } = props;
  useEffect(() => {}, []);

  return (
    <>
      <div>{data.verbatimLocality}</div>
      <div>2022-01-01 - 2023-06-27</div>
      <div>
        {items.map((v) => {
          return <div key={v.id}>{v.title}</div>;
        })}
      </div>
    </>
  );
};

export default TooltipLayout;
