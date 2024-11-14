# backend/app/routes.py

from flask import Blueprint, jsonify, request
from .models import load_climate_data  # Import load_climate_data if defined in models.py

routes = Blueprint('routes', __name__)

@routes.route('/api/temperature-anomalies', methods=['GET'])
def get_temperature_anomalies():
    # Load the climate data
    data = load_climate_data()
    
    # Get query parameters for filtering
    year = request.args.get('year', type=int)
    month = request.args.get('month')
    
    # Filter data based on query parameters
    if year:
        data = [d for d in data if d['Year'] == year]
    if month:
        data = [d for d in data if d['Month'] == month]
    
    return jsonify(data)
