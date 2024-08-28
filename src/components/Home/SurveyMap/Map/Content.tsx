import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
  LayerGroup,
} from 'react-leaflet';

import Filter from 'components/Home/SurveyMap/Map/Filter';
import MarkerLayout from 'components/Home/SurveyMap/Map/MarkerLayout';

import { LocalityItem, SiteYearItem } from 'types/home';

import {
  localityList,
  generateSurveyMapItemList,
  surveyMapParams,
} from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import useRender from 'hooks/page/useRender';
import useSurveyMap from 'hooks/api/useSurveyMapApi';

const Content = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const PREFIX = 'Map';

  const surveyMapItemList = generateSurveyMapItemList();

  const { getDepositarList } = useRender();
  const [localities, setLocalities] = useState<
    (Dictionary<number | string> | LocalityItem)[] | null
  >(null);
  const [markers, setMarkers] = useState<
    (Dictionary<number | string> | LocalityItem)[]
  >([]);
  const [data, setData] = useState<SiteYearItem[]>([]);
  const { filter } = useSurveyMapContext();
  const { getOptions } = useSurveyMap();

  const isFetchingLocalities = localities === null;

  const dropdownOptions = () => {
    getOptions({ setData });
  };

  const handleSiteFilter = () => {
    if (!isFetchingLocalities) {
      if (filter.item !== '') {
        const matchPlan = surveyMapItemList.find(
          (v) => v.title === filter.item
        )!.plan;
        const matchSite = data
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
    dropdownOptions();
  }, []);

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
      <Filter I18N_KEY_PREFIX={I18N_KEY_PREFIX} dropdownOptions={data} />
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
                    return (
                      <MarkerLayout
                        key={v.locationID}
                        data={v}
                        I18N_KEY_PREFIX={`${I18N_KEY_PREFIX}.${PREFIX}`}
                      />
                    );
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
