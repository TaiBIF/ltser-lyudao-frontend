import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
  LayerGroup,
} from 'react-leaflet';

import Filter from 'components/Home/LeafletMap/Filter';
import MarkerLayout from 'components/Home/LeafletMap/MarkerLayout';

import { LocalityItem } from 'types/home';

import { localityList, surveyMapParams } from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import useRender from 'hooks/useRender';
import useWeather from 'hooks/useWeather';

const Content = () => {
  const { getDepositarList } = useRender();
  const [markers, setMarkers] = useState<
    (Dictionary<number | string> | LocalityItem)[]
  >([]);
  const { filter, setFilter } = useSurveyMapContext();
  const { getDataAllTimeRange } = useWeather();

  const isFetchingList = markers.length === 0;

  useEffect(() => {
    getDepositarList({
      setList: setMarkers,
      resouceId: `8d4b3a7f-5a76-4406-9b19-0c709dbd7d68`,
      defaultList: localityList,
    });
    getDataAllTimeRange();
  }, []);

  return (
    <>
      <MapContainer
        id="leafletmap"
        className="map-area"
        center={surveyMapParams.center}
        zoom={surveyMapParams.zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
      >
        <LayersControl>
          <LayersControl.Overlay name="觀測項目AAA" checked>
            <LayerGroup>
              {!isFetchingList &&
                markers.map((v) => {
                  return <MarkerLayout key={v['_id']} data={v} />;
                })}
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
