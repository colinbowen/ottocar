from flask import Flask, render_template, jsonify, abort, make_response, request, redirect
import os

import mongo
import json
from bson.json_util import dumps

from flask_cors import CORS
import flask_monitoringdashboard as dashboard


# app
app = Flask(__name__)
dashboard.bind(app)
CORS(app)

# mongo.populate()

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/stats')
def stats():
    return redirect('/dashboard')


@app.route('/api/v1/cars', methods=['GET'])
def get_cars():
    cars = dumps(mongo.cars_collection.find())

    mongo.stats_collection.update_one({'type':'get'}, {"$inc": {'get': 1}}, upsert=True)
    return cars


@app.route('/api/v1/cars/<int:car_id>', methods=['GET'])
def get_car(car_id):
    car = dumps(mongo.cars_collection.find_one({'id' : car_id}))

    mongo.stats_collection.update_one({'type':'get'}, {"$inc": {'get': 1}}, upsert=True)
    return car


@app.route('/api/v1/cars', methods=['POST'])
def create_car():
    if not request.json:
        abort(400)
    data = request.args or request.form or request.get_json(force=True, silent=True) or request.data
    car = json.loads(data['car'])
    print(car)
    mongo.cars_collection.insert_one(car)

    mongo.stats_collection.update_one({'type':'post'}, {"$inc": {'post': 1}}, upsert=True)
    return jsonify({'Success...added': car['id']})


@app.route('/api/v1/cars/<int:car_id>', methods=['PUT'])
def update_car(car_id):
    if not request.json:
        abort(400)
    data = request.args or request.form or request.get_json(force=True, silent=True) or request.data
    car = json.loads(data['car'])
    print(car)
    if 'make' in car:
        make = car['make']
        print(make)
        mongo.cars_collection.update_one({'id' : car_id}, {"$set": {'make': make}})
    if 'model' in car:
        model = car['model']
        print(model)
        mongo.cars_collection.update_one({'id' : car_id}, {"$set": {'model': model}})
    if 'year' in car:
        year = car['year']
        print(year)
        mongo.cars_collection.update_one({'id' : car_id}, {"$set": {'year': year}})
    if 'active' in car:
        active = car['active']
        print(active)
        mongo.cars_collection.update_one({'id' : car_id}, {"$set": {'active': active}})
    
    mongo.stats_collection.update_one({'type':'put'}, {"$inc": {'put': 1}}, upsert=True)
    return jsonify({'car': car})


@app.route('/api/v1/cars/<int:car_id>', methods=['DELETE'])
def delete_car(car_id):
    mongo.cars_collection.delete_one({'id': car_id})

    mongo.stats_collection.update_one({'type':'delete'}, {"$inc": {'delete': 1}}, upsert=True)
    return jsonify({'result': True})


## Total number of cars added
@app.route('/api/v1/stats/count', methods=['GET'])
def stats_count():
    count = dumps(mongo.cars_collection.estimated_document_count())

    mongo.stats_collection.update_one({'type':'get'}, {"$inc": {'get': 1}}, upsert=True)
    return jsonify({'count': count})

## Total number of active cars and inactive cars
@app.route('/api/v1/stats/active', methods=['GET'])
def stats_active_cars():
    active = dumps(mongo.cars_collection.count_documents({'active': True}))
    inactive = dumps(mongo.cars_collection.count_documents({'active': False}))

    mongo.stats_collection.update_one({'type':'get'}, {"$inc": {'get': 1}}, upsert=True)
    return jsonify({'active': active},{'inactive': inactive})

## Active number of HTTP requests sent to the server, 
## classified by HTTP method (eg: 3 GET requests, 4 POST requests, 5 PUT requests)
@app.route('/api/v1/stats/requests', methods=['GET'])
def stats_active_requests():
    get = mongo.stats_collection.find_one({'type': 'get'})
    post = mongo.stats_collection.find_one({'type': 'post'})
    put = mongo.stats_collection.find_one({'type': 'put'})
    delete = mongo.stats_collection.find_one({'type': 'delete'})

    mongo.stats_collection.update_one({'type':'get'}, {"$inc": {'get': 1}}, upsert=True)
    return jsonify({'get': get['get']},{'post': post['post']},{'put': put['put']},{'delete': delete['delete']})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
    
    