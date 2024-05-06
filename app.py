from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/roll', methods=['POST'])
def roll():
    # Retrieve JSON data from the POST request
    data = request.get_json()
    # Extract the list of items from the JSON data
    lists = data['lists']
    # Select one item randomly from the list
    selected_item = random.choice(lists)
    # Return the selected item in JSON format
    return jsonify({'selected_item': selected_item})

if __name__ == '__main__':
    app.run(debug=True)

