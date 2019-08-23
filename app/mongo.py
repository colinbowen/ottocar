# mongodb instance
import os
from pymongo import MongoClient
import json
from bson.json_util import dumps

cluster = MongoClient("mongodb+srv://dbUser1:6RYuCemlWE8J3XDq@cluster0-6rw4r.mongodb.net/test?retryWrites=true&w=majority")

db = cluster["ottocar"]

users_collection = db["users"]
cars_collection = db["cars"]
stats_collection = db["stats"]

def populate():
    cars_collection.insert_one({'id':1,'make':'Volkswagen','model':'Golf', 'year': 2018,'active': True})
    cars_collection.insert_one({'id':2,'make':'Ford','model':'Focus', 'year': 2018,'active': True})
    cars_collection.insert_one({'id':3,'make':'Renault','model':'Clio', 'year': 2018,'active': True})
    cars_collection.insert_one({'id':4,'make':'Tesla','model':'Model 3', 'year': 2018,'active': True})
    cars_collection.insert_one({'id':5,'make':'Toyota','model':'Prius', 'year': 2018,'active': True})
