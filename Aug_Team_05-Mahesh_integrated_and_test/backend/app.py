from flask import Flask, request, jsonify
from pymongo import MongoClient
import numpy as np
import pandas as pd
import statistics
import logging  # Import the logging module
import math
import re  # Import the regular expression module
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000/"}})
# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017')
db = client['data']
collection = db['data']  # Change the collection name as needed

# Specify the new collection name
app = Flask(__name__)
x       
def calculate_iqr(values):
    values_sorted = sorted(values)
    n = len(values_sorted)
    q1_index = int(n * 0.25)  # Index for the first quartile
    q3_index = int(n * 0.75)  # Index for the third quartile
    q1 = values_sorted[q1_index]
    q3 = values_sorted[q3_index]
    iqr = q3 - q1
    return iqr

@app.route('/api/all_statistics2/<statistic>', methods=['GET'])
def get_all_statistics2(statistic):
    try:
        valid_statistics = ['mean', 'median', 'mode', 'minimum', 'maximum', 'count', 'standard_deviation', 'variance', 'interquartilerange']

        if statistic not in valid_statistics:
            return jsonify({'message': 'Invalid statistic type'})

        data = list(collection.find({}, {'reading': 1, 'writing': 1, '_id': 0}))
        attributes = ['reading', 'writing']

        result = {}

        for attribute in attributes:
            values = [item[attribute] for item in data if isinstance(item[attribute], (int, float)) and not math.isnan(item[attribute])]

            if values:
                if statistic == 'mean':
                    result[attribute] = round(statistics.mean(values), 4)
                elif statistic == 'median':
                    result[attribute] = round(statistics.median(values), 4)
                elif statistic == 'mode':
                    try:
                        result[attribute] = statistics.mode(values)
                    except statistics.StatisticsError:
                        result[attribute] = None
                elif statistic == 'minimum':
                    result[attribute] = round(min(values), 4)
                elif statistic == 'count':
                    result[attribute] = len(values)
                elif statistic == 'maximum':
                    result[attribute] = round(max(values), 4)
                elif statistic == 'standard_deviation':
                    result[attribute] = round(statistics.stdev(values), 3)
                elif statistic == 'variance':
                    result[attribute] = round(statistics.variance(values), 2)
                elif statistic == 'interquartilerange':
                    result[attribute] = round(calculate_iqr(values), 4)  # Calculate and round IQR value to 4 decimal places
            else:
                result[attribute] = None

        response = jsonify(result)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response

    except Exception as e:
        return jsonify({'message': 'An error occurred', 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
