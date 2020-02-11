from flask import Flask
from flask import render_template
from flask import redirect
from flask import request
from flask import url_for
from flask import make_response

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('home.htm')


@app.route('/login', methods=['GET'])
def login():
    return render_template('login.htm')


@app.route('/login', methods=['POST'])
def success():
    if request.form['username'] == 'Meill':
        return render_template('calendar.html')
    return redirect(url_for('login'))


@app.route('/search', methods=['GET'])
def openxg():
    form = request.args
    for x in form:
        print(x, form[x])
    return None


@app.route('/read', methods=['GET'])
def read():
    file_name = request.args
    files = request.args.get('file')
    return render_template('readphoto.html', file_name=file_name, files=files)


@app.route('/result', methods=['GET'])
def result():
    file_name = request.args
    return render_template('student.html', result=file_name)


if __name__ == '__main__':
    app.run(debug=False)
