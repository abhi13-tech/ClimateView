// frontend/src/components/TemperatureMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
// frontend/src/api.js
import { API_URL } from '../api'; // Use the imported API_URL

function TemperatureMap({ year, month }) {
    const [anomalyData, setAnomalyData] = useState([]);

    useEffect(() => {
        // Construct the URL with optional query parameters for filtering
        let url = `${API_URL}/temperature-anomalies`;
        const params = new URLSearchParams();
        if (year) params.append("year", year);
        if (month) params.append("month", month);
        url += `?${params.toString()}`;

        // Fetch data from the backend
        fetch(url)
            .then(response => response.json())
            .then(data => setAnomalyData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, [year, month]);

    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {anomalyData.map((point, index) => (
                <CircleMarker
                    key={index}
                    center={[point.latitude || 0, point.longitude || 0]}  // Adjust based on lat/lon fields
                    radius={5}
                    fillOpacity={0.6}
                    color={point[month] > 0 ? 'red' : 'blue'}  // Red for positive anomaly, blue for negative
                >
                    <Tooltip>
                        <span>Year: {point.Year}</span><br />
                        <span>Month: {month || "Average"}</span><br />
                        <span>Anomaly: {point[month]}°C</span>
                    </Tooltip>
                </CircleMarker>
            ))}
        </MapContainer>
    );
}

export default TemperatureMap;