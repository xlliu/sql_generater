from flask import Flask, render_template

import common

app = Flask(__name__)

# ��ʼ��
common.init(app)


@app.route('/index/')
def index():
    return render_template('index.html')


@app.route('/')
def boot():
    return render_template('detail.html')


if __name__ == '__main__':
    app.run(debug=True)
