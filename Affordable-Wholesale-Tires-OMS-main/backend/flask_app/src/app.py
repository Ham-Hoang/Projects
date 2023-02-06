# load libaries
from flask import Flask, jsonify
import sys

# load modules
from src.endpoints.customers import customers_blueprint
from src.endpoints.employees import employees_blueprint

# init Flask app
app = Flask(__name__)


# register blueprints. ensure that all paths are versioned!
app.register_blueprint(customers_blueprint, url_prefix="/api/customers")
app.register_blueprint(employees_blueprint, url_prefix="/api/employees")
