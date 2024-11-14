// src/Legend.js

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import './Legend.css'; // CSS for the legend styling

function Legend({ colorScale }) {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]; // Adjust grades as needed

      for (let i = 0; i < grades.length - 1; i++) {
        const color = colorScale((grades[i] + grades[i + 1]) / 2).hex();
        div.innerHTML +=
          '<i style="background:' + color + '"></i> ' +
          grades[i] + '&ndash;' + grades[i + 1] + '<br>';
      }

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map, colorScale]);

  return null;
}

export default Legend;
