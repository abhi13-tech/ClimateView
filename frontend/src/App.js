// src/App.js
import React from 'react'; // This should only appear once at the top
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TemperaturePage from './pages/TemperaturePage';
import SeaLevelPage from './pages/SeaLevelPage';
import WeatherPatternsPage from './pages/WeatherPatternsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/temperature" element={<TemperaturePage />} />
                    <Route path="/sea-level" element={<SeaLevelPage />} />
                    <Route path="/weather-patterns" element={<WeatherPatternsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
