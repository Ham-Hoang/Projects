from flask import Blueprint, jsonify, request


employees_blueprint = Blueprint("employees_blueprint", __name__)

@employees_blueprint.route('/', methods=['GET'])
def employeesHome():
    return("Employees API Route")