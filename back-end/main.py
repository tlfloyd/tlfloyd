from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():
    data = {'message': 'Hello from the server!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5500)