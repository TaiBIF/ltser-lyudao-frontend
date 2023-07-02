import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import { Marker, Popup, Tooltip } from 'react-leaflet';
import { LatLngExpression, DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import MarkerIconLayout from 'components/Home/LeafletMap/MarkerIconLayout';
import PopupLayout from 'components/Home/LeafletMap/PopupLayout';
import TooltipLayout from 'components/Home/LeafletMap/TooltipLayout';
import { useSurveyMapContext } from 'context/SurveyMapContext';

import itemList from 'data/home/items.json';
import { surveyMapItemList } from 'data/home/content';

interface MarkerLayoutProps {
  data: Dictionary<number | string>;
}

const MarkerLayout = (props: MarkerLayoutProps) => {
  const { data } = props;
  const { filter, setFilter } = useSurveyMapContext();
  const [active, setActive] = useState<boolean>(false);
  const [items, setItems] = useState<string[]>([]);

  const location: LatLngExpression = [
    Number(data.decimalLatitude),
    Number(data.decimalLongitude),
  ];

  const handleMarkerClick = () => {
    setActive(true);
    setFilter({ ...filter, id: String(data.locationID) });
  };

  const mapIcon = () =>
    new DivIcon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
      html: ReactDOMServer.renderToString(<MarkerIconLayout active={active} />),
    });
  const icon = mapIcon();

  useEffect(() => {
    const matchSite = itemList.find((v) => v.site === data.locationID);
    if (matchSite) {
      const matchItem = matchSite.items
        .map((item) => {
          return surveyMapItemList
            .filter((v) => v.plan === item)
            .map((v) => v.title);
        })
        .flat();
      setItems([...matchItem]);
    }
  }, []);

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
          <PopupLayout setActive={setActive} data={data} items={items} />
        </Popup>
        <Tooltip offset={[30, -16.5]}>
          <TooltipLayout data={data} items={items} />
        </Tooltip>
      </Marker>
    </>
  );
};

export default MarkerLayout;
