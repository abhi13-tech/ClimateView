import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DataSummary.css';

function DataSummary() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="data-summary-container">
            <div className="summary-card" onClick={() => handleNavigation('/temperature')}>
                <h3>Global Temperature</h3>
                <p>Explore global temperature data trends.</p>
            </div>
            <div className="summary-card" onClick={() => handleNavigation('/sea-level')}>
                <h3>Sea Level</h3>
                <p>View sea level rise data over time.</p>
            </div>
            <div className="summary-card" onClick={() => handleNavigation('/weather-patterns')}>
                <h3>Weather Patterns</h3>
                <p>Analyze historical and projected weather patterns.</p>
            </div>
        </div>
    );
}

export default DataSummary;
