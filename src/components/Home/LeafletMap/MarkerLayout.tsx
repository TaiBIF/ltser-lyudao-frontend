import React, { useState } from 'react';

import { Dictionary } from 'lodash';

import { Marker, Popup, Tooltip } from 'react-leaflet';
import { LatLngExpression, DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import MarkerIconLayout from 'components/Home/LeafletMap/MarkerIconLayout';
import PopupLayout from 'components/Home/LeafletMap/PopupLayout';
import TooltipLayout from 'components/Home/LeafletMap/TooltipLayout';

interface MarkerLayoutProps {
  data: Dictionary<number | string>;
}

const MarkerLayout = (props: MarkerLayoutProps) => {
  const { data } = props;
  const [active, setActive] = useState<boolean>(false);

  const location: LatLngExpression = [
    Number(data.decimalLatitude),
    Number(data.decimalLongitude),
  ];

  const handleMarkerClick = () => {
    setActive(true);
  };

  const mapIcon = () =>
    new DivIcon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
      html: ReactDOMServer.renderToString(<MarkerIconLayout active={active} />),
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
        <Popup closeButton={false}>
          <PopupLayout setActive={setActive} data={data} />
        </Popup>
        <Tooltip>
          <TooltipLayout data={data} />
        </Tooltip>
      </Marker>
    </>
  );
};

export default MarkerLayout;
