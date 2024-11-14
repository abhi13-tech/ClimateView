# backend/app/__init__.py

from flask import Flask
from flask_cors import CORS
from .routes import routes  # Importing the routes Blueprint

def create_app():
    app = Flask(__name__)
    
    # Enable Cross-Origin Resource Sharing (CORS) for all routes
    CORS(app)
    
    # Register the Blueprint with a prefix (if necessary)
    app.register_blueprint(routes, url_prefix='/api')
    
    return app
