import axios from 'axios';

// frontend/src/api.js
export const API_URL = "http://localhost:5001/api";

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
    }
};