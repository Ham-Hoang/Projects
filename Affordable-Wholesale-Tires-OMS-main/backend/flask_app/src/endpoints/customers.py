from flask import Blueprint, jsonify, request


customers_blueprint = Blueprint("customers_blueprint", __name__)

@customers_blueprint.route('/', methods=['GET'])
def customerHome():
    return("Customers API Route")