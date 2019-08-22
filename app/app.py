from flask import Flask, render_template, jsonify, abort, make_response, request
import mongo
import json
from bson.json_util import dumps

# app
app = Flask(__name__)

# mongo.populate()

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/v1/cars', methods=['GET'])
def get_tasks():
    cars = dumps(mongo.cars_collection.find())
    return cars


@app.route('/api/v1/cars/<int:car_id>', methods=['GET'])
def get_car(car_id):
    car = dumps(mongo.cars_collection.find_one({'id' : car_id}))
    return car


@app.route('/api/v1/cars', methods=['POST'])
def create_task():
    if not request.json or not 'make' in request.json:
        abort(400)
    car = {
        'id': request.json['id'],
        'make': request.json['make'],
        'model': request.json['model'],
        'year': request.json['year'],
        'active': False
    }
    # cars.append(car)
    mongo.cars_collection.insert_one(car)
    return jsonify({'Success...added': car['id']}), 201


@app.route('/api/v1/cars/<int:car_id>', methods=['PUT'])
def update_task(car_id):

    car = [car for car in cars if car['id'] == car_id]
    if len(car) == 0:
        abort(404)
    if not request.json:
        abort(400)
    if 'make' in request.json and type(request.json['make']) != str:
        abort(400)
    if 'model' in request.json and type(request.json['model']) is not str:
        abort(400)
    if 'year' in request.json and type(request.json['year']) is not str:
        abort(400)
    if 'active' in request.json and type(request.json['active']) is not str:
        abort(400)
    car[0]['make'] = request.json.get('make', car[0]['make'])
    car[0]['model'] = request.json.get('model', car[0]['model'])
    car[0]['year'] = request.json.get('year', car[0]['year'])
    car[0]['active'] = request.json.get('active', car[0]['active'])

    # mongo.cars_collection.update_one({'id' : car_id}, {"$set": {"newfield": "abc"}})
    return jsonify({'car': car[0]})


@app.route('/api/v1/cars/<int:car_id>', methods=['DELETE'])
def delete_task(car_id):
    mongo.cars_collection.delete_one({'id': car_id})
    return jsonify({'result': True})



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)