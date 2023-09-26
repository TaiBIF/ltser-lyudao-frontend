import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import { Marker, Popup, Tooltip } from 'react-leaflet';
import { LatLngExpression, DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import MarkerIconLayout from 'components/Home/LeafletMap/MarkerIconLayout';
import PopupLayout from 'components/Home/LeafletMap/PopupLayout';
import TooltipLayout from 'components/Home/LeafletMap/TooltipLayout';
import { useSurveyMapContext } from 'context/SurveyMapContext';

import useSurveyMapApi from 'hooks/api/useSurveyMapApi';

interface MarkerLayoutProps {
  data: Dictionary<number | string>;
}

const MarkerLayout = (props: MarkerLayoutProps) => {
  const { data } = props;
  const { filter, setFilter, setAllDetail, setIdData } = useSurveyMapContext();
  const { getAllDetail } = useSurveyMapApi();

  const location: LatLngExpression = [
    Number(data.decimalLatitude),
    Number(data.decimalLongitude),
  ];

  const handleMarkerClick = () => {
    getAllDetail({
      id: String(data.locationID),
      year: filter.year,
      setData: setAllDetail,
    });
    setIdData({ ...data });
    setFilter({ ...filter, id: String(data.locationID) });
  };

  const mapIcon = () =>
    new DivIcon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
      html: ReactDOMServer.renderToString(
        <MarkerIconLayout filter={filter} id={String(data.locationID)} />
      ),
    });
  const icon = mapIcon();

  return (
    <>
      <Marker
        position={location}
        icon={icon}
        eventHandlers={{
          click: handleMarkerClick,
        }}
      >
        <Popup closeButton={false} closeOnClick={false}>
          <PopupLayout data={data} />
        </Popup>
        <Tooltip offset={[30, -16.5]}>
          <TooltipLayout data={data} />
        </Tooltip>
      </Marker>
    </>
  );
};

export default MarkerLayout;
