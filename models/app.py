from flask import Flask, request, jsonify
from fetal_prediction import get_result
from flask_cors import CORS

app = Flask(__name__)

# Allow frontend access
CORS(app, resources={r"/api": {"origins": "http://localhost:5173"}}, supports_credentials=True)

@app.route('/api', methods=['POST'])
def api():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Invalid request body'}), 400

        result = get_result(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
