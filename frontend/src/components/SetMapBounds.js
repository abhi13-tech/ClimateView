// src/SetMapBounds.js

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function SetMapBounds() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds([
      [-90, -180],
      [90, 180]
    ]);
  }, [map]);

  return null;
}

export default SetMapBounds;
