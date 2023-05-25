import React, { useState } from 'react';

import { LatLngExpression, DivIcon } from 'leaflet';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
  LayerGroup,
  Marker,
  Popup,
} from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';

import MarkerIconLayout from 'components/Home/LeafletMap/MarkerIconLayout';
import PopupLayout from 'components/Home/LeafletMap/PopupLayout';
import Filter from 'components/Home/LeafletMap/Filter';

const Content = () => {
  const position: LatLngExpression = [22.6578661, 121.4676486];
  const [active, setActive] = useState<boolean>(false);

  const mapIcon = () =>
    new DivIcon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
      html: ReactDOMServer.renderToString(<MarkerIconLayout active={active} />),
    });
  const icon = mapIcon();

  const handleMarkerClick = () => {
    setActive(true);
  };

  return (
    <>
      <MapContainer
        id="leafletmap"
        className="map-area"
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
      >
        <LayersControl>
          <LayersControl.Overlay name="觀測項目AAA" checked>
            <LayerGroup>
              <Marker
                position={position}
                icon={icon}
                eventHandlers={{ click: handleMarkerClick }}
              >
                <Popup closeButton={false}>
                  <PopupLayout setActive={setActive} />
                </Popup>
              </Marker>
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ScaleControl position="bottomleft" imperial={false} />
        <Filter />
      </MapContainer>
    </>
  );
};

export default Content;
