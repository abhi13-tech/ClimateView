# backend/app/models.py

import pandas as pd

def load_climate_data():
    # Path to the Excel file
    file_path = 'data/ClimateImpactLab_USData_20March2023.xlsx'
    
    # Load the Excel file (adjust sheet name and columns as necessary)
    df = pd.read_excel(file_path)
    
    # Example: Only load specific columns or perform data cleaning here
    df = df[['Year', 'Month', 'Temperature Anomaly']]
    
    # Convert data to dictionary format for easy API serving
    return df.to_dict(orient='records')
