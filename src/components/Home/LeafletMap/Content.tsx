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

import {
  localityList,
  surveyMapItemList,
  surveyMapParams,
} from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import useRender from 'hooks/page/useRender';
import useWeather from 'hooks/items/useWeather';

import itemList from 'data/home/items.json';

const Content = () => {
  const { getDepositarList } = useRender();
  const [localities, setLocalities] = useState<
    (Dictionary<number | string> | LocalityItem)[] | null
  >(null);
  const [markers, setMarkers] = useState<
    (Dictionary<number | string> | LocalityItem)[]
  >([]);
  const { filter } = useSurveyMapContext();

  const isFetchingLocalities = localities === null;

  const handleSiteFilter = () => {
    if (!isFetchingLocalities) {
      if (filter.item !== '') {
        const matchPlan = surveyMapItemList.find(
          (v) => v.title === filter.item
        )!.plan;
        const matchSite = itemList
          .filter((item) =>
            item.years.some(
              (v) => v.year === filter.year && v.items.includes(matchPlan)
            )
          )
          .map((v) => v.site);
        const matchMarker = localities.filter((v) =>
          matchSite.includes(String(v.locationID))
        );
        setMarkers([...matchMarker]);
      } else {
        setMarkers([...localities]);
      }
    }
  };

  useEffect(() => {
    handleSiteFilter();
  }, [localities, filter.item]);

  useEffect(() => {
    getDepositarList({
      setList: setLocalities,
      resouceId: `8d4b3a7f-5a76-4406-9b19-0c709dbd7d68`,
      defaultList: localityList,
    });
  }, []);

  return (
    <>
      <Filter />
      <div className="map-area">
        <MapContainer
          id="leafletmap"
          className="map-box"
          center={surveyMapParams.center}
          zoom={surveyMapParams.zoom}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          zoomControl={false}
        >
          <LayersControl>
            <LayersControl.Overlay name="" checked>
              <LayerGroup>
                {!isFetchingLocalities &&
                  markers.map((v) => {
                    return <MarkerLayout key={v['_id']} data={v} />;
                  })}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ScaleControl position="bottomleft" imperial={false} />
        </MapContainer>
      </div>
    </>
  );
};

export default Content;
